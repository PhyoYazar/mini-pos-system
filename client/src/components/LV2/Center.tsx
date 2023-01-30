import React from 'react';
import styled from 'styled-components';

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const Center = (props: PropsType) => {
  return <StyleDiv className={props.className}>{props.children}</StyleDiv>;
};

export default Center;

const StyleDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
