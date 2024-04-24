import { useField } from 'formik';
import { FC } from 'react';
import { Checkbox, SwitchProps, HelperText, Switch } from 'react-native-paper';

export interface SwitchFormikProps extends Omit<SwitchProps, 'value' | 'onValueChange'> {
    name: string;
}

export const SwitchFormik: FC<SwitchFormikProps> = ({ name, ...rest }) => {
    const [field, meta, helpers] = useField(name);
    const { value, onBlur } = field;
    const { touched, error } = meta;

    const errorMessage = touched && error ? error : undefined;
    const hasError = errorMessage !== undefined;

    const props: SwitchProps = {
        ...rest,
        value,
        onValueChange: async () => {
            await helpers.setTouched(true);
            await helpers.setValue(!value);
        },
    };

    return (
        <>
            <Switch {...props} />
            <HelperText type="error" visible={hasError}>
                {errorMessage}
            </HelperText>
        </>
    );
};
