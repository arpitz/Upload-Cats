import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  
  image: {
    height: "300px"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px",
    height: "100%",
    position: "relative",
  },
  title: {
    padding: "0 16px",
    textTransform: "capitalize",
    textAlign: "center"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  opac0: {
    opacity: 0
  },
  opac6: {
    opacity: 0.8
  },
  fav: {
    color: "red"
  }
});
