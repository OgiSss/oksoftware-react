import { useState } from "react";

export default function useForm(initialFormValues) {

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            const inputValue = checked;
            setFormValues((prevState) => ({ ...prevState, [name]: inputValue }))
        } else {
            const inputValue = value;
            setFormValues((prevState) => ({ ...prevState, [name]: inputValue }))
        }
    }

    return {
        formValues,
        handleInputChange
    }
}