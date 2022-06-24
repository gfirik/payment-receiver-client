import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(90deg, #ba183b 30%, #FF8E53 90%) right",
    backgroundSize: "200%",
    transition: "1s ease-in-out",
    width: "50%",
    height: "40px",
    "& span": {
      color: "white",
    },
    "&:hover": {
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      backgroundPosition: "left",
      color: "white",
    },
  },
});
export default useStyles;
