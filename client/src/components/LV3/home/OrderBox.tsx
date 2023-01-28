import styled, { useTheme } from 'styled-components';

import { Image, Text, Title } from '../../LV1';
import Button from '../../LV2/Button/Button';

const OrderBox = () => {
  const theme = useTheme();

  return (
    <div className='w-full h-full flex items-start justify-between flex-col pt-3'>
      <div className='px-5 py-2 overflow-auto '>
        <Title size='xlg'>Order details</Title>

        <div className='space-y-4'>
          {[1, 2, 3, 4].map((el, index) => (
            <div key={index} className='flex items-start justify-between gap-3'>
              <div className=''>
                <Image iconType='card' width={85} height={85} />
              </div>

              <div className='flex flex-col gap-1'>
                <Text
                  size='md'
                  color={theme.colors.neutral900}
                  className='line-clamp-2'
                >
                  Lorem, ipsum dolor sit amet adfas af seadipisicing elit.
                </Text>

                <div className='flex-between'>
                  <div className='flex items-center border border-neutral300 rounded-md shadow-sm'>
                    <Box className='cursor-pointer'>
                      <Image iconType='minus' width={18} height={18} />
                    </Box>

                    <Box className='border-x border-neutral300'>
                      <Text>23</Text>
                    </Box>

                    <Box className='cursor-pointer'>
                      <Image iconType='plus' width={18} height={18} />
                    </Box>
                  </div>

                  <div className='flex items-baseline gap-1.5'>
                    <Text color={theme.colors.primaryLight}>Ks</Text>
                    <Text size='xlg' color={theme.colors.primaryLight}>
                      2000
                    </Text>
                  </div>
                </div>
              </div>

              <div
                className='w-16 flex justify-end cursor-pointer'
                onClick={() => console.log()}
              >
                <Image iconType='close' width={16} height={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------  amounts   ----------------- */}
      <div className='w-full space-y-3 bg-neutral200 px-5 py-3'>
        <div className='flex-between'>
          <Text size='md' color={theme.colors.neutral600}>
            Subtotal
          </Text>
          <Text size='sm' color={theme.colors.primaryLight}>
            Ks{' '}
            <Text as='span' size='md' color='inherit'>
              9000
            </Text>
          </Text>
        </div>

        <div className='flex-between'>
          <Text size='md' color={theme.colors.neutral600}>
            Tax (5%)
          </Text>
          <Text size='sm' color={theme.colors.primaryLight}>
            Ks{' '}
            <Text as='span' size='md' color='inherit'>
              450
            </Text>
          </Text>
        </div>

        <Divider />

        <div className='flex-between'>
          <Text size='md' color={theme.colors.neutral600}>
            Total
          </Text>
          <Text size='sm' color={theme.colors.primaryLight}>
            Ks{' '}
            <Text as='span' size='md' weight='lg' color='inherit'>
              9450
            </Text>
          </Text>
        </div>

        <Button
          textsize='md'
          textcolor={theme.colors.white}
          bordercolor={theme.colors.primaryLight}
          bgcolor={theme.colors.primaryLight}
          bghovercolor={theme.colors.primary}
          borderhovercolor={theme.colors.primary}
          fullWidth
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default OrderBox;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px dashed ${({ theme }) => theme.colors.neutral300};
`;

const Box = styled.div`
  padding: 5px 9px;
`;
