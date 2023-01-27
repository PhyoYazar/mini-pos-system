import { useEffect } from 'react';
import { iconsName, Image, Text } from '../components/LV1';
import { apiController, apiRoutes } from '../controllers';

const Example = () => {
  useEffect(() => {
    const controllerH = new AbortController();
    (async () => {
      try {
        const hotelRes = await apiController({
          endpoint: apiRoutes.getAllHotels,
          signal: controllerH.signal,
          params: { name: 'Azu Hotel' },
        });
        console.log(hotelRes);
      } catch (err) {
        console.log('catch =>', err);
      }
    })();

    // (async () => {
    //   const res = await axios.post<APILoginResInterface>("/auth/login", {
    //     email: "pyz@gmail.com",
    //     password: "123456",
    //   });
    //   if (res.data.status === "success") {
    //     setToken({ j_token: res.data.token });
    //   }
    // })();

    return () => {
      // cancel the request
      controllerH.abort();
    };
  });

  return (
    <section className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        {iconsName.map((icon, index) => (
          <div key={index} className='flex-center flex-col'>
            <Image iconType={icon} width={40} height={40} />
            <Text>{icon}</Text>
          </div>
        ))}
      </div>

      <Image
        iconType='image'
        src='https://tinypng.com/images/social/website.jpg'
        alt='Panda is sitting and eatting bamboo'
        width={400}
        // height={300}
      />
    </section>
  );
};

export default Example;
