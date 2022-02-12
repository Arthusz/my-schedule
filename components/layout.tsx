import React from "react";
import { useAppSelector } from "../store/app/hooks";

import styles from "../styles/components/layout.module.scss";

const Layout: React.FC = (props) => {
	const { children } = props;
	const { isLoading } = useAppSelector((state) => state.loading);

	return (
		<div className={styles.container}>
			{isLoading && <div className={styles.loading} />}
			{children}
		</div>
	);
};

export default Layout;
