import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoMiddleware from "../assets/middleware.png";
import * as Style from "../styles/style";

function AuthenticationSuccess(){

    setTimeout(function(){
        window.location.href = "/";
    },4000)

    return(
        <Box sx={{ display: "flex", 
            flexDirection: "column", minHeight: "100vh"
        }}>
            <CssBaseline/>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Style.ImageLogo src={LogoMiddleware}/>

                <Typography variant="body1">
                    Como existe a ausência de um middleware, você estará retornando :)
                </Typography>
            </Container>

            <Box component="footer" sx={{
                py: 3, px: 2, mt: "auto", backgroundColor: (theme) => 
                    theme.palette.mode === "light" ? theme.palette.grey[200]
                    : theme.palette.grey[800],
            }}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        Todos os direitos reservados - Teste OneBlue
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default AuthenticationSuccess;