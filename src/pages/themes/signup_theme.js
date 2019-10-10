import themeFile from "../../util/theme";

export default {
  ...themeFile,
  pageTitle: {
    textAlign: "center",
    padding: 5,
    margin: "5px auto 10px auto"
  },
  root: {
    flexGrow: 1,
    padding: "1% 28px 2% 28px"
  },
  bottom: {
    textAlign: "center"
  },
  card: {
    padding: 10,
    margin: "1% auto 1% auto"
  },
  subTitle: {
    marginTop: 10
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
    margin: "2% 3% 2% 0",
    float: "right"
  },
  small: {
    marginTop:'5%'
  },
  smallText: {
    fontSize: "medium",
    fontFamily: "sans-serif",
    margin: "3% auto 2% auto"
  },
  imgLogo: {
    padding: 10,
    fontSize: "10.1875rem"
  },
  main: {
    marginTop: "1%"
  },
  title: {
    padding: 5,
    marginTop: "1%"
  },
};
