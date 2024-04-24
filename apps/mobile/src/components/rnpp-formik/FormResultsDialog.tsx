import {FC, useState} from "react";
import { Button, Dialog, Portal } from 'react-native-paper';
import {FormSchema} from "./form-schema";

type FormResultsDialogProps = {
    visible:boolean,
    hideDialog:()=>void,
    values:FormSchema
}

export const FormResultsDialog: FC<FormResultsDialogProps> = ({visible, hideDialog, values}) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Content>
                    {JSON.stringify(values, null, 4)}
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => hideDialog()}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}
