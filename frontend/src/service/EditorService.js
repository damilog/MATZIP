import API from 'util/API';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { newPlaceData, isEmptyInput } from 'store/editorStore';

const EditorService = () => {
  const [placeData, setPlaceData] = useRecoilState(newPlaceData);
  const [isEmpty, setIsEmpty] = useRecoilState(isEmptyInput);
  const navigate = useNavigate();

  const handlePlaceInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const newPlace = {
      ...placeData,
      [name]: value,
    };
    setPlaceData(newPlace);
  };

  const checkEmptyInput = () => {
    const emptyInputs = Object.values(placeData).filter((input) => (input === '') | (input === 0));
    emptyInputs.length ? setIsEmpty(true) : setIsEmpty(false);
  };

  const handleSubmitNewPlace = () => {
    checkEmptyInput();

    if (isEmpty) return;
    console.log(placeData);
    console.log('?');
    //API.postPlace(placeData);
    navigate('/');
  };

  return { handlePlaceInputChange, handleSubmitNewPlace };
};

export default EditorService;
