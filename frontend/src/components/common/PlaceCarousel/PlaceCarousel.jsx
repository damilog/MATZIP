import { useState } from 'react';
import styled from 'styles/themedComponents';
import Carousel from 'react-material-ui-carousel';

const items = [
  {
    id: 0,
    name: '서울역 한식 맛집1',
    description: '밑반찬이 정말 맛있음',
    address: '서울 용산구 한강대로 405 서울역(철도역)',
  },
  {
    id: 1,
    name: '서울역 한식 맛집2',
    description: '밑반찬이 정말 맛있음2',
    address: '서울 용산구 한강대로 405 서울역(철도역)',
  },
  {
    id: 2,
    name: '서울역 한식 맛집3',
    description: '별로임',
    address: '서울 용산구 한강대로 405 서울역(철도역)',
  },
];
const Place = ({ name, description }) => {
  return (
    <>
      <ImageLayer />
      <PlaceLayer>{name}</PlaceLayer>
      <PlaceLayer>{description}</PlaceLayer>
    </>
  );
};
const PlaceCarousel = () => {
  const [index, setIndex] = useState(0);

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
          {items.map(({ name, description }, i) => (
            <Place key={i} {...{ name, description }} />
          ))}
        </CarouselBox>
      </CarouselLayer>
      <CarouselLayer>
        {items.map((_, i) => (
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

const PlaceLayer = styled.div`
  width: '100%';
  height: '100%';
`;

const ImageLayer = styled.img`
  src: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg';
`;
export default PlaceCarousel;
