import React, { useState } from 'react'
import { Table, Map } from '../'
import SplitPane, { Pane } from 'split-pane-react'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentRecord } from '../../redux/actions'

const Main = () => {
	const [sizes, setSizes] = useState(['40%', '60%'])
	const currentRecord = useSelector(
		(state) => state?.activeRecord.currentRecord,
	)

	const dispatch = useDispatch()

	const handleActiveRow = (record) => {
		dispatch(setCurrentRecord(record))
	}

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
						<Table
							handleActiveRow={handleActiveRow}
							activeRowID={currentRecord?.key}
						/>
					</div>
				</Pane>
				<Pane className={styles.pane}>
					<Map currentRecord={currentRecord} />
				</Pane>
			</SplitPane>
		</div>
	)
}

export default Main
