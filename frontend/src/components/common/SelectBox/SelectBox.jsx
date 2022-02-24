import styled from 'styles/themedComponents';
import NativeSelect from '@material-ui/core/NativeSelect';

const SelectBox = ({ selectArray, state, setState, width }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const options = selectArray.map(({ id, name }) => (
    <option key={id} value={name}>
      {name}
    </option>
  ));

  return (
    <SelectBoxLayer onChange={handleChange} width={width}>
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
