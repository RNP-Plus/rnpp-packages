import {Button, Checkbox, List, RadioButton, Surface, Switch, TextInput} from 'react-native-paper';
import {Formik} from "formik";
import {ScrollView, StyleSheet, Text} from "react-native";
import {useState} from "react";
import {FormSchema, formSchema, initialValues,} from "../../components/rnpp-formik/form-schema";
import {FormikHelpers} from "formik/dist/types";
import {FormResultsDialog} from "../../components/rnpp-formik/FormResultsDialog";
import {useFormResultDialog} from "../../components/rnpp-formik/useFormResultDialog";
import {TextInputFormik} from "react-native-paper-formik";
import {CheckboxItemFormik, RadioButtonFormik, SwitchFormik} from "react-native-paper-formik/src";

export default function Home() {
    const {dialogVisibility, showDialog, hideDialog, formResult} = useFormResultDialog()
    const [radioVal, setRadioVal] = useState('first');
    const onSubmitHandler = (values: FormSchema, formikHelpers: FormikHelpers<FormSchema>) => {
        showDialog(values);
    }
    return (
        <ScrollView style={styles.container} bounces={true}>
            <FormResultsDialog visible={dialogVisibility} hideDialog={hideDialog} values={formResult}/>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={values => console.log(values)}
            >
                {({values, handleSubmit, setFieldValue}) => (
                    <>
                        <Surface style={styles.formGroup}>
                            <Text>{JSON.stringify(values, null, 4)}</Text>
                        </Surface>
                        <Surface style={styles.formGroup}>
                            <List.Section title="Account Info (TextInput)">
                                <TextInputFormik
                                    name={'name'}
                                    label={'Full name'}
                                    clearButtonMode={'always'}
                                   />
                                <TextInputFormik name={'bio'} label={'Bio'} multiline={true} style={styles.inputs} clearButtonMode={'always'}/>
                            </List.Section>
                        </Surface>
                        <Surface style={styles.formGroup}>
                            <List.Section title="Features to enable (Checkbox)">
                                <CheckboxItemFormik name={'features'} value={'alpha'} label={'Feature Alpha'} mode={'android'}/>
                                <CheckboxItemFormik name={'features'} value={'beta'} label={'Feature Beta'} mode={'android'} />
                            </List.Section>
                        </Surface>
                        <Surface style={styles.formGroup}>
                            <List.Section title="Addons to enable (Switch)">
                                <List.Item
                                    title={'Gamma add-on'}
                                    right={props => <SwitchFormik name={'addon1'}/>}
                                />

                                <List.Item
                                    title={'Delta add-on'}
                                    right={props => <SwitchFormik name={'addon2'}/>}
                                />
                            </List.Section>
                        </Surface>
                        <Surface style={styles.formGroup}>
                            <List.Section title="Plan (RadioButton)">
                                <List.Item
                                    title={'Plan Epsilon'}
                                    right={props =>  <RadioButtonFormik name={'plan'} value="epsilon" uncheckedColor={'black'}/>}
                                />
                                <List.Item
                                    title={'Plan Zeta'}
                                    right={props =>  <RadioButtonFormik name={'plan'} value="zeta" uncheckedColor={'pink'}/>}
                                />
                                <RadioButton
                                    value="first"
                                    status={ 'checked'}
                                    onPress={() => true}
                                />
                            </List.Section>
                        </Surface>
                        <Button mode={'contained'} style={styles.submitBtn}
                                onPress={() => handleSubmit()}>Submit</Button>
                    </>
                )}
            </Formik>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {},
    formGroup: {
        marginBottom: 10,
        padding: 5
    },
    inputs: {
        marginBottom: 10
    },
    submitBtn: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20
    }
})