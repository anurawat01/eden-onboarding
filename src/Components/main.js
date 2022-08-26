import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepOneContent from "./Content/StepOne/StepOneContent";
import StepTwoContent from "./Content/StepTwo/StepTwoContent";
import StepThreeContent from "./Content/StepThree/StepThreeContent";
import StepFourContent from "./Content/StepFour/StepFourContent";
import Header from "./Content/Header";
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import theme from "./Theme";
import { useForm } from "react-hook-form";

const steps = ["1", "2", "3", "4"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <StepOneContent />;
    case 1:
      return <StepTwoContent />;
    case 2:
      return <StepThreeContent />;
    case 3:
      return <StepFourContent />;
    default:
      return "Unknown Step";
  }
};

export default function Main() {
  const [activeStep, setActiveStep] = React.useState(0);
  const methods = useForm()


  const handleNext = (e) => {
    e.preventDefault()
    console.log('Data Submitted')
    if(activeStep < steps.length - 1){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleSubmit = (e) => {
     e.preventDefault()
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "30%",
            lg: "40%",
          },
          margin: "auto",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel sx={{}}>
          {steps.map((label) => {
            return (
              <Step
                key={label}
                sx={{
                  "& .MuiStepConnector-root .MuiStepConnector-line": {
                    border: "2px solid #644ce4",
                    backgroundColor: "#644ce4",
                    color: "#644ce4",
                  },
                }}
              >
                <StepLabel disabled />
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <Box
        sx={{
          margin: "auto",
          marginTop: "100px",
          width: "100%",
        }}
      >
        <form id="my-form" onSubmit={handleNext}>
        {getStepContent(activeStep)}
        </form>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "50%",
            lg: "30%",
          },
          margin: "auto",
          paddingTop: "25px",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
          }}
          fullWidth
          onClick={(e) => activeStep === steps.length - 1 ? "" : handleNext(e)}
          variant="contained"
          type="submit"
          form="my-form"
        >
          {activeStep === steps.length - 1 ? "Launch Eden" : "Create Workspace"}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
