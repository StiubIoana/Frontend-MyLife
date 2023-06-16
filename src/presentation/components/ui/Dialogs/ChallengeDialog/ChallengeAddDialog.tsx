import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useChallengeAddDialogController } from "./ChallengeAddDialog.controller";
import { ChallengeAddForm } from "@presentation/components/forms/Challenge/ChallengeAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the Challenge add form into a modal dialog.
 */
export const ChallengeAddDialog = () => {
  const { open, close, isOpen } = useChallengeAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addChallenge" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addChallenge" })}
      </DialogTitle>
      <DialogContent>
        <ChallengeAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};