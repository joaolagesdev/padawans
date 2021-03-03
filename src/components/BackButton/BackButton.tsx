import Button from "@material-ui/core/Button/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "#5F3473",
    lineHeight: 0,
  },
  backButton: {
    marginRight: "15px",
  },
});

const BackButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Link to="/principal" className={classes.link}>
      <Button
        className={classes.backButton}
        variant="contained"
        color="secondary"
      >
        <ArrowBackOutlinedIcon />
      </Button>
    </Link>
  );
};

export default BackButton;
