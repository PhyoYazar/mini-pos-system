import styled from 'styled-components';

interface StyledRotateInterface {
  width?: number;
  height?: number;
  frontBgColor?: string;
  backBgColor?: string;
  isRotateX?: boolean;
}

interface Props extends StyledRotateInterface {
  frontData: Function;
  backData: Function;
  // frontData: JSX.Element;
  // backData: JSX.Element;
}

const RotateCard = ({ isRotateX, frontData, backData, ...styleData }: Props) => {
  return (
    <StyledRotateCard isRotateX={isRotateX} {...styleData}>
      <div className='card front'>{frontData()}</div>

      <div className='card back'>{backData()}</div>
    </StyledRotateCard>
  );
};

export default RotateCard;

const StyledRotateCard = styled.div<StyledRotateInterface>`
  width: ${({ width }) => (width ? width : '250')}px;
  height: ${({ height }) => (height ? height : '400')}px;
  cursor: pointer;

  position: relative;
  perspective: 1500px;
  -moz-perspective: 1500px;

  & .card {
    width: 100%;
    height: ${({ height }) => (height ? height : '400')}px;
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 3px;
    overflow: hidden;
    backface-visibility: hidden; /* to hide the back side of card */
    transition: all 0.6s ease;
  }

  & .back {
    background-color: ${({ backBgColor }) => backBgColor && backBgColor};
    transform: ${({ isRotateX }) => (isRotateX ? 'rotateX(180deg)' : 'rotateY(180deg)')};
  }

  & .front {
    background-color: ${({ frontBgColor }) => frontBgColor && frontBgColor};
  }

  &:hover .front {
    transform: ${({ isRotateX }) => (isRotateX ? 'rotateX(-180deg)' : 'rotateY(-180deg)')};
  }

  &:hover .back {
    transform: ${({ isRotateX }) => (isRotateX ? 'rotateX(0)' : 'rotateY(0)')};
  }
`;
