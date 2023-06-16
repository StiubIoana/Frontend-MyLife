import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useChallengeAttributeAddDialogController } from "./ChallengeAttributeAddDialog.controller";
import { ChallengeAttributeAddForm } from "@presentation/components/forms/ChallengeAttribute/ChallengeAttributeAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the ChallengeAttribute add form into a modal dialog.
 */
export const ChallengeAttributeAddDialog = () => {
  const { open, close, isOpen } = useChallengeAttributeAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addChallengeAttribute" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addChallengeAttribute" })}
      </DialogTitle>
      <DialogContent>
        <ChallengeAttributeAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};