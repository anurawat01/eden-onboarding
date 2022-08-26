import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
        main : "#644ce4",
        "&:hover": {
            backgroundColor: "#644ce4",
        }
    }
  },
  typography: {
      fontFamily : 'Inter'
  }  
});


export default theme;
