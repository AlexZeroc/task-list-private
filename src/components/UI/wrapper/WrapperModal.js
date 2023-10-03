import containerStyle from "./WrapperModal.module.css";

const WrapperModal = ({ children }) => {
	return (
		<div className={containerStyle.modal}>
			<div className={containerStyle.modalContent}>{children}</div>
		</div>
	);
};

export default WrapperModal;
