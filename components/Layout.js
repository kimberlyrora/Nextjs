// components folder shouldn't be inside pages because are not going to need routes
// convention: lowercase for pages and uppercase for components.

import React from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{children}
			</main>
		</div>
	)
}

export default Layout;
