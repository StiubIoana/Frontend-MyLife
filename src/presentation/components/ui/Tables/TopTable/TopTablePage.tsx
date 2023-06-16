import { useIntl } from "react-intl";
import { isUndefined } from "lodash";
import { Container } from "@mui/material";
import { DataLoadingContainer } from "../../LoadingDisplay";
import { useTopTableController } from "./TopTable.controller";
import {AccordionItem} from "./Accordion";
/**
 * This hook returns a header for the table with translated columns.
 */

export const TopTablePage = () => {
    const { formatMessage } = useIntl();
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay} = useTopTableController(); // Use the controller hook.
    
    return <Container>
        {(() => {
            var elements: any[] = [];
            if (pagedData?.data)
            pagedData.data.map(({ name, scores }) => 
            elements.push(
            <AccordionItem name={name} scores={scores} pagedData={pagedData} isError ={isError} isLoading={isLoading} tryReload={tryReload}
            handleChangePage={handleChangePage} handleChangePageSize={handleChangePageSize} labelDisplay={labelDisplay}></AccordionItem>
            ));

            return elements;
        })()}
    </Container>
}