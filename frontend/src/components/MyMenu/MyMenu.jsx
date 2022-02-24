import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import SelectModal from 'components/common/SelectModal';
import useToggle from 'hooks/useToggle';

const selection = [
  {
    title: '리뷰 작성',
    path: '/editor',
    id: 1,
  },
  {
    title: '로그아웃',
    id: 2,
  },
];

const MyMenu = () => {
  const classes = useStyles();
  const [isToggle, setToggle] = useToggle(false);

  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="menu" onClick={setToggle}>
        <MenuTwoToneIcon />
        {isToggle && <SelectModal selection={selection} width={'150px'} />}
      </Fab>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#f43142',
      color: '#fefefe',
      position: 'absolute',
      top: '4%',
      right: '5%',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default MyMenu;
