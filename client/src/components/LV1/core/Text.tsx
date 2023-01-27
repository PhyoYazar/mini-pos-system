import styled, { css } from 'styled-components';
import { fontSize, fontWeight } from '../style';

interface TextInterface {
  color?: string;
  size?: keyof typeof fontSize;
  weight?: keyof typeof fontWeight;
  mb?: string;
}

/**
 * @param color Font color
 * @param size Font size
 * @param weight Font weight
 *
 */

export const Text = styled.p<TextInterface>`
  font-size: ${fontSize.sm}px;
  font-weight: ${fontWeight.md};

  /* transition: color ${({ theme }) => theme.transition}; */

  color: ${({ theme, color }) => (color ? color : theme.colors.neutral800)};
  ${({ size }) =>
    size &&
    css`
      font-size: ${fontSize[size]}px;
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${fontWeight[weight]};
    `};
`;

/**
 * @param color Font color
 * @param size Font size
 * @param weight Font weight
 * @param mb Margin Bottom
 */

export const Title = styled(Text)<TextInterface>`
  font-size: ${fontSize.md}px;
  font-weight: ${fontWeight.lg};
  text-transform: capitalize;

  margin-bottom: ${(props) => (props.mb ? props.mb : '15')}px;
  ${({ size }) =>
    size &&
    css`
      font-size: ${fontSize[size]}px;
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${fontWeight[`${weight}`]};
    `}
`;
