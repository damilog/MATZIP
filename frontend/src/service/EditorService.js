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

    if ((name === 'naverComment') | (name === 'naverRating') | (name === 'price')) {
      const newPlace = {
        ...placeData,
        [name]: Number(value),
      };
      setPlaceData(newPlace);
    } else {
      const newPlace = {
        ...placeData,
        [name]: value,
      };
      setPlaceData(newPlace);
    }
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
