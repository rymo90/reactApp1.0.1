import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p>
              Lorem ipsum dolor sit amet, no cum tantas putent, etiam dicunt
              facilis in his, ei phaedrum antiopam referrentur vix. In nec
              pertinax hendrerit, vitae appareat periculis nam in. Ut purto
              offendit mei, id per exerci phaedrum pertinacia. Primis prompta
              bonorum eu duo, et melius lucilius sed. Oratio oportere et usu, ut
              has quando pertinacia. Vis dicant gubergren in, ius no nihil
              tibique. Ad eam nominavi apeirian deseruisse, labores abhorreant
              id mea. Scripta argumentum ad pro. Quo diam mediocrem ne, sed
              volutpat postulant philosophia ut, sit no noster insolens
              assueverit. Sea modus mazim quodsi ex, ne vim tractatos similique,
              quem propriae forensibus usu ut. At vis veri inimicus interesset,
              qui mutat perfecto explicari et, vis in porro appareat. Te vix
              esse erant consulatu, ne per cibo munere. No his qualisque
              signiferumque. Vix ut exerci incorrupte, pro ea aliquip euismod
              delicata, per et mentitum insolens. Sanctus sadipscing
              complectitur sea an, malis mollis voluptatum ne mel. No facer
              aperiri volutpat vel, autem lucilius ad sit, ne est graece
              sententiae signiferumque. Illud iriure nam in. Vis id wisi
              facilis, nam et odio suscipit. Ut qui dico tantas imperdiet, no
              veri fastidii scripserit vim. Ei magna clita aliquam qui, ut velit
              dolor iuvaret vis. Mei ei impetus splendide reformidans, eu mei
              delicata petentium mediocritatem, id enim quaerendum pro. Ex sit
              eirmod consulatu. An mel case qualisque, in dicunt fabulas
              persequeris eos, eu copiosae maluisset vis. Labitur scripserit no
              mea, ex elit fastidii luptatum vix. Fabellas comprehensam
              mediocritatem at est. In eum cibo disputando, mundi tempor
              voluptaria vis no, vim nibh efficiantur neglegentur ut.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p>
              id mea. Scripta argumentum ad pro. Quo diam mediocrem ne, sed
              volutpat postulant philosophia ut, sit no noster insolens
              assueverit. Sea modus mazim quodsi ex, ne vim tractatos similique,
              quem propriae forensibus usu ut. At vis veri inimicus interesset,
              qui mutat perfecto explicari et, vis in porro appareat. Te vix
              esse erant consulatu, ne per cibo munere. No his qualisque
              signiferumque. Vix ut exerci incorrupte, pro ea aliquip euismod
              delicata, per et mentitum insolens. Sanctus sadipscing
              complectitur sea an, malis mollis voluptatum ne mel. No facer
              aperiri volutpat vel, autem lucilius ad sit, ne est graece
              sententiae signiferumque. Illud iriure nam in. Vis id wisi
              facilis, nam et odio suscipit. Ut qui dico tantas imperdiet, no
              veri fastidii scripserit vim. Ei magna clita aliquam qui, ut velit
              dolor iuvaret vis. Mei ei impetus splendide reformidans, eu mei
              delicata petentium mediocritatem, id enim quaerendum pro. Ex sit
              eirmod consulatu. An mel case qualisque, in dicunt fabulas
              persequeris eos, eu copiosae maluisset vis. Labitur scripserit no
              mea, ex elit fastidii luptatum vix. Fabellas comprehensam
              mediocritatem at est. In eum cibo disputando, mundi tempor
              voluptaria vis no, vim nibh efficiantur neglegentur ut.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p>
              {" "}
              facilis, nam et odio suscipit. Ut qui dico tantas imperdiet, no
              veri fastidii scripserit vim. Ei magna clita aliquam qui, ut velit
              dolor iuvaret vis. Mei ei impetus splendide reformidans, eu mei
              delicata petentium mediocritatem, id enim quaerendum pro. Ex sit
              eirmod consulatu. An mel case qualisque, in dicunt fabulas
              persequeris eos, eu copiosae maluisset vis. Labitur scripserit no
              mea, ex elit fastidii luptatum vix. Fabellas comprehensam
              mediocritatem at est. In eum cibo disputando, mundi tempor
              facilis, nam et odio suscipit. Ut qui dico tantas imperdiet, no
              veri fastidii scripserit vim. Ei magna clita aliquam qui, ut velit
              dolor iuvaret vis. Mei ei impetus splendide reformidans, eu mei
              delicata petentium mediocritatem, id enim quaerendum pro. Ex sit
              eirmod consulatu. An mel case qualisque, in dicunt fabulas
              persequeris eos, eu copiosae maluisset vis. Labitur scripserit no
              mea, ex elit fastidii luptatum vix. Fabellas comprehensam
              mediocritatem at est. In eum cibo disputando, mundi tempor dolor
              iuvaret vis. Mei ei impetus splendide reformidans, eu mei delicata
              petentium mediocritatem, id enim quaerendum pro. Ex sit eirmod
              consulatu. An mel case qualisque, in dicunt fabulas persequeris
              eos, eu copiosae maluisset vis. Labitur scripserit no mea, ex elit
              fastidii luptatum vix. Fabellas comprehensam mediocritatem at est.
              In eum cibo disputando, mundi tempor
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p>
              {" "}
              facilis, nam et odio suscipit. Ut qui dico tantas imperdiet, no
              veri fastidii scripserit vim. Ei magna clita aliquam qui, ut velit
              dolor iuvaret vis. Mei ei impetus splendide reformidans, eu mei
              delicata petentium mediocritatem, id enim quaerendum pro. Ex sit
              eirmod consulatu. An mel case qualisque, in dicunt fabulas
              persequeris eos, eu copiosae maluisset vis. Labitur scripserit no
              mea, ex elit fastidii luptatum vix. Fabellas comprehensam
              mediocritatem at est. In eum cibo disputando, mundi tempor
              facilis, nam et odio suscipit. Ut qui dico tantas imperdiet, no
              veri fastidii scripserit vim. Ei magna clita aliquam qui, ut velit
              dolor iuvaret vis. Mei ei impetus splendide reformidans, eu mei
              delicata petentium mediocritatem, id enim quaerendum pro. Ex sit
              eirmod consulatu. An mel case qualisque, in dicunt fabulas
              persequeris eos, eu copiosae maluisset vis. Labitur scripserit no
              mea, ex elit fastidii luptatum vix. Fabellas comprehensam
              mediocritatem at est. In eum cibo disputando, mundi tempor dolor
              iuvaret vis. Mei ei impetus splendide reformidans, eu mei delicata
              petentium mediocritatem, id enim quaerendum pro. Ex sit eirmod
              consulatu. An mel case qualisque, in dicunt fabulas persequeris
              eos, eu copiosae maluisset vis. Labitur scripserit no mea, ex elit
              fastidii luptatum vix. Fabellas comprehensam mediocritatem at est.
              In eum cibo disputando, mundi tempor
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CenteredGrid);
