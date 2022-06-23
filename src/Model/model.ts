import { FormikErrors } from "formik";

export interface IProps {
    items: string[];
    action_add: () => void,
    form_data: IFormValues,
    form_errors: FormikErrors<IFormValues>,
    handleChange: () => void,
    handler_discard: () => void,
    handler_discard_items:()=>void
}

export interface IFormValues {
    title: string;
}

export interface MyItem {
    value: string;
    id:number;
    handler_remove:() => void
}
