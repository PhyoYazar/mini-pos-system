import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { apiController, apiRoutes } from '../../../controllers';
import useAxios from '../../../hooks/useAxios';
import { Image, Text, Title } from '../../LV1';
import Button from '../../LV2/Button/Button';
import {
  OrderDetailResInterface,
  OrderUpdatedResInterface,
  PayNowResInterface,
} from '../../../lib';

const refetchOrderDetailsAPI = async (): Promise<
  OrderDetailResInterface | undefined
> => {
  const res: OrderDetailResInterface = await apiController({
    endpoint: apiRoutes.getAllOrdersDetailsByUser,
  });

  if (res?.status === 'success') {
    return res;
  } else {
    return undefined;
  }
};

const OrderBox = () => {
  const [ordersData, setOrdersData] = useState<OrderDetailResInterface>();

  const theme = useTheme();

  const { data } = useAxios<OrderDetailResInterface>({
    endpoint: apiRoutes.getAllOrdersDetailsByUser,
  });

  // if data exist, store in the state
  useEffect(() => {
    if (data?.status === 'success') {
      setOrdersData(data);
    }
  }, [data]);

  // Delete Order by clicking Close icon
  const deleteOrderHandler = async (id: string) => {
    if (id) {
      await apiController({
        endpoint: `${apiRoutes.deleteOrderById}/${id}`,
      });

      setOrdersData(await refetchOrderDetailsAPI());
    }
  };

  // Pay Now
  const payNowHandler = async () => {
    const res: PayNowResInterface = await apiController({
      endpoint: apiRoutes.payNow,
    });

    if (res?.status === 'success') {
      setOrdersData(await refetchOrderDetailsAPI());
    }
  };

  const increaseProductHandler = async (id: string, total_product: number) => {
    const res: OrderUpdatedResInterface = await apiController({
      endpoint: `${apiRoutes.updateOrderById}/${id}`,
      data: { total_products: total_product + 1 },
    });

    if (res?.status === 'success') {
      setOrdersData(await refetchOrderDetailsAPI());
    }
  };

  const decreaseProductHandler = async (id: string, total_product: number) => {
    const res: OrderUpdatedResInterface = await apiController({
      endpoint: `${apiRoutes.updateOrderById}/${id}`,
      data: { total_products: total_product - 1 },
    });

    if (res?.status === 'success') {
      setOrdersData(await refetchOrderDetailsAPI());
    }
  };

  return (
    <div className='w-full h-full flex items-start justify-between flex-col pt-3'>
      <div className='px-5 py-2 overflow-auto '>
        <Title size='xlg'>Order details</Title>

        <div className='space-y-8'>
          {ordersData?.data?.data.map((el, index) => (
            <div key={index} className='flex items-start justify-between gap-3'>
              <div className=''>
                <Image iconType='card' width={85} height={85} />
              </div>

              <div className='w-full h-[85px] flex flex-col justify-between  gap-1 overflow-hidden'>
                <Text
                  size='md'
                  color={theme.colors.neutral900}
                  className='line-clamp-2'
                >
                  {el?.product?.title}
                </Text>

                <div className='flex-between'>
                  <div className='flex items-center border border-neutral300 rounded-md shadow-sm'>
                    <Box
                      as='button'
                      disabled={el?.total_products === 1}
                      className='cursor-pointer border-r border-neutral300'
                      onClick={() =>
                        decreaseProductHandler(el?._id, el?.total_products)
                      }
                    >
                      <Image
                        iconType='minus'
                        width={18}
                        height={18}
                        color={
                          el?.total_products === 1
                            ? theme.colors.neutral300
                            : theme.colors.neutral500
                        }
                      />
                    </Box>

                    <Box className='mx-1'>
                      <Text>{el?.total_products}</Text>
                    </Box>

                    <Box
                      className='cursor-pointer border-l border-neutral300'
                      onClick={() =>
                        increaseProductHandler(el?._id, el?.total_products)
                      }
                    >
                      <Image
                        iconType='plus'
                        width={18}
                        height={18}
                        color={theme.colors.neutral500}
                      />
                    </Box>
                  </div>

                  <div className='flex items-baseline gap-1.5'>
                    <Text color={theme.colors.primaryLight}>Ks</Text>
                    <Text size='xlg' color={theme.colors.primaryLight}>
                      {el?.product_price}
                    </Text>
                  </div>
                </div>
              </div>

              <div
                className='w-12  flex justify-end cursor-pointer'
                onClick={() => deleteOrderHandler(el._id)}
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
              {ordersData?.data?.subTotal}
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
              {ordersData?.data?.tax}
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
              {ordersData?.data?.total}
            </Text>
          </Text>
        </div>

        <Button
          onClick={payNowHandler}
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
