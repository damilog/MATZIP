import { Link } from 'react-router-dom';
import { makeStyles, styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRating from 'components/common/StarRating';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 250,
    margin: 10,
    height: 280,
  },
  media: {
    height: 150,
  },
});

const PlaceCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to="/place">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              맥도날드
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              햄버거 | 0.8만원대
            </Typography>
            <StarRating rating={3} />
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <a href="http://naver.me/GTgSdco0">
          <Button size="small" color="primary">
            지도보기
          </Button>
        </a>
        <Button size="small" color="primary">
          리뷰쓰기
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceCard;
