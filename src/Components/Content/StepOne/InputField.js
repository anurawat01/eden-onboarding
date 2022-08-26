import { InputLabel, TextField } from "@mui/material";


export default function InputField() {

  return (
    <>
      <InputLabel htmlFor="outlined-basic" sx={{ paddingTop: "70px" }}>
        Full Name
      </InputLabel>
      <TextField
        id="outlined-basic"
        placeholder="Steve Jobs"
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
        name="fullname"
      />

      <InputLabel htmlFor="outlined-basic">Display Name</InputLabel>
      <TextField
        id="outlined-basic"
        placeholder="Steve"
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
        name="displayname"
      />
    </>
  );
}
