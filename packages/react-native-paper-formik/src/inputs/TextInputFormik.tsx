import { useField } from 'formik';
import { FC } from 'react';
import { HelperText, TextInput, TextInputProps } from 'react-native-paper';

export interface TextInputFormikProps extends TextInputProps {
    name: string;
}

export const TextInputFormik: FC<TextInputFormikProps> = ({ name, ...rest }) => {
    const [field, meta, helpers] = useField(name);
    const { value, onBlur } = field;
    const { touched, error } = meta;

    const errorMessage = touched && error ? error : undefined;
    const hasError = errorMessage !== undefined;
    const props: TextInputProps = {
        ...rest,
        error: hasError,
        value,
        onBlur: () => helpers.setTouched(true),
        onChangeText: (newText: string) => helpers.setValue(newText),
    };
    return (
        <>
            <TextInput {...props} />
            <HelperText type="error" visible={hasError}>
                {errorMessage}
            </HelperText>
        </>
    );
};
