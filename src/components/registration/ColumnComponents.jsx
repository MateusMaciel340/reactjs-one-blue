import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function ColumnComponents(){
    return(
        <>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <SupervisedUserCircle/>
            </Avatar>

            <Typography component="h1" variant="h5">
                Registro - Usuários
            </Typography>
        </>
    )
}

export default ColumnComponents;