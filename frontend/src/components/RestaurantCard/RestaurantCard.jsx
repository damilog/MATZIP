import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

const RestaurantCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
            어쩌고 저쩌고 맥날 베토디 상하이 냠냠
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          지도보기
        </Button>
        <Button size="small" color="primary">
          리뷰쓰기
        </Button>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
