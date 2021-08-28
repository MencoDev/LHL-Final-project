import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 470,
    height: 470,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function SpotListItem(props) {
  const classes = useStyles();
  const { title, description, location, url, image_url } = props.location.spot;
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={title} src={image_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </Grid>
              <Grid item>
                <Link href={url} variant="body2">
                  {url}
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="textSecondary">
                {location}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <IconButton>
          <CancelIcon color="error" fontSize='large'/>
        </IconButton>
        <IconButton>
          <CheckCircleIcon style={{ color: 'green' }} fontSize='large'/>
        </IconButton>
      </Paper>
    </div>
  );
}
