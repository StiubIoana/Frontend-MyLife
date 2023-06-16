import { useIntl } from "react-intl";
import { isUndefined } from "lodash";
import { IconButton, Paper, Input, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { DataLoadingContainer } from "../../LoadingDisplay";
import { useChallengeAttributeTableController } from "./ChallengeAttributeTable.controller";
import { ChallengeAttributeDTO } from "@infrastructure/apis/client";
import DeleteIcon from '@mui/icons-material/Delete';
import { ChallengeAttributeAddDialog, ChallengeAttributeUpdateDialog} from "../../Dialogs/ChallengeAttributeDialog";
import { useOwnUserHasRole } from '@infrastructure/hooks/useOwnUser';
import { UserRoleEnum } from '@infrastructure/apis/client';
import { ChallengeAttribute } from "@application/state-slices/challengeAttribute/challengeAttributeSlice.types";
import { setChallengeAttributeToUpdate } from "@application/state-slices/challengeAttribute";
import { useAppDispatch } from "@application/store";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
/**
 * This hook returns a header for the table with translated columns.
 */
const useHeader = (): { key: keyof ChallengeAttributeDTO, name: string }[] => {
    const { formatMessage } = useIntl();

    return [
        { key: "name", name: formatMessage({ id: "globals.name" }) },
        { key: "points", name: formatMessage({ id: "globals.points" }) },
    ]
};

/**
 * The values in the table are organized as rows so this function takes the entries and creates the row values ordering them according to the order map.
 */
const getRowValues = (entries: ChallengeAttributeDTO[] | null | undefined, orderMap: { [key: string]: number }) =>
    entries?.map(
        entry => {
            return {
                entry: entry,
                data: Object.entries(entry).filter(([e]) => !isUndefined(orderMap[e])).sort(([a], [b]) => orderMap[a] - orderMap[b]).map(([key, value]) => { return { key, value } })
            }
        });

/**
 * Creates the ChallengeAttribute table.
 */
export const ChallengeAttributeTable = () => {
    const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
    const { formatMessage } = useIntl();
    const dispatch = useAppDispatch();
    const header = useHeader();
    const orderMap = header.reduce((acc, e, i) => { return { ...acc, [e.key]: i } }, {}) as { [key: string]: number }; // Get the header column order.
    const [search, setSearch] = useState("");
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay, remove } = useChallengeAttributeTableController(search); // Use the controller hook.
    const rowValues = getRowValues(pagedData?.data, orderMap); // Get the row values.
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdateOnClick = (entry: ChallengeAttributeDTO) => {
        dispatch(setChallengeAttributeToUpdate(entry as ChallengeAttribute))
        setIsUpdate(true);
    }

    return <DataLoadingContainer isError={isError} isLoading={isLoading} tryReload={tryReload}> {/* Wrap the table into the loading container because data will be fetched from the backend and is not immediately available.*/}
        {isAdmin && <ChallengeAttributeAddDialog/>} {/* Add the button to open the ChallengeAttribute add modal. */}
        {isAdmin && <ChallengeAttributeUpdateDialog isOpen={isUpdate} setIsOpen={setIsUpdate}/> }
        <Input value={search} onChange={(e: any) => {
            setSearch(e.target.value);
            tryReload();
        }} placeholder={formatMessage({ id: "labels.search" })}></Input>
        {!isUndefined(pagedData) && !isUndefined(pagedData?.totalCount) && !isUndefined(pagedData?.page) && !isUndefined(pagedData?.pageSize) &&
            <TablePagination // Use the table pagination to add the navigation between the table pages.
                component="div"
                count={pagedData.totalCount} // Set the entry count returned from the backend.
                page={pagedData.totalCount !== 0 ? pagedData.page - 1 : 0} // Set the current page you are on.
                onPageChange={handleChangePage} // Set the callback to change the current page.
                rowsPerPage={pagedData.pageSize} // Set the current page size.
                onRowsPerPageChange={handleChangePageSize} // Set the callback to change the current page size. 
                labelRowsPerPage={formatMessage({ id: "labels.itemsPerPage" })}
                labelDisplayedRows={labelDisplay}
                showFirstButton
                showLastButton
            />}

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            header.map(e => <TableCell key={`header_${String(e.key)}`}>{e.name}</TableCell>) // Add the table header.
                        }
                        {isAdmin && <TableCell key="actionrow">{formatMessage({ id: "labels.actions" })}</TableCell>} {/* Add additional header columns if needed. */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { //{data.map((keyValue, index) => <TableCell key={`cell_${rowIndex + 1}_${index + 1}`}>{keyValue.value}</TableCell>)} {/* Add the row values. */}

                        rowValues?.map(({ data, entry }, rowIndex) => <TableRow key={`row_${rowIndex + 1}`}>
                            {data.map((keyValue, index) => <TableCell key={`cell_${rowIndex + 1}_${index + 1}`}>{keyValue.value}</TableCell>)} {/* Add the row values. */}
                            {isAdmin && <TableCell> {/* Add other cells like action buttons. */}
                                {isAdmin && <IconButton color='secondary' onClick={() => remove(entry.id || '')}>
                                    <DeleteIcon color='secondary' fontSize='small' />
                                </IconButton>}
                                {isAdmin && <IconButton color='secondary' onClick={() => handleUpdateOnClick(entry)}>
                                    <EditIcon color='secondary' fontSize='small' />
                                </IconButton>}
                            </TableCell>}
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </DataLoadingContainer >
}