import React, { useState } from 'react'
import { Table, Map } from '../'
import SplitPane, { Pane } from 'split-pane-react'
import styles from './index.module.scss'

const Main = () => {
	const [sizes, setSizes] = useState(['50%', '50%'])

	return (
		<div className={styles.main}>
			<SplitPane
				split="vertical"
				sizes={sizes}
				onChange={setSizes}
				className={styles.splitter}
			>
				<Pane className={styles.pane}>
					<div className={styles['table-container']}>
						<Table />
					</div>
				</Pane>
				<Pane className={styles.pane}>
					<Map />
				</Pane>
			</SplitPane>
		</div>
	)
}

export default Main
