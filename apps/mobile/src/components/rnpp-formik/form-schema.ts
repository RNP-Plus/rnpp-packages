import {array, boolean, InferType, object, string} from 'yup'

export const formSchema = object().shape({
    name: string().min(2, 'Name is too short').max(20, 'Name is too long').required('Name is required'),
    bio: string().min(10, 'Bio is too short').max(100, 'Bio is too long').nullable(),
    features:array(),
    plan:string().required(),
    addon1:boolean(),
    addon2:boolean(),
})

export type FormSchema = InferType<typeof formSchema>

export const initialValues:FormSchema = {
    name: '',
    bio:'',
    features: [],
    plan: '',
    addon1:false,
    addon2:false,
}