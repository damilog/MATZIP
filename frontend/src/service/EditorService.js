import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { newPlaceData, isEmptyInput } from 'store/editorStore';
import { filterAtom } from 'store/homeStore';
import API from 'util/API';

const EditorService = () => {
  const [placeData, setPlaceData] = useRecoilState(newPlaceData);
  const [isEmpty, setIsEmpty] = useRecoilState(isEmptyInput);
  const [filter, setFilter] = useRecoilState(filterAtom);
  const navigate = useNavigate();

  const fetchData = async () => {
    const filters = await API.getCategory();

    setFilter(filters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePlaceInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    let newPlace = {};

    if ((name === 'naverComment') | (name === 'naverRating') | (name === 'price')) {
      newPlace = {
        ...placeData,
        [name]: Number(value),
      };
    } else {
      newPlace = {
        ...placeData,
        [name]: value,
      };
    }

    setPlaceData(newPlace);
    console.log(placeData);
  };

  const checkEmptyInput = () => {
    const emptyInputs = Object.values(placeData).filter((input) => (input === '') | (input === 0));
    emptyInputs.length ? setIsEmpty(true) : setIsEmpty(false);
  };

  const handleSubmitNewPlace = () => {
    checkEmptyInput();

    if (isEmpty) return;
    console.log('ㄷ', placeData);
    const test = {
      title: '맥도날드 서울역점',
      content: '빅맥',
      thumbnail: 'https://live.staticflickr.com/7829/45936066114_b6eb7812a6_b.jpg',
      naverRating: 4.39,
      naverComment: 9433,
      naverUrl: 'http://naver.me/5OnfFQMB',
      address: '서울 용산구 한강대로 405 서울역(철도역)',
      price: 6000,
      category: '양식',
      username: '다미',
    };

    API.postPlace(placeData);
    navigate('/');
  };

  return { handlePlaceInputChange, handleSubmitNewPlace, filter };
};

export default EditorService;
