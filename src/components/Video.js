import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SimpleExpansionPanel from "./ExpandPanel";
import PlayerExample from "./PlayerExample";
import { Player, ControlBar, PlayToggle } from "video-react";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className="Video">
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1>Video Music</h1>

              <Player
                width="5%"
                autoPlay
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <ControlBar autoHide={false} disableDefaultControls={true}>
                  <PlayToggle />
                </ControlBar>
              </Player>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <SimpleExpansionPanel />
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FullWidthGrid);
