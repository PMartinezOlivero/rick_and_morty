import { useState } from "react";
import Validator from "../../utils/Validator";


export default function Form(){

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
        // setErrors({
        //     Validator({
        //         ...userData,
        //         [e.target.name] : e.target.value
        //     })
        // });

        setUserData({
            ...userData,
            [e.target.name] : e.target.value

        });
    };

    return (
        <>
            <div className="box">
                <form className="" >
                    <label htmlFor="email">email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}