import styled from 'styles/themedComponents';

const Filter = () => {
  const categories = [
    {
      title: '#한식',
      id: 1,
    },
    {
      title: '#양식',
      id: 2,
    },
    {
      title: '#중식',
      id: 3,
    },
    {
      title: '#일식',
      id: 4,
    },
    {
      title: '#패스트푸드',
      id: 5,
    },
    {
      title: '#회식장소',
      id: 6,
    },
    {
      title: '#분식',
      id: 7,
    },
  ];

  const Filter = categories.map(({ title, id }) => (
    <FilterBox key={id}>
      <div>{title}</div>
    </FilterBox>
  ));
  return (
    <Layout>
      <FilterLayer>{Filter}</FilterLayer>
    </Layout>
  );
};

const Layout = styled.nav`
  display: flex;
  justify-content: center;
`;

const FilterLayer = styled.ul`
  display: flex;
  justify-content: center;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const FilterBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 0 20px;
  height: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px 1px lightgrey;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  > div {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.red.main};
  }
`;

export default Filter;
