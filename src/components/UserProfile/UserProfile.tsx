import React from 'react';
import styles from './UserProfile.module.scss'

type UserProfilePropsType = {
    formik: any
    setReadOnly: (value: boolean) => void
    readOnly: boolean
}

function UserProfile({formik, setReadOnly, readOnly}: UserProfilePropsType) {

    return (
        <div className={styles.userProfile}>
            <div className={styles.header}>
                <h3>Профиль пользователя</h3>
                <button onClick={() => setReadOnly(false)}>Редактировать</button>
            </div>
            <div className={styles.form}>
                <form onSubmit={formik.handleSubmit}>
                    <span>Name</span>
                    <input name={'name'}
                           value={formik.values.name}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.name ? {border: 'red solid 2px'} : {}}
                    />
                    <span>User name</span>
                    <input name={'userName'}
                           value={formik.values.userName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.userName ? {border: 'red solid 2px'} : {}}
                    />
                    <span>Email</span>
                    <input name={'email'}
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.email ? {border: 'red solid 2px'} : {}}
                    />
                    <span>Street</span>
                    <input name={'street'}
                           value={formik.values.street}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.street ? {border: 'red solid 2px'} : {}}
                    />
                    <span>City</span>
                    <input name={'city'}
                           value={formik.values.city}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.city ? {border: 'red solid 2px'} : {}}
                    />
                    <span>Zip code</span>
                    <input name={'zipcode'}
                           value={formik.values.zipcode}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.zipcode ? {border: 'red solid 2px'} : {}}
                    />
                    <span>Phone</span>
                    <input name={'phone'}
                           value={formik.values.phone}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.phone ? {border: 'red solid 2px'} : {}}
                    />
                    <span>Website</span>
                    <input name={'website'}
                           value={formik.values.website}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           disabled={readOnly}
                           style={formik.errors.website ? {border: 'red solid 2px'} : {}}
                    />
                    <span>Comments</span>
                    <textarea name={'comments'}
                              value={formik.values.comments}
                              onChange={formik.handleChange}
                              disabled={readOnly}
                    />
                    <button type={'submit'}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default UserProfile;