import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import * as Style from "../styles/style";
import api from "../services/api";
import { useState } from "react";
import { Alert } from "@mui/material";

function Form(props){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const formik = useFormik({
        initialValues:{
            name: "", password: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("O campo usuário é obrigatório!"),
            password: yup.string().required("O campo senha é obrigatório!")
        }),
        onSubmit: (values) =>{
            const data = { name: name, password: password }

            api.post("/login", data)
                .then(res => {
                    setMessage(`Bem-vindo novamente, ${res.data.login}!`);

                    setTimeout(function(){
                        window.location.href = window.location.pathname;
                    },2000)
                })
                .catch(error =>{
                    if(error.response.data.ok === false){
                        setError("Dados não encontrados!");
                    }else{
                        setError("Ocorreu algum erro! Tente novamente!");
                    }

                    setTimeout(function(){
                        window.location.href = window.location.pathname;
                    }, 2000)
                })

        },
    })

    return(
        <>

            {message !== "" ? (
                <Alert severity="success">{message}</Alert>
            ): ""}

            {error !== "" ? (
                <Alert severity="error">{error}</Alert>
            ): ""}

            <TextField
                margin="normal" fullWidth id="name" type="text"
                name="name" autoComplete="name"
                onChange={(e) => {formik.handleChange(e); setName(e.target.value)}} 
                onBlur={formik.handleBlur} value={formik.values.name}

                label={"Digite seu nome de usuário"}
            />

            {formik.touched.name && formik.errors.name ? (
                <Style.MessageLogin>{formik.errors.name}</Style.MessageLogin>
            ): null}

            <TextField
                margin="normal" fullWidth name="password"
                type="password" id="password" autoComplete="current-password" 
                onChange={(e) => {formik.handleChange(e); setPassword(e.target.value)}}
                onBlur={formik.handleBlur} value={formik.values.password}

                label={"Digite sua senha"}
            />

            {formik.touched.password && formik.errors.password ? (
                <Style.MessageLogin>{formik.errors.password}</Style.MessageLogin>
            ): null}

            <Button type="submit" fullWidth
                variant="contained" sx={{ mt: 3, mb: 2 }} onClick={formik.handleSubmit}>
                    Entrar
            </Button>
        </>
    )
}

export default Form;