import { useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { apiController, apiRoutes } from '../../../controllers';
import useAxios from '../../../hooks/useAxios';
import {
  ProductsResInterface,
  CategoriesResInterface,
  ProductInterface,
} from '../../../lib';
import { getUserInfo } from '../../../services/auth';
import { Image, Text, Title } from '../../LV1';
import Button from '../../LV2/Button/Button';
import Card from '../../LV2/Card/Card';
import Header from './Header';

interface StyledInterface {
  isActive?: boolean;
}

interface FilterInterface {
  category?: string;
  search?: string;
}

const Home = () => {
  const [activeElement, setActiveElement] = useState<string>('');
  const [searchKeywords, setSearchKeywords] = useState<string>('');
  const [productData, setProductData] = useState<ProductInterface[]>([]);

  const theme = useTheme();

  // fetching All Category API
  const { data: category_data } = useAxios<CategoriesResInterface>({
    endpoint: apiRoutes.getAllCategory,
  });

  // fetching All Products API
  useEffect(() => {
    let time: NodeJS.Timeout;
    const controller = new AbortController();
    const filter: FilterInterface = {};

    if (activeElement) filter.category = activeElement;

    // FETCHING PRODUCT API FUNCTION
    const fetchProducts = async (
      paramsData: FilterInterface,
    ): Promise<void> => {
      const res: ProductsResInterface = await apiController({
        endpoint: apiRoutes.getAllProducts,
        params: paramsData,
        signal: controller.signal,
      });

      if (res?.status === 'success') {
        setProductData(res.data);
      }
    };

    if (activeElement && !searchKeywords) {
      fetchProducts(filter);
      //
      //
    } else if (
      (!activeElement && searchKeywords) ||
      (activeElement && searchKeywords)
    ) {
      filter.search = searchKeywords;

      time = setTimeout(() => {
        fetchProducts(filter);
      }, 200);
      //
      //
    } else {
      fetchProducts(filter);
    }

    return () => {
      controller.abort();
      clearTimeout(time);
    };
  }, [activeElement, searchKeywords]);

  // Creating Order API
  const createOrderHandler = async (id: string, product_price: number) => {
    await apiController({
      endpoint: apiRoutes.createOrder,
      data: {
        user: getUserInfo()?._id,
        product: id,
        product_price,
      },
    });
  };

  return (
    <div className='w-full h-screen container py-6 space-y-6'>
      <Header
        searchKeywords={searchKeywords}
        setSearchKeywords={setSearchKeywords}
      />

      <main className='space-y-6'>
        <section className='space-x-2'>
          <StyledButton
            isActive={activeElement === ''}
            onClick={() => setActiveElement('')}
          >
            All
          </StyledButton>

          {category_data?.data?.map((el, index) => (
            <StyledButton
              key={index}
              isActive={activeElement === el._id}
              onClick={() => setActiveElement(el._id)}
            >
              {el.name}
            </StyledButton>
          ))}
        </section>

        <section className='flex items-start flex-wrap gap-4 pb-6'>
          {productData?.map((el, index) => (
            <Card key={index} className='w-[190px] space-y-2'>
              <Image iconType='card' width={170} height={170} />

              <Title as='h3' weight='md'>
                {el?.title}
              </Title>

              <div className='flex items-baseline gap-1'>
                <Text weight='semilg' color={theme.colors.primaryLight}>
                  Ks
                </Text>

                <Text
                  size='lg'
                  weight='semilg'
                  color={theme.colors.primaryLight}
                >
                  {el?.price}
                </Text>
              </div>

              <Button
                onClick={() => createOrderHandler(el?._id, el?.price)}
                type='submit'
                textcolor={theme.colors.white}
                bordercolor={theme.colors.primaryLight}
                bgcolor={theme.colors.primaryLight}
                bghovercolor={theme.colors.primary}
                borderhovercolor={theme.colors.primary}
                fullWidth
              >
                Add to Cart
              </Button>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

const StyledButton = styled(Button)<StyledInterface>`
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
