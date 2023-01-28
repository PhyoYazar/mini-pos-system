import styled from 'styled-components';

type ChildrenType = {
  className: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: ChildrenType) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;

const StyledCard = styled.div`
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
