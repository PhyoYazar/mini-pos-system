import { Image } from '../components/LV1';
import Button from '../components/LV2/Button/Button';

const ErrorPage = () => {
  return (
    <section className='w-full h-screen flex-center flex-col'>
      <Image iconType='image' src='/img/404.jpg' alt='404 error page' width={500} height={480} />

      <Button href='/'>Go to Login</Button>
    </section>
  );
};

export default ErrorPage;
