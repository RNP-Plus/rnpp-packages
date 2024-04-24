import { useField } from 'formik';
import { FC } from 'react';
import { SwitchProps, HelperText, Switch } from 'react-native-paper';

export interface SwitchFormikProps extends Omit<SwitchProps, 'value' | 'onValueChange'> {
    name: string;
}

export const SwitchFormik: FC<SwitchFormikProps> = ({ name, ...rest }) => {
    const [field, meta, helpers] = useField(name);
    const { touched, error } = meta;

    const errorMessage = touched && error ? error : undefined;
    const hasError = errorMessage !== undefined;

    const props: SwitchProps = {
        ...rest,
        value: field.value,
        onValueChange: async () => {
            await helpers.setTouched(true);
            await helpers.setValue(!field.value);
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
