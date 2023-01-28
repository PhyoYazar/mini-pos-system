import { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { Image, Text, Title } from '../../LV1';
import Button from '../../LV2/Button/Button';
import Card from '../../LV2/Card/Card';
import Header from './Header';

type StyledType = {
  isActive?: boolean;
};

const Home = () => {
  const [activeElement, setActiveElement] = useState<string>('');

  const theme = useTheme();

  return (
    <div className='w-full h-screen container py-6 space-y-6'>
      <Header />

      <main className='space-y-6'>
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

        <section className='flex items-start flex-wrap gap-4'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => (
            <Card key={index} className='w-[190px] space-y-2'>
              <Image iconType='card' width={170} height={170} />

              <Title as='h3' weight='md'>
                Lorem ipsum dolor sit elit. Mollitia, dolore!
              </Title>

              <div className='flex items-baseline gap-1'>
                <Text weight='semilg' color={theme.colors.primaryLight}>
                  Ks
                </Text>
                <Text size='lg' weight='semilg' color={theme.colors.primaryLight}>
                  3,000
                </Text>
              </div>
            </Card>
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
