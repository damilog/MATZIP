import styled from 'styles/themedComponents';
import NativeSelect from '@material-ui/core/NativeSelect';

const SelectBox = ({ selectArray, width, name, onChange }) => {
  const options = selectArray.map((option, id) => (
    <option key={id} value={option}>
      {option}
    </option>
  ));

  return (
    <SelectBoxLayer onChange={onChange} width={width} name={name}>
      {options}
    </SelectBoxLayer>
  );
};

const SelectBoxLayer = styled(NativeSelect)`
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.colors.gray.x_light};
  padding: 3px 10px;
  border-radius: 4px;
  background-color: none;
`;

export default SelectBox;
