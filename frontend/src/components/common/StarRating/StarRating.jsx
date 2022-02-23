import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const StarRating = ({ rating, controlled }) => {
  const [value, setValue] = useState(rating);

  return (
    <>
      {controlled ? (
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      ) : (
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
        </Box>
      )}
    </>
  );
};

export default StarRating;
