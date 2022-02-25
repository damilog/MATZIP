import styled from 'styles/themedComponents';
import TextInput from 'components/common/TextInput';
import SelectBox from 'components/common/SelectBox';
import GradientButton from 'components/common/GradientButton';
import EditorService from 'service/EditorService';

const Input = ({ title, width, name, onChange }) => {
  return (
    <TextInputLayer>
      <TextInput width={width} label={title} name={name} variant={'standard'} onChange={onChange} />
    </TextInputLayer>
  );
};

const EditorForm = () => {
  const { handlePlaceInputChange, handleSubmitNewPlace, filter } = EditorService();
  return (
    <ul>
      <TextInputLayer>
        <SelectBox
          selectArray={filter}
          width={'200px'}
          name={'category'}
          onChange={handlePlaceInputChange}
        />
      </TextInputLayer>
      <Input title={'작성자'} name={'username'} width={'300px'} onChange={handlePlaceInputChange} />
      <Input title={'상호명'} name={'title'} width={'300px'} onChange={handlePlaceInputChange} />
      <Input title={'주소'} name={'address'} width={'300px'} onChange={handlePlaceInputChange} />
      <Input
        title={'추천 메뉴'}
        name={'content'}
        width={'300px'}
        onChange={handlePlaceInputChange}
      />
      <Input
        title={'가격대'}
        name={'price'}
        type={'number'}
        width={'300px'}
        onChange={handlePlaceInputChange}
      />
      <Input
        title={'이미지 URL'}
        name={'thumbnail'}
        width={'300px'}
        onChange={handlePlaceInputChange}
      />
      <HelpComment>식당 추천을 위해 필요해요! 😋</HelpComment>
      <Input
        title={'네이버 지도 URL'}
        name={'naverUrl'}
        type={'text'}
        width={'300px'}
        onChange={handlePlaceInputChange}
      />
      <Input
        title={'네이버 리뷰수'}
        name={'naverComment'}
        type={'number'}
        width={'300px'}
        onChange={handlePlaceInputChange}
      />
      <Input
        title={'네이버 평점'}
        name={'naverRating'}
        type={'number'}
        width={'300px'}
        onChange={handlePlaceInputChange}
      />
      <TextInputLayer>
        <GradientButton width={'300px'} onClick={handleSubmitNewPlace}>
          등록하기
        </GradientButton>
      </TextInputLayer>
    </ul>
  );
};

const TextInputLayer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100p;
  padding: 10px;
  > span {
    font-weight: bold;
    width: 50px;
    padding-bottom: 25px;
  }
`;

const HelpComment = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.red.main};
`;
export default EditorForm;
