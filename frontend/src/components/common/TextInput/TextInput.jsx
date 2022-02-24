import styled from 'styles/themedComponents';
import TextField from '@material-ui/core/TextField';

const TextInput = ({
  value,
  type,
  label,
  name,
  size = 'small',
  variant = 'outlined',
  width = '100px',
  isRequired = true,
  state,
  setState,
  onChange,
}) => {
  const handleEmptyInput = () => {
    return isRequired && value === '';
  };

  return (
    <TextInputLayer
      value={value}
      error={handleEmptyInput()}
      type={type}
      label={label}
      name={name}
      variant={variant}
      size={size}
      onChange={onChange}
      width={width}
    />
  );
};

const TextInputLayer = styled(TextField)`
  width: ${({ width }) => width};
`;

export default TextInput;
