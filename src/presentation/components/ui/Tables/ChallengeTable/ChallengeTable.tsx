import { useIntl } from "react-intl";
import { isUndefined } from "lodash";
import { IconButton, Paper, Input, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { DataLoadingContainer } from "../../LoadingDisplay";
import { useChallengeTableController } from "./ChallengeTable.controller";
import { useChallengeProgressTableController } from "../ChallengeProgressTable/ChallengeProgressTable.controller";
import { ChallengeWithAttributesDTO, ChallengeDTO } from "@infrastructure/apis/client";
import DeleteIcon from '@mui/icons-material/Delete';
import { ChallengeAddDialog, ChallengeUpdateDialog} from "../../Dialogs/ChallengeDialog";
import { useOwnUserHasRole } from '@infrastructure/hooks/useOwnUser';
import { UserRoleEnum } from '@infrastructure/apis/client';
import { Challenge } from "@application/state-slices/challenge/challengeSlice.types";
import { setChallengeToUpdate } from "@application/state-slices/challenge";
import { useAppDispatch } from "@application/store";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "react-bootstrap";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useJoinApi, useCompleteApi, useQuitApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@application/store"
/**
import { toast } from "react-toastify";
 * This hook returns a header for the table with translated columns.
 */
const useHeader = (): { key: keyof ChallengeWithAttributesDTO, name: string }[] => {
    const { formatMessage } = useIntl();

    return [
        { key: "title", name: formatMessage({ id: "globals.title" }) },
        { key: "description", name: formatMessage({ id: "globals.description" }) },
        { key: "challengeAttributes", name: formatMessage({ id: "globals.attributes" }) }
    ]
};

/**
 * The values in the table are organized as rows so this function takes the entries and creates the row values ordering them according to the order map.
 */
const getRowValues = (entries: ChallengeWithAttributesDTO[] | null | undefined, orderMap: { [key: string]: number }) =>
    entries?.map(
        entry => {
            return {
                entry: entry,
                data: Object.entries(entry).filter(([e]) => !isUndefined(orderMap[e])).sort(([a], [b]) => orderMap[a] - orderMap[b]).map(([key, value]) => { return { key, value } })
            }
        });

/**
 * Creates the Challenge table.
 */
export const ChallengeTable = () => {
    const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
    const { loggedIn, exp } = useAppSelector(x => x.profileReducer);
    const { formatMessage } = useIntl();
    const dispatch = useAppDispatch();
    const header = useHeader();
    const orderMap = header.reduce((acc, e, i) => { return { ...acc, [e.key]: i } }, {}) as { [key: string]: number }; // Get the header column order.
    const [search, setSearch] = useState("");
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay, remove } = useChallengeTableController(search); // Use the controller hook.
    const rowValues = getRowValues(pagedData?.data, orderMap); // Get the row values.
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdateOnClick = (entry: ChallengeDTO) => {
        dispatch(setChallengeToUpdate(entry as Challenge))
        setIsUpdate(true);
    }

    const queryClient = useQueryClient();

    const { JoinMutation: { joinmutation, joinkey: joinmutationKey } } = useJoinApi();
    const { mutateAsync: join } = useMutation([joinmutationKey], joinmutation);
    const joinCallback = useCallback((data: string) => // Create a submit callback to send the form data to the backend.
        join(data).then((result) => {
            toast(formatMessage({ id: "notifications.messages.authenticationSuccess" }));
            window.location.reload();
        }), [join, queryClient]);

    const { CompleteMutation: { completemutation, completekey: completemutationKey } } = useCompleteApi();
    const { mutateAsync: complete } = useMutation([completemutationKey], completemutation);
    const completeCallback = useCallback((data: string) => // Create a submit callback to send the form data to the backend.
        complete(data).then((result) => {
            toast(formatMessage({ id: "notifications.messages.authenticationSuccess" }));
            window.location.reload();
        }), [complete, queryClient]);


    const { QuitMutation: { quitmutation, quitkey: quitmutationKey } } = useQuitApi();
    const { mutateAsync: quit } = useMutation([quitmutationKey], quitmutation);
    const quitCallback = useCallback((data: string) => // Create a submit callback to send the form data to the backend.
        quit(data).then((result) => {
            toast(formatMessage({ id: "notifications.messages.authenticationSuccess" }));
            window.location.reload();
        }), [quit, queryClient]);

    if(!isAdmin)
        var { pagedUserData} = useChallengeProgressTableController(); // Use the controller hook.

    return <DataLoadingContainer isError={isError} isLoading={isLoading} tryReload={tryReload}> {/* Wrap the table into the loading container because data will be fetched from the backend and is not immediately available.*/}
        {isAdmin && <ChallengeAddDialog/>} {/* Add the button to open the Challenge add modal. */}
        {isAdmin && <ChallengeUpdateDialog isOpen={isUpdate} setIsOpen={setIsUpdate}/> }
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
                rowsPerPageOptions={[5, 10, { value: -1, label: 'All' }]}
            />}

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            header.map(e => <TableCell key={`header_${String(e.key)}`} style={{ textAlign: "center"}}>{e.name}</TableCell>) // Add the table header.
                        }
                       {loggedIn && <TableCell style={{ textAlign: "center"}} key="actionrow">{formatMessage({ id: "labels.actions" })}</TableCell>} {/* Add additional header columns if needed. */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { //{data.map((keyValue, index) => <TableCell key={`cell_${rowIndex + 1}_${index + 1}`}>{keyValue.value}</TableCell>)} {/* Add the row values. */}

                        rowValues?.map(({ data, entry }, rowIndex) => <TableRow key={`row_${rowIndex + 1}`}>
                            <TableCell key={`cell_${rowIndex + 1}_1`} style={{ textAlign: "center"}}>{data.at(0)?.value}</TableCell>
                            <TableCell key={`cell_${rowIndex + 1}_2`} style={{ textAlign: "center"}}>{data.at(1)?.value}</TableCell>
                            <TableCell key={`cell_${rowIndex + 1}_3`} style={{ textAlign: "center"}}>{data.at(2)?.value.map((attribute: any) => attribute.name + " +" + attribute.points + " ")}</TableCell>
                            {!isAdmin && loggedIn && <TableCell key={`cell_${rowIndex + 1}_4`} style={{ textAlign: "center"}}>
                            {(() => {
                                const buttons = [];
                                let found = false;
                                if (pagedUserData?.data?.length)
                                    for (let i = 0; i < pagedUserData?.data?.length; i++) {
                                        if (pagedUserData?.data?.at(i)?.challenge?.title == data.at(0)?.value) {
                                            buttons.push(<Button style={{marginRight: "5px", marginBottom:"5px", color:"purple", backgroundColor:"white"}}
                                            onClick={
                                                async () => {
                                                    await completeCallback(data.at(0)?.value);
                                                }
                                            }>
                                                            {formatMessage({ id: "labels.complete" })}
                                                        </Button>);
                                            buttons.push(<Button style={{marginRight: "5px", color:"purple", backgroundColor:"white"}}
                                            onClick={
                                                async () => {
                                                    await quitCallback(data.at(0)?.value);
                                                }
                                            }>
                                                        {formatMessage({ id: "labels.quit" })}
                                                        </Button>);
                                            found = true;
                                            break;
                                        }
                                    }
                                if (!found){
                                    if (data.at(0)?.value)
                                    buttons.push(<Button type="button" style={{marginRight: "5px", color:"purple", backgroundColor:"white"}}
                                    onClick={
                                        async () => {
                                            await joinCallback(data.at(0)?.value);
                                        }
                                    }>{formatMessage({ id: "labels.join" })}
                                                </Button>);
                                }

                                return buttons;
                                })()}
                            </TableCell> }
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