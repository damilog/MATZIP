import { useSetRecoilState } from 'recoil';
import styled from 'styles/themedComponents';
import API from 'util/API';
import { placeDataAtom } from 'store/homeStore';

const Filter = ({ data }) => {
  const setData = useSetRecoilState(placeDataAtom);

  const fetchData = async (name) => {
    const { content } = await API.getPlaceByCategory(name, 0);
    setData(content);
  };

  const Filter = data.map((name, i) => {
    const handleFilterClick = () => {
      fetchData(name);
    };

    return (
      <FilterBox key={i} name={name} onClick={handleFilterClick}>
        <div>{name}</div>
      </FilterBox>
    );
  });

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
