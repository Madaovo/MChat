import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
          overflow: "hidden",
          "& body": {
            height: "100%",
            overflow: "hidden",
            "& #root": {
              height: "100%",
            },
          },
        },
      },
    },
  },
});
export default theme;
