import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import InputText from '../../LV2/Form/InputText';
import Button from '../../LV2/Button/Button';
import { useTheme } from 'styled-components';
import { APILoginResInterface } from '../../../lib';
import { apiController, apiRoutes } from '../../../controllers';
import { setToken, setUserInfo } from '../../../services/auth';
import { Image, Text } from '../../LV1';

const validation = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(40).required(),
  })
  .required();

export type AuthFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const theme = useTheme();

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
  } = useForm<AuthFormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validation),
  });

  const onSubmit = async (data: AuthFormValues) => {
    const res: APILoginResInterface = await apiController({
      endpoint: apiRoutes.login,
      data: { email: data.email, password: data.password },
    });

    if (res?.status === 'success') {
      setToken({ jwt_token: res.token });
      setUserInfo({ user_data: res.data });
      navigate('/', { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-3'>
        <InputText
          type='email'
          control={control}
          name='email'
          errors={errors.email?.message}
          label='Email'
          placeholder='Enter your email'
        />

        <InputText
          password={true}
          type={showPassword ? 'text' : 'password'}
          control={control}
          name='password'
          errors={errors.password?.message}
          label='Password'
          placeholder='Enter password'
          showPass={showPassword}
          onClick={() => setShowPassword((prev) => !prev)}
        />

        <div className='pt-3'>
          <Button
            className='relative'
            disabled={isSubmitting}
            type='submit'
            textcolor={theme.colors.white}
            bordercolor={
              isSubmitting ? theme.colors.neutral300 : theme.colors.primaryLight
            }
            bgcolor={
              isSubmitting ? theme.colors.neutral300 : theme.colors.primaryLight
            }
            bghovercolor={
              isSubmitting ? theme.colors.neutral300 : theme.colors.primary
            }
            borderhovercolor={
              isSubmitting ? theme.colors.neutral300 : theme.colors.primary
            }
            fullWidth
          >
            {isSubmitting ? (
              <>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
                  <Image iconType='loading' width={60} height={40} />
                </div>
                <Text size='md' color={theme.colors.neutral300}>
                  .
                </Text>
              </>
            ) : (
              <Text size='md' color={theme.colors.white}>
                Sign in
              </Text>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
