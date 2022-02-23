import styled from 'styles/themedComponents';
const selection = [
  {
    title: '수정하기',
    path: '/edit',
    id: 1,
  },
  {
    title: '삭제하기',
    id: 2,
  },
];

const SelectModal = () => {
  const Select = selection.map(({ title, path, id }) => <li key={id}>{title}</li>);
  return <ModalLayout>{Select}</ModalLayout>;
};

export default SelectModal;

const ModalLayout = styled.ul`
  position: absolute;
  top: 40px;
  right: 10px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 1px 1px lightgrey;
  border-radius: 10px;
  font-size: 17px;
  > li {
    border-radius: 10px;
    padding: 10px;
    &:hover {
      background-color: #f5f5f5;
    }
  }

  > :nth-child(1) {
    border-bottom: 1px ${({ theme }) => theme.colors.gray} solid;
  }
`;
