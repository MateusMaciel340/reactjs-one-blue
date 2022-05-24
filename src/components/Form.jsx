import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form(){
    return(
        <>
            <TextField
                margin="normal" required fullWidth id="email"
                label="Digite seu email" name="email" autoComplete="email"
                autoFocus
            />

            <TextField
                margin="normal" required fullWidth name="password"
                label="Digite sua senha" type="password" id="password"
                autoComplete="current-password"
            />

            <Button type="submit" fullWidth
                variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Entrar
            </Button>
        </>
    )
}

export default Form;