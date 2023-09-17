import { FC } from 'react';
import { Container } from './ui/container.ts';
import { observer } from 'mobx-react-lite';
import FilterByTitle from './filter-by-name/FilterByTitle.tsx';
import styled from 'styled-components';
import MonthSelector from './month-select/MonthSelect.tsx';
import FilterByLabel from './filter-by-lable/FlterByLabel.tsx';
import SaveToJson from './save-to-json/SaveToJson.tsx';

const CalendarHeader: FC = () => {
  return (
    <Header>
      <Container>
        <HeaderContainer>
          <h1>Calendar</h1>
          <MonthSelector />
          <FiltersContainer>
            <FilterByTitle />
            <FilterByLabel />
            <SaveToJson />
          </FiltersContainer>
        </HeaderContainer>
      </Container>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem;
  background-color: green;
  color: white;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  &h1 {
    font-size: 2rem;
  }
`;

export default observer(CalendarHeader);
