import { useState } from "react";
import Validator from "../../utils/Validator";
import styles from "./Form.module.css";


export default function Form(props){

    const [ userData, setUserData ] = useState({
        email:'',
        password:''
    });

    const [ errors, setErrors ] = useState({
        email:'',
        password:''
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setUserData({
    //         ...userData,
    //         [e.target.name] : e.target.value

    //     });
    // };

    const handleChange = (e) => {
        setErrors(
            Validator({
                ...userData,
                [e.target.name] : e.target.value
            })
        );

        setUserData({
            ...userData,
            [e.target.name] : e.target.value

        });
    };

    return (
        <>
            <div className={styles.box}>
                <form className="" onSubmit={()=>props.login(userData)}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={userData.email}
                        onChange={handleChange}
                        className={errors.email && styles.errors}
                    />
                    {errors.email && <span className={styles.errors}>{errors.email}</span>}
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={userData.password}
                        onChange={handleChange}
                        className={errors.password && styles.errors}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}