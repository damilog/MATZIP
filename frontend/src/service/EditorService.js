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

    API.postPlace(placeData);
    navigate('/');
  };

  return { handlePlaceInputChange, handleSubmitNewPlace, filter };
};

export default EditorService;
