import { Avatar, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        width: "400px",
        margin: "auto",
        marginTop: "50px",
        marginBottom:"50px",
        display:"flex",
        justifyContent: 'center'
      }}
    >
    <Avatar src="https://github.com/anurawat01/eden-onboarding/tree/master/public/static/images/avatar/logo.jpg" alt="logo" />
    <Typography variant="h6" sx={{ paddingTop:"5px"}} > Eden</Typography>
    </Box>
  );
}
