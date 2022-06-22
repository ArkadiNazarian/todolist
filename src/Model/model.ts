import { FormikErrors } from "formik";

export interface IProps {
    index: number;
    items: string[];
    action_add: () => void,
    form_data: IFormValues,
    form_errors: FormikErrors<IFormValues>,
    handleChange: () => void,
    handler_discard: () => void
}

export interface IFormValues {
    title: string;
    index: number;
}

export interface MyItem {
    value: string;
    id:number;
}
