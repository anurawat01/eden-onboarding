import { Box, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import Heading from "../StepThree/Heading";
import OptionList from "./OptionList";

export default function StepOneContent() {
  return (
    <Box
      sx={{
        width: {
            xs: "100%",
            sm: "80%",
            md: "50%",
            lg: "50%",
        },
        margin: "auto"
      }}
    >
      <Heading />
      <OptionList />
    </Box>
  );
}
