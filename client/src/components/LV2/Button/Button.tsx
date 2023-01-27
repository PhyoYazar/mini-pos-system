import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonInterface {
  children?: React.ReactNode;

  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;

  disabled?: boolean;
  fullWidth?: boolean;
  textsize?: string;
  bordercolor?: string;
  textcolor?: string;
  bgcolor?: string;
  bghovercolor?: string;
  texthovercolor?: string;
  borderhovercolor?: string;
}

const getButton = (props: ButtonInterface) => {
  return (
    <ButtonStyled type={props.type ? props.type : 'button'} {...props}>
      {props.children}
    </ButtonStyled>
  );
};

const Button = (props: ButtonInterface) => {
  return <>{props.href ? <Link to={props.href}>{getButton(props)}</Link> : getButton(props)}</>;
};

export default Button;

const ButtonStyled = styled.button<ButtonInterface>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  padding: 6px 20px;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.semilg};

  font-size: ${({ theme, textsize }) => (textsize ? textsize : theme.fontSize.sm)}px;

  border: 1.5px solid
    ${({ theme, bordercolor }) => (bordercolor ? bordercolor : theme.colors.neutral500)};

  color: ${({ theme, textcolor }) => (textcolor ? textcolor : theme.colors.neutral600)};

  background-color: ${({ bgcolor }) => bgcolor && bgcolor};

  &:hover {
    /* transform: translateY(-0.3px); */

    border: 1.5px solid ${({ borderhovercolor }) => borderhovercolor && borderhovercolor};
    color: ${({ texthovercolor }) => texthovercolor && texthovercolor};
    background-color: ${({ bghovercolor }) => bghovercolor && bghovercolor};
  }

  &:active {
    transform: scale(1.05);
  }

  transition: all ${({ theme }) => theme.transition};
`;

// const MyButton = React.forwardRef(({ onClick, href }, ref) => {
//     return (
//       <a href={href} onClick={onClick} ref={ref}>
//         Click Me
//       </a>
//     )
//   })
