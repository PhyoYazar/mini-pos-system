import styled, { useTheme } from 'styled-components';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  // FieldError,
  //   UseControllerProps,
} from 'react-hook-form';

import { Image, Text } from '../../LV1';
import { InputStyled } from './InputStyled';

interface Props<T extends FieldValues> {
  // errors: FieldError | undefined;
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, Path<T>> | undefined;

  errors: string | undefined;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;

  password?: boolean;
  showPass?: boolean;
  onClick?: () => void;
}

const InputText = <T extends FieldValues>(props: Props<T>) => {
  const theme = useTheme();

  return (
    <div className='flex flex-col gap-1'>
      <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <>
            <div className='relative'>
              <Input
                as='input'
                {...field}
                type={props.type ? props.type : 'text'}
                id={props.name}
                placeholder={props.placeholder}
                disabled={props.disabled}
              />

              {props.password && (
                <EyeIconStyled onClick={props.onClick}>
                  <Image
                    iconType={props.showPass ? 'openEye' : 'closeEye'}
                    width={23}
                    height={23}
                    color={theme.colors.neutral400}
                    // fillColor={theme.colors.neutral400}
                  />
                </EyeIconStyled>
              )}
            </div>
            {props.errors && <ErrorTextStyled>{props.errors}</ErrorTextStyled>}
          </>
        )}
        defaultValue={props.defaultValue}
        rules={{ required: true }}
      />
    </div>
  );
};

export default InputText;

const EyeIconStyled = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
`;

const ErrorTextStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.rose400};
`;

const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.semilg};
  color: ${({ theme }) => theme.colors.neutral700};
`;

const Input = styled(InputStyled)`
  &:active,
  &:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;
