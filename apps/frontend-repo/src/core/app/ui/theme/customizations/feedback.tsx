import { Theme, alpha, Components } from "@mui/material/styles";
import { gray, orange } from "../themePrimitives";

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations: Components<Theme> = {
  MuiAlert: {
    styleOverrides: {
      // Override each severity level as desired
      standardError: {
        backgroundColor: "#f8d7da",
        color: "#721c24",
      },
      standardWarning: {
        backgroundColor: "#fff3cd",
        color: "#856404",
      },
      standardInfo: {
        backgroundColor: "#cce5ff",
        color: "#004085",
      },
      standardSuccess: {
        backgroundColor: "#d4edda",
        color: "#155724",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          border: "1px solid",
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles("dark", {
          backgroundColor: gray[800],
        }),
      }),
    },
  },
};
