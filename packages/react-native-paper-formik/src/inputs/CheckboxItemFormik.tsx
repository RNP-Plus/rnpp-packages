import { useField } from 'formik';
import { FC } from 'react';
import { Checkbox, CheckboxItemProps, HelperText } from 'react-native-paper';

export interface CheckboxItemFormikProps extends Omit<CheckboxItemProps, 'status'> {
    name: string;
    value: string | number;
}

export const CheckboxItemFormik: FC<CheckboxItemFormikProps> = ({ name, value: defaultValue, ...rest }) => {
    const [field, meta, helpers] = useField(name);
    const fieldValue = field.value;
    const { touched, error } = meta;

    const errorMessage = touched && error ? error : undefined;
    const hasError = errorMessage !== undefined;
    const asArray = Array.isArray(fieldValue);
    const isChecked = asArray
        ? (fieldValue as (string | number)[]).includes(defaultValue)
        : fieldValue === defaultValue;

    const handlePressed = async () => {
        const newValue = asArray
            ? isChecked
                ? (fieldValue as (string | number)[]).filter(v => v !== defaultValue)
                : [...fieldValue, defaultValue]
            : isChecked
              ? ''
              : defaultValue;
        await helpers.setTouched(true);
        await helpers.setValue(newValue);
    };

    const props: CheckboxItemProps = {
        ...rest,
        onPress: handlePressed,
        status: isChecked ? 'checked' : 'unchecked',
    };

    return (
        <>
            <Checkbox.Item {...props} />
            <HelperText type="error" visible={hasError}>
                {errorMessage}
            </HelperText>
        </>
    );
};
