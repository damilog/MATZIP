import styled from 'styles/themedComponents';

const GradientButton = ({ width, children, onClick, disabled = false }) => {
  return (
    <GradientButtonLayout disabled={disabled} width={width} onClick={onClick}>
      {children}
    </GradientButtonLayout>
  );
};

const GradientButtonLayout = styled.button`
  background: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.gray.light
      : `linear-gradient(45deg, ${theme.colors.red.main} 30%,${theme.colors.red.light}  90%)`};
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  height: 48px;
  width: ${({ width }) => width};
  box-shadow: 0 3px 5px 2px ${({ theme }) => theme.colors.gray.light};
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize; ;
`;

export default GradientButton;
