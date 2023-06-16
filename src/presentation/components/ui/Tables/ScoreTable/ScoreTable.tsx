import { useIntl } from "react-intl";
import { isUndefined } from "lodash";
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { DataLoadingContainer } from "../../LoadingDisplay";
import { useScoreTableController } from "./ScoreTable.controller";

/**
 * This hook returns a header for the table with translated columns.
 */
const useHeader = (): { key: string, name: string }[] => {
    const { formatMessage } = useIntl();

    return [
        { key: "attributeName", name: formatMessage({ id: "globals.challengeAttribute" }) },
        { key: "points", name: formatMessage({ id: "globals.points" }) },
    ]
};


export const ScoreTable = () => {
    const { formatMessage } = useIntl();
    const header = useHeader();
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay} = useScoreTableController(); // Use the controller hook.
    if (pagedData?.data?.length == 0)
        return <Typography>{ formatMessage({ id: "globals.noScoresToShow" }) }</Typography>;

    return <DataLoadingContainer isError={isError} isLoading={isLoading} tryReload={tryReload}> {/* Wrap the table into the loading container because data will be fetched from the backend and is not immediately available.*/}
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
                            header.map(e => <TableCell key={`header_${String(e.key)}`} style={{ textAlign: "center"}}>{e.name}</TableCell>) // Add the table header.
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pagedData?.data?.map(({ scorePoints, challengeAttribute }, rowIndex) => <TableRow key={`row_${rowIndex + 1}`}>
                        <TableCell key={`cell_${rowIndex + 1}_1`} style={{ textAlign: "center"}}>{challengeAttribute?.name}</TableCell>
                        <TableCell key={`cell_${rowIndex + 1}_2`} style={{ textAlign: "center"}}>{scorePoints}</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </DataLoadingContainer >
}