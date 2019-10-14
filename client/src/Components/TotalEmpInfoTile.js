/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function TotalEmpInfoTile(props) {
  const classes = useStyles();

  const formatter = new Intl.NumberFormat();
  let date = Date(Date.now());

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
        {formatter.format(props.employees.length)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date.toString()}
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          details
        </Link>
      </div>
    </React.Fragment>
  );
}
