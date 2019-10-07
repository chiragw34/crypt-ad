import themeFile from "../../util/theme";

export default {
  ...themeFile,
  pageTitle: {
    textAlign: "center",
    padding: 5,
    margin: "5px auto 10px auto"
  },
  root: {
    flexGrow: 1
  },
  bottom: {
    textAlign: "center"
  },
  card: {
    padding: 10,
    margin: "2px auto 2px auto"
  },
  subTitle: {
    marginTop: 10,
  },
  underline: {
    color: themeFile.palette.primary1Color,
    border: "solid",
    borderWidth: "thin",
    margin: 0,
    display: "block",
    padding: 0
  },
  button: {
    margin: 30,
    position: "relative"
  },
  smallText: {
    fontSize: "medium",
    fontFamily: "sans-serif"
  },
  imgLogo: {
    padding: 10,
    fontSize: "10.1875rem"
  }
};
