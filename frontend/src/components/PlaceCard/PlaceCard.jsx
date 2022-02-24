import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarRating from 'components/common/StarRating';
import styled from 'styles/themedComponents';

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

const PlaceCard = ({ data }) => {
  const { id, title, content, price, thumbnail, rating } = data;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/place/${id}`}>
        <CardActionArea>
          <CardMedia className={classes.media} image={thumbnail} title={title} />
          <CardContent>
            <TypographyLayer gutterBottom variant="h6" component="h2">
              {title}
            </TypographyLayer>
            <Typography variant="body1" color="textSecondary" component="p">
              {content} | {price.toLocaleString()}원대
            </Typography>
            <StarRating rating={rating} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

const TypographyLayer = styled(Typography)`
  margin: 0;
`;

export default PlaceCard;
