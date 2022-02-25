import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const StarRating = ({ rating, controlled = false, state = 0, setState }) => {
  return (
    <>
      {controlled ? (
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={state}
            onChange={(event, newValue) => {
              setState(newValue);
            }}
          />
        </Box>
      ) : (
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      )}
    </>
  );
};

export default StarRating;
