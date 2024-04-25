# react-native-paper-formik

A collection of custom form input components for React Native Paper integrated with Formik.

## Installation

You can install `react-native-paper-formik` via bun, yarn or npm:


```bash
bun add @rnpp-packages/react-native-paper-formik
```

or

```bash
yarn add @rnpp-packages/react-native-paper-formik
```

or

```bash
npm install @rnpp-packages/react-native-paper-formik
```

This package has peer dependencies on `react`, `react-native-paper`, and `formik`. Make sure to install them if you
haven't already.

## Components

### TextInputFormik

A text input component integrated with Formik.

#### Props

- `name` (string, required): The name of the field in the Formik form.
- `...rest` (TextInputProps): Any additional props supported by `TextInput` component from React Native Paper.

Example usage:

```jsx
import {TextInputFormik} from 'react-native-paper-formik';

<TextInputFormik
    name="email"
    label="Email"
    mode="outlined"
    keyboardType="email-address"
/>
```

### CheckboxItemFormik

A checkbox item component integrated with Formik.

#### Props

- `name` (string, required): The name of the field in the Formik form.
- `value` (string | number, required): The value of the checkbox item.
- `...rest` (CheckboxItemProps): Any additional props supported by `Checkbox.Item` component from React Native Paper.

Example usage:

```jsx
import {CheckboxItemFormik} from 'react-native-paper-formik';

<CheckboxItemFormik
    name="subscribe"
    label="Subscribe to Newsletter"
    value="newsletter"
/>
```

### SwitchFormik

A switch component integrated with Formik.

#### Props

- `name` (string, required): The name of the field in the Formik form.
- `...rest` (SwitchProps): Any additional props supported by `Switch` component from React Native Paper.

Example usage:

```jsx
import {SwitchFormik} from 'react-native-paper-formik';

<SwitchFormik
    name="notifications"
    label="Enable Notifications"
/>
```

### RadioButtonFormik

A radio button component integrated with Formik.

#### Props

- `name` (string, required): The name of the field in the Formik form.
- `value` (string, required): The value of the radio button.
- `...rest` (RadioButtonProps): Any additional props supported by `RadioButton` component from React Native Paper.

Example usage:

```jsx
import {RadioButtonFormik} from 'react-native-paper-formik';

<RadioButtonFormik
    name="gender"
    label="Male"
    value="male"
/>
```

## License

This package is licensed under the MIT License.
