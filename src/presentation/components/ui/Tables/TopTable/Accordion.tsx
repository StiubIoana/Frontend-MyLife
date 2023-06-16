import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useIntl } from "react-intl";
import { TopTable } from "./TopTable";
import { Container } from "react-bootstrap";

export const AccordionItem = (props: any) => {
  const {name, scores, pagedData, isError, isLoading, tryReload, handleChangePage, handleChangePageSize, labelDisplay} = props;
  const { formatMessage } = useIntl();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <Accordion
          expanded={expanded === name}
          onChange={handleChange(name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {formatMessage({ id: "labels.topForAttribute" }, {
                                        // fieldName: formatMessage({
                                        //     id: "globals.role",
                                        // }),
                                        attributeName: name
                                    })}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TopTable name={name} scores={scores} pagedData={pagedData} isError ={isError} isLoading={isLoading} tryReload={tryReload}
              handleChangePage={handleChangePage} handleChangePageSize={handleChangePageSize} labelDisplay={labelDisplay} ></TopTable>
          </AccordionDetails>
        </Accordion>
    );
}
