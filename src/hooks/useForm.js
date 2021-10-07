import { useState } from "react";

export default function useForm(initialFormValues) {

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        const inputValue = value || checked;
        setFormValues((prevState) => ({ ...prevState, [name]: inputValue }))
    }

    return {
        formValues,
        handleInputChange
    }
}