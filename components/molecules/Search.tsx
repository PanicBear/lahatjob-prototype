import { Button, Icon } from '@components/atoms';
import styled from 'styled-components';
import { Layout } from 'styles';

const FormWithStyle = styled.form`
  ${Layout.flexRowBetween}
  width: 100%;
  height: 48px;
  padding: 8px 16px;
`;

const SearchWithStyle = styled.input`
  flex: 1;
  height: 28px;
  padding: 4px 8px;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.GRAY01};
  border: none;
  border-radius: 4px;
`;

interface SearchProps {}

const Search: (props: SearchProps) => JSX.Element = ({}) => {
  const onSearchClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    console.log('search');
  };

  return (
    <FormWithStyle>
      <SearchWithStyle type="search" placeholder="Enter keyword to search" />
      <Button onClick={onSearchClick}>
        <Icon.SearchIcon height={24} />
      </Button>
    </FormWithStyle>
  );
};

export default Search;
