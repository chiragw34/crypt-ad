import themeFile from "../../util/theme";

export default {
  ...themeFile,
  root: {
    flexGrow: 1
  },
  pageTitle: {
    textAlign: "center",
    padding: 5,
    margin: "100px auto 10px auto"
  },
  button: {
    margin: 30,
    position: "relative"
  },
  smallText: {
    fontSize: "medium",
    fontFamily: "sans-serif"
  },
  card: {
    padding: "20px 20px 20px 20px",
    marginTop: 50
  },
  form: {
    textAlign: "center"
  },
  stomError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 20
  },
  typography: {
    useNextVariants: true
  },
    textField: {
      marginBottom: 20
  }
};
