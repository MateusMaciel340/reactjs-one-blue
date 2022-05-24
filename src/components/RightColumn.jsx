import Form from "../components/Form";
import TextTop from "../components/TextTop";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

function RightColumn(){
    return(
        <>
            <Grid 
                item xs={12} sm={8} md={5} component={Paper} 
                elevation={6} square>
                    <Box sx={{
                        my: 8, mx: 4, display: "flex", flexDirection: "column",
                        alignItems: "center"
                    }}>

                        <TextTop/>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Form/>

                            <Grid container>
                                <Grid item xs>
                                    <Link to="/" variant="body2">
                                        Criar nova conta
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
            </Grid>
        </>
    )
}

export default RightColumn;