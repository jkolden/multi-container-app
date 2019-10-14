import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2),
    color: "white"
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: "red"
    }
  }
}));

const CredentialsDialogue = props => {
  const [open, setOpen] = useState(false);
  const { loginDetails, setLoginDetails } = props;

  const classes = useStyles();

  const handleChange = name => event => {
    setLoginDetails({
      ...loginDetails,
      [name]: event.target.value
    });
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Button onClick={() => setOpen(!open)}>
          <CloudQueueIcon className={classes.icon} />
        </Button>
      </div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Instance Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your instance information below
          </DialogContentText>
          <form>
            <div className="input-group">
              <TextField
                onChange={handleChange("instance")}
                className="input"
                name="instance"
                value={loginDetails.instance}
                type="text"
                label="Instance"
                fullWidth
              />
            </div>
            <div>
              <TextField
                onChange={handleChange("password")}
                name="password"
                value={loginDetails.password}
                className="input"
                type="text"
                label="Instance Weekly Password"
                fullWidth
              />
            </div>
            <div>
              <TextField
                onChange={handleChange("user")}
                name="user"
                value={loginDetails.user}
                className="input"
                type="text"
                label="Username"
                fullWidth
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(!open)}>
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={function() {
              setOpen(!open);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default CredentialsDialogue;
