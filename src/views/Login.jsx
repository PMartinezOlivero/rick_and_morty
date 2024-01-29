import Form from "../components/Form/Form";

export default function Login(props) {
    return (
        <>
            <div>
                <Form login={props.login}/>
            </div>
        </>
    );
}