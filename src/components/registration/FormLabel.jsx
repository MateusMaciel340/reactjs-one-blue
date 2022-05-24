import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import * as yup from "yup";
import { useFormik } from "formik";

import * as Style from "../../styles/style";

function FormLabel(){

    const formik = useFormik({
        initialValues:{
            name: "", password: "", password_repeat: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("O campo usuário é obrigatório!"),
            password: yup.string().required("O campo senha é obrigatório!"),
            password_repeat: yup.string().required("Repita sua senha anterior!")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField autoComplete="given-name" name="name"
                        fullWidth id="name" label="Digite o nome de usuário"
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.name}/>

                    {formik.touched.name && formik.errors.name ? (
                        <Style.Message>{formik.errors.name}</Style.Message>
                    ) : null}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-password" name="password"
                        fullWidth id="password" label="Digite uma senha"
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.password}/>

                    {formik.touched.password && formik.errors.password ? (
                        <Style.Message>{formik.errors.password}</Style.Message>
                    ) : null}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-password-repeat" name="password_repeat"
                        fullWidth id="password_repeat" label="Repita sua senha"
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.password_repeat}/>

                    {formik.touched.password_repeat && formik.errors.password_repeat ? (
                        <Style.Message>{formik.errors.password_repeat}</Style.Message>
                    ) : null}
                </Grid>
            </Grid>

            <Button 
                type="submit" fullWidth 
                variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Cadastrar
            </Button>
        </form>
    )
}

export default FormLabel;