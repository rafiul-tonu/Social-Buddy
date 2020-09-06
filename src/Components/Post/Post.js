import React from 'react';
import './Post.css';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const Post = (props) => {
  const classes = useStyles();

  const { id, title } = props.post;
  const history = useHistory();
  const handleClick = (postId) => {
    const url = `/posts/${postId}`;
    history.push(url);
  }
  // const postStyle = {border:'1px solid red', margin:'10px'}
  return (
    <div className="postStyle">

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <h2> <strong> Id of post: {id} </strong> </h2>
            <h3> Title: {title} </h3>
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="contained" color="secondary" onClick={() => handleClick(id)}> See Post </Button>
        </CardActions>
      </Card>

    </div>
  );
};

export default Post;