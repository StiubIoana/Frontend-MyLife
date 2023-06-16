import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    OutlinedInput,
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useChallengeAttributeUpdateFormController } from "./ChallengeAttributeUpdateForm.controller";
import { isEmpty, isUndefined } from "lodash";
import { FormActionType } from "@infrastructure/utils/formActionTypes";


/**
 * Here we declare the ChallengeAttribute Update form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const ChallengeAttributeUpdateForm = (props: { onSubmit?: () => void,
    action: FormActionType }) => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useChallengeAttributeUpdateFormController(props.onSubmit); // Use the controller.

    return <form onSubmit={actions.handleSubmit(actions.submit)}> {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
        <Stack spacing={4} style={{ width: "100%" }}>
            <Grid container item direction="row" xs={12} columnSpacing={4}>
                <Grid container item direction="column" xs={6} md={6}>
                    <FormControl
                        fullWidth
                        error={!isUndefined(state.errors.name)}
                    > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                        <FormLabel required>
                            <FormattedMessage id="globals.name" />
                        </FormLabel> {/* Update a form label to indicate what the input means. */}
                        <OutlinedInput
                            {...actions.register("name")} // Bind the form variable to the UI input.
                            placeholder={formatMessage(
                                { id: "globals.placeholders.textInput" },
                                {
                                    fieldName: formatMessage({
                                        id: "globals.name",
                                    }),
                                })}
                            autoComplete="none"
                        /> {/* Update a input like a textbox shown here. */}
                        <FormHelperText
                            hidden={isUndefined(state.errors.name)}
                        >
                            {state.errors.name?.message}
                        </FormHelperText> {/* Update a helper text that is shown then the input has a invalid value. */}
                    </FormControl>
                </Grid>
                <Grid container item direction="column" xs={6} md={6}>
                    <FormControl
                        fullWidth
                        error={!isUndefined(state.errors.points)}
                    >
                        <FormLabel required>
                            <FormattedMessage id="globals.points" />
                        </FormLabel>
                        <OutlinedInput
                            {...actions.register("points")}
                            placeholder={formatMessage(
                                { id: "globals.placeholders.textInput" },
                                {
                                    fieldName: formatMessage({
                                        id: "globals.points",
                                    }),
                                })}
                            autoComplete="none"
                        />
                        <FormHelperText
                            hidden={isUndefined(state.errors.points)}
                        >
                            {state.errors.points?.message}
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item direction="row" xs={12} className="padding-top-sm">
                <Grid container item direction="column" xs={12} md={7}></Grid>
                <Grid container item direction="column" xs={5}>
                    <Button type="submit" disabled={!isEmpty(state.errors) || computed.isSubmitting}> {/* Update a button with type submit to call the submission callback if the button is a descended of the form element. */}
                        {!computed.isSubmitting && <FormattedMessage id="globals.submit" />}
                        {computed.isSubmitting && <CircularProgress />}
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    </form>
};