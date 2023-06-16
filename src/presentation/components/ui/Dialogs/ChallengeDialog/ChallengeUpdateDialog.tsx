import { FormActionType } from "@infrastructure/utils/formActionTypes";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ChallengeUpdateForm } from "@presentation/components/forms/Challenge/ChallengeUpdateForm";
import { useIntl } from "react-intl";

export const ChallengeUpdateDialog = ({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const { formatMessage } = useIntl();
    const close = () => setIsOpen(false);

    return <div>
        <Dialog
            open={isOpen}
            onClose={close}>
            <DialogTitle>
                {formatMessage({ id: "labels.updateChallenge" })}
            </DialogTitle>
            <DialogContent>
                <ChallengeUpdateForm
                    onSubmit={close}
                    action={FormActionType.UPDATE}
                />
            </DialogContent>
        </Dialog>
    </div>
};