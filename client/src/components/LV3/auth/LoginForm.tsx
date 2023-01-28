import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import InputText from '../../LV2/Form/InputText';
import Button from '../../LV2/Button/Button';
import { useTheme } from 'styled-components';
import { APILoginResInterface } from '../../../lib/interface/auth';
import { apiController, apiRoutes } from '../../../controllers';
import { setToken } from '../../../services/auth';

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
            disabled={isSubmitting}
            type='submit'
            textsize='md'
            textcolor={theme.colors.white}
            bordercolor={theme.colors.primaryLight}
            bgcolor={theme.colors.primaryLight}
            bghovercolor={theme.colors.primary}
            borderhovercolor={theme.colors.primary}
            fullWidth
          >
            Sign in
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
