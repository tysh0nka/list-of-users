import React, {useState} from 'react';
import UserProfile from "./UserProfile";
import {UserType} from "../../store/usersReducer";
import {useFormik} from "formik";
import {useLocation} from "react-router-dom";

type FormikErrorType = {
    name: string,
    userName: string,
    email: string,
    street: string,
    city: string,
    zipcode: string,
    phone: string,
    website: string,
}

function UserProfileContainer() {

    const user = useLocation().state as UserType
    const [readOnly, setReadOnly] = useState(true)


    const formik = useFormik({
        initialValues: {
            name: user.name,
            userName: user.username,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
            phone: user.phone,
            website: user.website,
            comments: '',
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.name) {
                errors.name = 'Required'
            }
            if (!values.userName) {
                errors.userName = 'Required'
            }
            if (!values.city) {
                errors.city = 'Required'
            }
            if (!values.phone) {
                errors.phone = 'Required'
            }
            if (!values.street) {
                errors.street = 'Required'
            }
            if (!values.website) {
                errors.website = 'Required'
            }
            if (!values.zipcode) {
                errors.zipcode = 'Required'
            }
            return errors;
        },
        onSubmit: values => {
            console.log(JSON.stringify(values))
        },
    })

    if (user) return <UserProfile formik={formik} setReadOnly={setReadOnly} readOnly={readOnly}/>

    return (
        <div>NOT FOUND</div>
    );
}

export default UserProfileContainer;