import styled from 'styles/themedComponents';
import TextField from '@material-ui/core/TextField';

const TextInput = ({
  value,
  type,
  label,
  size = 'small',
  variant = 'outlined',
  width = '100px',
  isRequired = false,
  state,
  setState,
}) => {
  const handleEmptyInput = () => {
    return isRequired && state === '';
  };

  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  return (
    <TextInputLayer
      value={value}
      error={handleEmptyInput()}
      type={type}
      label={label}
      variant={variant}
      size={size}
      onChange={handleInputChange}
      width={width}
    />
  );
};

const TextInputLayer = styled(TextField)`
  width: ${({ width }) => width};
`;

export default TextInput;
