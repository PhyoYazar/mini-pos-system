import styled, { css } from 'styled-components';

import {
  EyeOpenIcon,
  EyeCloseIcon,
  MailIcon,
  LogoIcon,
  StarIcon,
  SearchIcon,
  CardIcon,
  LogoWhiteIcon,
  BuyIcon,
  CartIcon,
  MinusIcon,
  PlusIcon,
  CloseIcon,
  LoadingIcon,
} from './icon';

interface ImageComponentInterface {
  width: number;
  height?: number;

  src?: string;
  alt?: string;

  iconType?: string;
  fullWidth?: boolean;

  fillColor?: string;
  color?: string;
}

const ImageWrap = (props: ImageComponentInterface) => {
  return (
    <Wrap {...props}>
      <div>
        <img
          src={props.src}
          alt={props.alt || props.src}
          width={props.width}
          height={props.height}
        />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div<ImageComponentInterface>`
  width: ${(props) => (props.width ? props.width : '50')}px;
  height: ${(props) => props.height && props.height}px;

  img,
  svg {
    width: ${(props) => (props.width ? props.width : '36')}px;
    height: ${(props) => props.height && props.height}px;
    /* color: ${(props) => (props.color ? props.color : 'black')}; */
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
        height: 100%;
      `}
  }
`;

const IconComponent = (props: ImageComponentInterface) => {
  switch (props.iconType) {
    case 'image':
      return <ImageWrap {...props} />;

    case 'loading':
      return <LoadingIcon {...props} />;

    case 'openEye':
      return <EyeOpenIcon {...props} />;

    case 'closeEye':
      return <EyeCloseIcon {...props} />;

    case 'mail':
      return <MailIcon {...props} />;

    case 'logo':
      return <LogoIcon {...props} />;

    case 'logoWhite':
      return <LogoWhiteIcon {...props} />;

    case 'star':
      return <StarIcon {...props} />;

    case 'search':
      return <SearchIcon {...props} />;

    case 'buy':
      return <BuyIcon {...props} />;

    case 'card':
      return <CardIcon {...props} />;

    case 'cart':
      return <CartIcon {...props} />;

    case 'plus':
      return <PlusIcon {...props} />;

    case 'minus':
      return <MinusIcon {...props} />;

    case 'close':
      return <CloseIcon {...props} />;

    default:
      return null;
  }
};

export default IconComponent;
