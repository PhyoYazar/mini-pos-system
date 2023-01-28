import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { logout } from '../../../services/auth';
import { Image, Text } from '../../LV1';
import { InputStyled } from '../../LV2/Form/InputStyled';
import OrderBox from './OrderBox';

const Header = () => {
  const [showOrderBox, setShowOrderBox] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <header>
      <div className='flex-between'>
        <Image
          iconType='logoWhite'
          width={142}
          height={25}
          color={theme.colors.primary}
          fillColor={theme.colors.primary}
        />

        <div className='relative'>
          <Input type='text' placeholder='Search' />
          <SearchButton>
            <Image
              iconType='search'
              width={18}
              height={18}
              color={theme.colors.light}
            />
          </SearchButton>
        </div>

        <div className='w-1/6 flex-between'>
          <div className='relative'>
            <div
              className='cursor-pointer'
              onClick={() => setShowOrderBox((prev) => !prev)}
            >
              <Image
                iconType='cart'
                width={26}
                height={26}
                color={theme.colors.primaryLight}
                fillColor={theme.colors.primaryLight}
              />
            </div>

            {showOrderBox && (
              <>
                <div
                  className='w-full h-screen fixed top-0 left-0 z-[9999]'
                  onClick={() => setShowOrderBox(false)}
                />
                <OrdersBoxStyled>
                  <OrderBox />
                </OrdersBoxStyled>
              </>
            )}
          </div>

          <div className='cursor-pointer'>
            <Image
              iconType='buy'
              width={26}
              height={26}
              color={theme.colors.primaryLight}
              fillColor={theme.colors.primaryLight}
            />
          </div>

          <div className='cursor-pointer' onClick={() => logout()}>
            <Text size='md' weight='semilg'>
              Logout
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Input = styled(InputStyled)`
  width: 400px;
`;

const SearchButton = styled.button`
  padding: 6px 20px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

const OrdersBoxStyled = styled.div`
  width: 400px;
  height: 570px;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  overflow: hidden;

  position: absolute;
  top: 30px;
  right: -80px;
`;
