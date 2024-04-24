import {useState} from "react";
import {FormSchema} from "./form-schema";

export const useFormResultDialog = () => {
    const [dialogVisibility, setDialogVisibility] = useState(false);
    const [formResult, setFormResult] = useState<Partial<FormSchema>>({});
    const hideDialog = () => setDialogVisibility(false)
    const showDialog = (values: FormSchema) => {
        setFormResult(values)
        setDialogVisibility(true)
    }

    return {formResult, showDialog, dialogVisibility, hideDialog}
}