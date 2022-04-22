import { useState } from 'react';
import styled from 'styled-components';
import { Color, Layout } from 'styles';

const ListFilterArea = styled.div`
  ${Layout.flexRowBetween}
  width: 100%;
`;

const ListFilterButtonWrapper = styled.div`
  ${Layout.flexRowBetween}
`;

const ListFilterButton = styled.button<{ selected: boolean }>`
  flex: 1;
  width: 48px;
  height: 24px;
  font-size: 12px;
  background-color: ${({ selected }) => (selected ? Color.GRAY01 : 'transparent')};
  border-radius: 4px;
`;

const ListSortSelect = styled.select`
  width: 112px;
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 4px;
`;

interface ListFilterBarProps {}

const ListFilterBar: (props: ListFilterBarProps) => JSX.Element = ({}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'today' | 'urgent'>('all');

  const onAllClick = () => {
    if (selectedFilter !== 'all') {
      setSelectedFilter('all');
    }
  };
  const onTodayClick = () => {
    if (selectedFilter !== 'today') {
      setSelectedFilter('today');
    }
  };
  const onUrgentClick = () => {
    if (selectedFilter !== 'urgent') {
      setSelectedFilter('urgent');
    }
  };

  return (
    <ListFilterArea>
      <ListFilterButtonWrapper>
        <ListFilterButton onClick={onAllClick} selected={selectedFilter === 'all'}>
          All
        </ListFilterButton>
        <ListFilterButton onClick={onTodayClick} selected={selectedFilter === 'today'}>
          Today
        </ListFilterButton>
        <ListFilterButton onClick={onUrgentClick} selected={selectedFilter === 'urgent'}>
          Urgent
        </ListFilterButton>
      </ListFilterButtonWrapper>
      <ListSortSelect defaultValue="salery">
        <option value="salery">Salery</option>
        <option value="register date">Register Date</option>
      </ListSortSelect>
    </ListFilterArea>
  );
};

export default ListFilterBar;
