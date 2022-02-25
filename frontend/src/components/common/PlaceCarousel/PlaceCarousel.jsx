import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { recommendDataAtom } from 'store/placeStore';
import styled from 'styles/themedComponents';
import Carousel from 'react-material-ui-carousel';
import PlaceCard from 'components/PlaceCard';

const PlaceCarousel = () => {
  const [index, setIndex] = useState(0);
  const recommendData = useRecoilValue(recommendDataAtom);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  return (
    <>
      <CarouselLayer>
        <CarouselBox
          index={index}
          onChange={handleChange}
          interval={4000}
          animation="slide"
          indicators={false}
          stopAutoPlayOnHover
          swipe
        >
          {recommendData.map((data, id) => (
            <PlaceCard data={data} key={id} />
          ))}
        </CarouselBox>
      </CarouselLayer>
      <CarouselLayer>
        {recommendData.map((_, i) => (
          <Button
            key={i}
            onClick={() => setIndex(i)}
            style={{ background: i === index ? '#ccc' : '#fff' }}
          ></Button>
        ))}
      </CarouselLayer>
    </>
  );
};

const CarouselLayer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
  margin: 5px;
  border-radius: 30px;
  border: 1px solid #ccc;
`;

const CarouselBox = styled(Carousel)`
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
`;

export default PlaceCarousel;
