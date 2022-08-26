import { Box, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Heading from "./Heading";

export default function StepOneContent() {
  return (
    <Box
      sx={{
        width: {
            sm: "75%",
            md: "60%",
            lg: "50%"
        },
        margin: "auto",
        textAlign: "center",
      }}
    >
      <CheckCircleIcon sx={{ color: "#644ce4", height: "100px", width: "100px"}} />
      <Heading/>

    </Box>
  );
}
