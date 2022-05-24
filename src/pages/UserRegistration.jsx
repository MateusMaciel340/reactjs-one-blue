import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

import ColumnComponents from '../components/registration/ColumnComponents';
import FormLabel from '../components/registration/FormLabel';

const theme = createTheme();

function UserRegistration(){
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidt="xs">
                <CssBaseline/>
                <Box sx={{
                    marginTop: 10, display: "flex", 
                    flexDirection: "column", alignItems: "center"
                }}>
                    <ColumnComponents/>

                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <FormLabel/>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/" variant="body2" style={{
                                    color: "#0d6efd", textDecoration: "none"
                                }}>
                                    Retornar | Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default UserRegistration;