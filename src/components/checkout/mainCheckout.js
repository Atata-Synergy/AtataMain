// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Container from "@material-ui/core/Container";

// //Checkout
// import Billing from './billingsDetails'
// import Board from './board'
// // import Logistics from './logistics'
// import Atatasure from './Sure'
// import Confirm from './confirmation'

// // Icons
// import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import WcIcon from "@material-ui/icons/Wc";
// import HomeWorkIcon from "@material-ui/icons/HomeWork";
// import CheckIcon from "@material-ui/icons/Check";

// import StepConnector from "@material-ui/core/StepConnector";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Confirmation from "./confirmation";

// const ColorlibConnector = withStyles({
//   alternativeLabel: {
//     top: 22,
//   },
//   active: {
//     "& $line": {
//       backgroundColor: "var(--colorGreen)",
//     },
//   },
//   completed: {
//     "& $line": {
//       backgroundColor: "var(--colorGreen)",
//     },
//   },
//   line: {
//     height: 7,
//     border: 0,
//     backgroundColor: "var(--colorLight)",
//     borderRadius: 1,
//   },
// })(StepConnector);

// const useColorlibStepIconStyles = makeStyles({
//   root: {
//     backgroundColor: "var(--colorLight)",
//     zIndex: 1,
//     color: "#fff",
//     width: 50,
//     height: 50,
//     display: "flex",
//     borderRadius: "50%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   active: {
//     backgroundColor: "var(--colorAsh)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   },
//   completed: {
//     backgroundColor: "var(--colorGreen)",
//   },
// });

// function ColorlibStepIcon(props) {
//   const classes = useColorlibStepIconStyles();
//   const { active, completed } = props;

//   const icons = {
//     1: <AccountBalanceIcon />,
//     2: <CreditCardIcon />,
//     3: <LocalShippingIcon />,
//     4: <WcIcon />,
//     5: <HomeWorkIcon />,
//     6: <CheckIcon />,
//   };

//   return (
//     <div
//       className={clsx(classes.root, {
//         [classes.active]: active,
//         [classes.completed]: completed,
//       })}
//     >
//       {icons[String(props.icon)]}
//     </div>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    */
//   active: PropTypes.bool,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "80%",
//     margin: "auto",
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   checkOutBtn: {
//     marginTop: 35,
//     marginLeft: '70%',
//   },
//   btnNext: {
//     background: "var(--colorGreen)",
//     width: 80,
//     borderRadius: 5,
//     padding: 10,
//     color: 'var(--colorLight)',
//     '& :hover':{
//       color: "var(--colorBlack)"
//     }
//   },
// }));

// function getSteps() {
//   return [
//     "Billing Details",
//     "AtataPay",
//     "AtataLogistics",
//     "AtataSure",
//     "AtataHouse",
//     "Confirmation",
//   ];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <Billing />;
//     case 1:
//       return <Board />;
//     case 2:
//       return <Logistics />;
//     case 3:
//       return <Atatasure />;
//     case 4:
//       return "5";
//     case 5:
//       return <Confirmation />;
//     default:
//       return "Unknown step";
//   }
// }

// export default function CustomizedSteppers() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Container>
//         <Stepper
//           alternativeLabel
//           activeStep={activeStep}
//           connector={<ColorlibConnector />}
//         >
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel StepIconComponent={ColorlibStepIcon}>
//                 {label}
//               </StepLabel>
//             </Step>
//           ))}
//         </Stepper>
        
//       </Container>
//       <Container>
//       <div>
//           {activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>
//                 All steps completed - you&apos;re finished
//               </Typography>
//               <Button onClick={handleReset} className={classes.button}>
//                 Reset
//               </Button>
//             </div>
//           ) : (
//             <div>
//               <Typography className={classes.instructions}>
//                 {getStepContent(activeStep)}
//               </Typography>
//               <div className={classes.checkOutBtn}>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className={classes.button}
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   className={classes.btnNext}
//                 >
//                   {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </Container>
       
//     </div>
//   );
// }
