import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as yup from "yup";
import { useFormik } from "formik";

import * as Style from "../styles/style";

function Form(props){

    const formik = useFormik({
        initialValues:{
            name: "", password: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("O campo usuário é obrigatório!"),
            password: yup.string().required("O campo senha é obrigatório!")
        }),
        onSubmit: (values) =>{
            alert(JSON.stringify(values, null, 2));
        },
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                margin="normal" fullWidth id="name" type="text"
                name="name" autoComplete="name"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} value={formik.values.name}

                label={"Digite seu nome de usuário"}
            />

            {formik.touched.name && formik.errors.name ? (
                <Style.MessageLogin>{formik.errors.name}</Style.MessageLogin>
            ): null}

            <TextField
                margin="normal" fullWidth name="password"
                type="password" id="password"
                autoComplete="current-password" onChange={formik.handleChange}
                onBlur={formik.handleBlur} value={formik.values.password}

                label={"Digite sua senha"}
            />

            {formik.touched.password && formik.errors.password ? (
                <Style.MessageLogin>{formik.errors.password}</Style.MessageLogin>
            ): null}

            <Button type="submit" fullWidth
                variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Entrar
            </Button>
        </form>
    )
}

export default Form;