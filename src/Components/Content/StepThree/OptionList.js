import {
  Box,
  FormControl,
  FormControlLabel,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

export default function OptionList() {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          lg: "flex",
        },
        justifyContent: "center",
        paddingTop: "70px",
      }}
    >
      <Paper
        variant="outlined"
        value="myself"
        sx={{
          padding: "10px",
          marginRight: "5px",
          borderRadius: "5px",
          width: {
            xs: "100%",
            sm: "100%",
            lg: "30%",
            "&:hover": {
              borderColor: "blue",
            },
          },
        }}
        elevation={0}
      >
        <PersonIcon
          sx={{
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <Typography variant="h6">For myself</Typography>
        <Typography>
          Write Better. Think more clearly. Stay Organised
        </Typography>
      </Paper>

      <Paper
        variant="outlined"
        value="myteam"
        sx={{
          padding: "10px",
          borderRadius: "5px",
          width: {
            xs: "100%",
            sm: "100%",
            lg: "30%",
            "&:hover": {
              borderColor: "blue",
            },
          },
          marginTop: {
            xs: "5px",
            sm: "5px",
            lg: "0px",
          },
        }}
        square
        elevation={0}
        control={<Radio />}
      >
        <GroupsIcon
          sx={{
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <Typography variant="h6">With my team</Typography>
        <Typography>Wikis, docs, talks & project, all in one place.</Typography>
      </Paper>
    </Box>
  );
}
