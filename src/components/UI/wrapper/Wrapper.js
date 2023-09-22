import styleContainer from "./stylesWrypperStore/Wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <div className={styleContainer.container}>
      <div className={styleContainer.pageWrapper}>{children}</div>
    </div>
  );
};

export default Wrapper;
