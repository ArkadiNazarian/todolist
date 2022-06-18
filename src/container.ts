import { useState } from "react"
import { IFormValues, IProps } from "./model";
import { useFormik } from 'formik';
import *as yup from "yup";

export const Container = () => {

    const [current_title, set_title] = useState<IFormValues[]>([])
    const [current_index, set_index] = useState<number>(0)

    const validation_schema = yup.object().shape({
        title: yup.string().required(),
    });

    const initial_value = {
        title: [],
        index:0
    } as IFormValues

    const action_add = (props: IFormValues) => {
        let newList = [...current_title];
        set_index(current_index+1);
        newList.push((props.title[current_index]));
        set_title(newList)
        console.log(newList)
        console.log(current_index)
    }
    const handler_discard = () => {
        set_title([])
    }
    const formik = useFormik({
        initialValues: initial_value,
        validationSchema: validation_schema,
        onSubmit: action_add
    });
    return {
        index:current_index,
        title: current_title,
        action_add: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange,
        handler_discard
    } as IProps
}