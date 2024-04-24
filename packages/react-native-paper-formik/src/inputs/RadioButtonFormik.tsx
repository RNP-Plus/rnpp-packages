import { useField } from 'formik';
import { FC } from 'react';
import { HelperText, RadioButton, RadioButtonProps } from 'react-native-paper';

export interface RadioButtonFormikProps extends Omit<RadioButtonProps, 'onPress' | 'status'> {
    name: string;
    value: string;
}

export const RadioButtonFormik: FC<RadioButtonFormikProps> = ({ name, value: defaultValue, ...rest }) => {
    const [field, meta, helpers] = useField(name);
    const { value, onBlur } = field;
    const { touched, error } = meta;

    const errorMessage = touched && error ? error : undefined;
    const hasError = errorMessage !== undefined;
    const isChecked = value === defaultValue;

    const handlePressed = async () => {
        await helpers.setTouched(true);
        await helpers.setValue(defaultValue);
    };

    const props: RadioButtonProps = {
        ...rest,
        value: defaultValue,
        onPress: handlePressed,
        status: isChecked ? 'checked' : 'unchecked',
    };

    return (
        <>
            <RadioButton {...props} />
            <HelperText type="error" visible={hasError}>
                {errorMessage}
            </HelperText>
        </>
    );
};
