import { useTheme } from 'styled-components';
import { Image, Text, Title } from '../../LV1';
import LoginForm from './LoginForm';

const Login = () => {
  const theme = useTheme();

  return (
    <section className='grid grid-cols-2'>
      <div className='w-full h-screen flex justify-between flex-col p-8 bg-primary'>
        <Image iconType='logo' width={142} height={25} />

        <div className='flex-center flex-col space-y-3'>
          <div className='flex items-center gap-1'>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Image key={index} iconType='star' width={20} height={20} />
            ))}
          </div>

          <div className='text-center px-8'>
            <Text size='bxl' color={theme.colors.light}>
              KLink has saved us thousands of hours of work. We are able to spin up projects and
              features much faster
            </Text>
          </div>

          <div className='text-center space-y-2'>
            <div className='flex-center'>
              <Image
                iconType='image'
                src='img/Avatar.png'
                alt='Avatar girl'
                width={50}
                height={50}
              />
            </div>
            <div>
              <Text color={theme.colors.light}>Lori Bryson</Text>
              <Text size='xs' color={theme.colors.neutral500}>
                Product Designer, Sisyphus
              </Text>
            </div>
          </div>
        </div>

        <div className='w-full flex-between'>
          <Text color={theme.colors.neutral500}>
            <Text as='span' size='md' color={theme.colors.neutral500}>
              &copy;
            </Text>{' '}
            klinkenterprise.com
          </Text>

          <div className='flex items-center gap-2'>
            <Image iconType='mail' width={18} height={18} color={theme.colors.neutral500} />
            <Text color={theme.colors.neutral500}>help@klinkenterprise.com</Text>
          </div>
        </div>
      </div>

      <div className='flex-center'>
        <div>
          <Title size='xl' weight='semilg' as='h1' mb='5'>
            Login
          </Title>
          <Text color={theme.colors.neutral500}>Welcome back! Please enter your details.</Text>
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
