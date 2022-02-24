import styled from 'styles/themedComponents';
import TextInput from 'components/common/TextInput';
import SelectBox from 'components/common/SelectBox';
import GradientButton from 'components/common/GradientButton';

const categories = [
  { id: 1, name: '한식' },
  { id: 2, name: '양식' },
  { id: 3, name: '중식' },
  { id: 4, name: '일식' },
];

const Input = ({ title, width }) => {
  return (
    <TextInputLayer>
      <TextInput width={width} label={title} variant={'standard'} />
    </TextInputLayer>
  );
};

const EditorForm = () => {
  return (
    <ul>
      <TextInputLayer>
        <SelectBox selectArray={categories} width={'200px'} />
      </TextInputLayer>
      <Input title={'작성자'} width={'300px'} />
      <Input title={'상호명'} width={'300px'} />
      <Input title={'주소'} width={'300px'} />
      <Input title={'추천 메뉴'} width={'300px'} />
      <Input title={'가격대'} type={'number'} width={'300px'} />
      <HelpComment>식당 추천을 위해 필요해요! 😋</HelpComment>
      <Input title={'네이버 지도 URL'} type={'text'} width={'300px'} />
      <Input title={'네이버 리뷰수'} type={'number'} width={'300px'} />
      <Input title={'네이버 평점'} type={'number'} width={'300px'} />
      <TextInputLayer>
        <GradientButton width={'300px'}>등록하기</GradientButton>
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
