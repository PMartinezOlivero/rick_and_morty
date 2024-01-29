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

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    };

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
                <h3>Proyecto:</h3>
                <h2>RICK&MORTY</h2>
                <hr />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            value={userData.email}
                            onChange={handleChange}
                            className={errors.email && styles.errors}
                        />
                        {errors.email && <span className={styles.errors}>{errors.email}</span>}
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text" 
                            name="password" 
                            value={userData.password}
                            onChange={handleChange}
                            className={errors.password && styles.errors}
                        />
                        {errors.password && <span className={styles.errors}>{errors.password}</span>}
                    </div>
                    <button className={styles.button} onClick={handleSubmit}>LOGIN</button>
                </form>
            </div>
        </>
    );
}