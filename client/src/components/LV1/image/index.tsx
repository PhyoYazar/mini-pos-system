import styled, { css } from 'styled-components';

import {
  DarkModeIcon,
  LightModeIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  SwapIcon,
  EyeOpenIcon,
  EyeCloseIcon,
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

    case 'mail':
      return <MailIcon {...props} />;

    case 'openEye':
      return <EyeOpenIcon {...props} />;

    case 'closeEye':
      return <EyeCloseIcon {...props} />;

    case 'map':
      return <MapIcon {...props} />;

    case 'phone':
      return <PhoneIcon {...props} />;

    case 'swap':
      return <SwapIcon {...props} />;

    case 'moon':
      return <DarkModeIcon {...props} />;

    case 'sun':
      return <LightModeIcon {...props} />;

    default:
      return null;
  }
};

export default IconComponent;
