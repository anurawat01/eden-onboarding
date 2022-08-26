import {
  Box,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Heading from "./Heading";
import InputField from "./InputField";

export default function StepOneContent() {
  return (
    <>
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
        <Heading />
      </Box>
      <Box
      sx={{
        width: {
            xs:"100%",
            sm: "80%",
            md: "50%",
            lg: "30%"
        },
        margin: "auto"
      }}
    >
      <InputField />
    </Box>
    </>
  );
}
