import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";

function TextTop(){
    return(
        <>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon/>
            </Avatar>

            <Typography component="h1" variant="h5">
                Login
            </Typography>
        </>
    )
}

export default TextTop;