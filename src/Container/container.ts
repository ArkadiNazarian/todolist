import { useState } from "react"
import { IFormValues, IProps, MyItem } from "../Model/model";
import { useFormik } from 'formik';
import *as yup from "yup";

export const Container = () => {


    const [current_list, set_current_list] = useState<string[]>([])

    const validation_schema = yup.object().shape({
        title: yup.string().required(),
    });

    const initial_value = {
        title: "",
        index: 0
    } as IFormValues

    const action_add = (values: IFormValues) => {
        let newList = [...current_list];
        newList.push(values.title);
        set_current_list(newList);
        console.log(newList);

    }
    const handler_discard = () => {
        set_current_list([])
    }

    const discard_items = (props: MyItem) => {
        const list = [...current_list]
        const removed_list = list.filter(item => item !== String(props.id))
        set_current_list(removed_list)
        console.log(removed_list)
    }
    const formik = useFormik({
        initialValues: initial_value,
        validationSchema: validation_schema,
        onSubmit: action_add
    });
    return {
        items: current_list,
        action_add: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange,
        handler_discard,
        handler_discard_items: discard_items
    } as IProps
}