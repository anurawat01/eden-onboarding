import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function InputField() {
  return (
    <>
      <InputLabel htmlFor="workspace-name" sx={{ paddingTop: "70px" }}>
        Workspace Name
      </InputLabel>
      <TextField
        id="workspace-name"
        placeholder="Eden"
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
        required
      />
      <InputLabel htmlFor="workspace-url">Workspace URL (Optional)</InputLabel>
      <TextField
        id="workspace-url"
        placeholder="Example"
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">www.eden.com/</InputAdornment>
          ),
        }}
        required
      />
    </>
  );
}
