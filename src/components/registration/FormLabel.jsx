import { useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { useFormik } from "formik";
import * as Style from "../../styles/style";
import api from "../../services/api";
import { Alert } from "@mui/material";

function FormLabel(){

   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");
   const [error, setError] = useState("");

    const formik = useFormik({
        initialValues:{
            name: "", password: "", password_repeat: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("O campo usuário é obrigatório!"),
            password: yup.string().required("O campo senha é obrigatório!"),
            password_repeat: yup.string()
                .test("password_repeat", "Essa senha não corresponde com a anterior!", function(value){
                    return this.parent.password === value
                })
        }),
        onSubmit: (event, values) => {
            const data = {
                name: name, password: password
            }

            api.post("/user/cadaster", data)
                .then(res =>{
                    setMessage("Usuário cadastrado com sucesso!");

                    setTimeout(function(){
                        window.location.href = "/";
                    }, 3000)
                })
                .catch(error =>{
                    setError("Ocorreu algum erro! Tente novamente!");

                    setTimeout(function(){
                        window.location.href = window.location.pathname;
                    }, 2000)
                })
        },
    });

    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField autoComplete="given-name" name="name"
                        fullWidth id="name" label="Digite o nome de usuário"
                        onChange={(e) => {formik.handleChange(e); setName(e.target.value.trim())}}
                        onBlur={formik.handleBlur} value={(formik.values.name).replace(/\s+/g, '',)}/>

                    {formik.touched.name && formik.errors.name ? (
                        <Style.Message>{formik.errors.name}</Style.Message>
                    ) : null}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-password" name="password"
                        fullWidth id="password" label="Digite uma senha"
                        onChange={(e) => {formik.handleChange(e); setPassword(e.target.value)}} 
                        type="password" onBlur={formik.handleBlur} value={formik.values.password}/>

                    {formik.touched.password && formik.errors.password ? (
                        <Style.Message>{formik.errors.password}</Style.Message>
                    ) : null}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-password-repeat" name="password_repeat"
                        fullWidth id="password_repeat" label="Repita sua senha"
                        onChange={formik.handleChange} type="password" 
                        onBlur={formik.handleBlur} value={formik.values.password_repeat}/>

                    {formik.touched.password_repeat && formik.errors.password_repeat ? (
                        <Style.Message>{formik.errors.password_repeat}</Style.Message>
                    ) : null}
                </Grid>
            </Grid>

            <Button 
                type="submit" fullWidth 
                variant="contained" sx={{ mt: 3, mb: 2 }} onClick={formik.handleSubmit}>
                    Cadastrar
            </Button>

            <Grid item xs={12} sm={6}>
                {message !== "" ? (
                    <Alert severity="success">{message}</Alert>
                ):""}

                {error !== "" ? (
                    <Alert severity="error">{error}</Alert>
                ):""}
            </Grid>
        </>
    )
}

export default FormLabel;