import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../LV2/Button/Button';
import Header from './Header';

type StyledType = {
  isActive?: boolean;
};

const Home = () => {
  const [activeElement, setActiveElement] = useState<string>('');

  return (
    <div className='w-full h-screen container py-6 space-y-6'>
      <Header />

      <main>
        <section className='space-x-2'>
          <StyledButton isActive={activeElement === ''} onClick={() => setActiveElement('')}>
            All
          </StyledButton>

          {[1, 2, 3, 4].map((el, index) => (
            <StyledButton
              key={index}
              isActive={activeElement === `Category ${el}`}
              onClick={() => setActiveElement(`Category ${el}`)}
            >
              Category {el}
            </StyledButton>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

const StyledButton = styled(Button)<StyledType>`
  padding: 4px 12px;
  border-radius: 30px;
  border: none;
  color: ${({ theme }) => theme.colors.neutral800};
  background-color: ${({ theme }) => theme.colors.neutral200};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.primaryLight};
    `}

  &:hover,
  &:active {
    border: none;
    transform: none;
  }
`;
