import styled from 'styled-components';

/**
 *@param position moveleft/right/up/down
 *@param animateTime number 0.4
 *@param startTime number 0.4

 */

interface AnimationInterface {
  position: string;
  animateTime?: number;
  startTime?: number;
}

export const AnimationContainer = styled.div<AnimationInterface>`
  animation: ${({ position }) => position}
    ${({ animateTime }) => (animateTime ? animateTime : 0.5)}s ease-out
    ${({ startTime }) => (startTime ? startTime : 0.1)}s;

  animation-fill-mode: backwards;
  backface-visibility: hidden;
`;
