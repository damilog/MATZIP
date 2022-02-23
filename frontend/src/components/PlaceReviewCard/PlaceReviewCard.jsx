import { useState } from 'react';
import styled from 'styles/themedComponents';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    minWidth: 600,
    height: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PlaceReviewCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardLayout className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            루
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="루피팬"
        subheader="조회 3,224  추천 100"
      />
      <CardMedia
        className={classes.media}
        image="https://t1.daumcdn.net/cfile/tistory/99EE674F5C72230A2D"
        title="루피"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          루피가 직접 요리해줘용
        </Typography>
      </CardContent>
    </CardLayout>
  );
};

const CardLayout = styled(Card)`
  margin-top: 20px;
`;
export default PlaceReviewCard;
