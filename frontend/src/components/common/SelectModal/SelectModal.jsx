import styled from 'styles/themedComponents';
import { Link } from 'react-router-dom';

const SelectModal = ({ width, selection }) => {
  const Select = selection.map(({ title, id, path = null, handler = null }) => {
    return path ? (
      <Link to={path} key={id}>
        <ListLayer key={`select-${id}`}>{title}</ListLayer>
      </Link>
    ) : handler ? (
      <ListLayer key={`select-${id}`} onClick={handler}>
        {title}
      </ListLayer>
    ) : (
      <ListLayer key={`select-${id}`}>{title}</ListLayer>
    );
  });

  return <ModalLayout width={width}>{Select}</ModalLayout>;
};

const ModalLayout = styled.ul`
  position: absolute;
  top: 55px;
  right: 10px;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 1px 1px lightgrey;
  border-radius: 10px;
  font-size: 17px;
  > :nth-child(1) {
    border-bottom: 1px ${({ theme }) => theme.colors.gray} solid;
  }
`;

const ListLayer = styled.li`
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default SelectModal;
