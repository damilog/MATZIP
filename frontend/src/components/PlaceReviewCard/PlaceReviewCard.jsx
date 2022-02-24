import { useRecoilValue } from 'recoil';
import { placeDetailDataAtom } from 'store/placeStore';
import styled from 'styles/themedComponents';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SelectModal from 'components/common/SelectModal';
import useToggle from 'hooks/useToggle';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    minWidth: 600,
    height: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const selection = [
  {
    title: '수정하기',
    path: '/editor',
    id: 1,
  },
  {
    title: '삭제하기',
    id: 2,
  },
];

const PlaceReviewCard = () => {
  const data = useRecoilValue(placeDetailDataAtom);
  const {
    id,
    title,
    content,
    viewCount,
    thumbnail,
    naverUrl,
    naverRating,
    naverComment,
    address,
    price,
    category,
    rating,
    review,
  } = data;
  const classes = useStyles();
  const [isToggle, setToggle] = useToggle(false);

  return (
    data && (
      <>
        <CardLayout className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                닉
              </Avatar>
            }
            action={
              <MoreIconLayer aria-label="settings" onClick={setToggle}>
                <MoreVertIcon />
                {isToggle && <SelectModal selection={selection} width={'100px'} />}
              </MoreIconLayer>
            }
            title="닉네임"
            subheader={`리뷰 ${review?.length} | 조회수 ${viewCount}`}
          />
          <CardMedia className={classes.media} image={`${thumbnail}`} title={title} />
          <CardContent>
            <TypoLayer variant="body1" color="textSecondary" component="p">
              <span>추천 메뉴 </span>
              {content}
            </TypoLayer>
            <TypoLayer variant="body1" color="textSecondary" component="p">
              <span>가격대 </span> {price?.toLocaleString()}원
            </TypoLayer>
            <TypoLayer variant="body1" color="textSecondary" component="p">
              <span>네이버 평점 </span> {naverRating}
            </TypoLayer>
            <TypoLayer variant="body1" color="textSecondary" component="p">
              <span>MATZIP 평점 </span> {rating}
            </TypoLayer>
            <CardActions>
              <a href={naverUrl}>
                <Button size="large" color="primary">
                  지도보기
                </Button>
              </a>
            </CardActions>
          </CardContent>
        </CardLayout>
      </>
    )
  );
};

const CardLayout = styled(Card)`
  margin-top: 20px;
`;

const MoreIconLayer = styled(IconButton)`
  position: relative;
`;

const TypoLayer = styled(Typography)`
  display: flex;

  > span {
    width: 130px;
    margin: 0 20px;
    font-weight: bold;
  }
`;
export default PlaceReviewCard;
