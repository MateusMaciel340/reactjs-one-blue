import Grid from "@mui/material/Grid";

function LeftColumn(props){
    return(
        <>
            <Grid
                item xs={false} sm={4} md={7} sx={{
                    backgroundImage: `url(${props.linkImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) =>
                        t.palette.mode === "light" ? t.palette.grey[50] :
                        t.palette.grey[900], backgroundSize: "cover",
                        backgroundPosition: "center"
            }}/>
        </>
    )
}

export default LeftColumn;