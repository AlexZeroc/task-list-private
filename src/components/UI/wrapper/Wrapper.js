import styles from "./Wrapper.module.css";

const Wrapper = ( { children } ) => {
	return (
		<div className={styles.container}>
			<div className={styles.pageWrapper}>{children}</div>
		</div>
	);
};

export default Wrapper;
