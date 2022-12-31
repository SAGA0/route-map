import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table as ATable } from 'antd'
import styles from './index.module.scss'
import { columns, data } from './config'
import { setActiveRow, getActiveRoute } from '../../redux/actions'

const Table = () => {
	const { activeID } = useSelector((state) => state?.activeRow)
	const dispatch = useDispatch()

	const handleRowClick = (record, index) => {
		dispatch(getActiveRoute(record))
		dispatch(setActiveRow(index))
	}

	const handleRow = (record, index) => {
		return { onClick: () => handleRowClick(record, index) }
	}

	return (
		<>
			<ATable
				className={styles.table}
				rowClassName={(_, index) => (index === activeID ? styles.active : '')}
				onRow={handleRow}
				columns={columns}
				dataSource={data}
				pagination={data.length > 10 ? true : false}
			/>
		</>
	)
}

export default Table
