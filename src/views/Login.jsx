import Form from "../components/Form/Form";
import styles from "./Login.module.css";

export default function Login(props) {
    return (
        <>
            <div className={styles.box}>
                <Form login={props.login}/>

            </div>
        </>
    );
}