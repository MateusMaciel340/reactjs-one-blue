import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function FormLabel(){
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField autoComplete="given-name" name="email" required
                        fullWidth id="email" label="Digite um email" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-name" name="email" required
                        fullWidth id="email" label="Digite uma senha" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField autoComplete="given-name" name="email-repeat" required
                        fullWidth id="email-repeat" label="Repita sua senha" autoFocus/>
                </Grid>
            </Grid>

            <Button 
                type="submit" fullWidth 
                variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Cadastrar
            </Button>
        </>
    )
}

export default FormLabel;