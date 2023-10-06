import styles from "./ModalWrapper.module.css";

const ModalWrapper = ( { children } ) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>{children}</div>
		</div>
	);
};

export default ModalWrapper;
