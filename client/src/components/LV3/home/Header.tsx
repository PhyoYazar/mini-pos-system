import styled, { useTheme } from 'styled-components';
import { Image } from '../../LV1';
import Button from '../../LV2/Button/Button';
import { InputStyled } from '../../LV2/Form/InputStyled';

const Header = () => {
  const theme = useTheme();

  return (
    <header>
      <div className='flex-between'>
        <div>Logo</div>
        {/* <Image
          iconType='logo'
          width={142}
          height={25}
          color={theme.colors.primary}
          fillColor={theme.colors.primary}
        /> */}

        <div className='relative'>
          <Input type='text' placeholder='Search' />
          <SearchButton>
            <Image iconType='search' width={18} height={18} color={theme.colors.light} />
          </SearchButton>
        </div>

        <div className=''>Di</div>
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
