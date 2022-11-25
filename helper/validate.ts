import * as yup from "yup";

export const jobValidationSchema = yup.object().shape({
  fName: yup.string().required("First name is required"),
  lName: yup.string().required("First name is required"),
  email: yup.string().email().required("Email address is required"),
  mobile: yup.string().length(10).required("Mobile number is Required"),
  joiningIn: yup.string().required("Joining time period is required"),
  linkedIn: yup.string().optional(),
  portfolioURL: yup.string().optional(),
  hiringReason: yup.string().required("Please enter the hiring reason"),
  joiningReason: yup.string().required("Please enter the joining reason"),
});

export const projectDataSchema = yup.object().shape({
  aboutProject: yup
    .string()
    .required("Please provide some information about the project"),
  budget: yup.string().required("Please select budget"),
  timeline: yup.string().required("Please give a time line"),
  email: yup.string().email().required("Email address is required"),
  mobile: yup.string().length(10).required("Mobile number is Required"),
  fName: yup.string().required("First name is required"),
  lName: yup.string().required("Last name is required"),
  company: yup.string().notRequired(),
  role: yup.string().notRequired(),
});
