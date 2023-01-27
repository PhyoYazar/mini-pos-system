type ChildrenType = {
  children: React.ReactNode;
};

const Wrap = ({ children }: ChildrenType) => {
  return <div className='shadow-md rounded-md overflow-hidden'>{children}</div>;
};

export default Wrap;
