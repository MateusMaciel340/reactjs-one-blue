import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

import OneBlue from "../assets/logo-oneblue.png";

const theme = createTheme();

export default function SignInSide(){
    return(
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline/>
                <LeftColumn
                    linkImage={OneBlue}
                />
                <RightColumn/>
                
            </Grid>
        </ThemeProvider>
    )
}