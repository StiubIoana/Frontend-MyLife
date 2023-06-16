import { FormActionType } from "@infrastructure/utils/formActionTypes";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ChallengeAttributeUpdateForm } from "@presentation/components/forms/ChallengeAttribute/ChallengeAttributeUpdateForm";
import { useIntl } from "react-intl";

export const ChallengeAttributeUpdateDialog = ({ isOpen, setIsOpen }: {
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
                {formatMessage({ id: "labels.updateChallengeAttribute" })}
            </DialogTitle>
            <DialogContent>
                <ChallengeAttributeUpdateForm
                    onSubmit={close}
                    action={FormActionType.UPDATE}
                />
            </DialogContent>
        </Dialog>
    </div>
};