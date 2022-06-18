import { FormikErrors } from "formik";

export interface IProps {
    index: number;
    title: [];
    action_add: () => void,
    form_data: IFormValues,
    form_errors: FormikErrors<IFormValues>,
    handleChange: () => void,
    handler_discard: () => void
}

export interface IFormValues {
    title: [];
    index: number;
}



