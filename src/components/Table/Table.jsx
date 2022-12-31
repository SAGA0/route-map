import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table as ATable } from 'antd'
import styles from './index.module.scss'
import { columns, data } from './config'
import { setActiveRow } from '../../redux/actions'

const Table = () => {
	const { activeR } = useSelector((state) => state?.activeRow)
	const dispatch = useDispatch()

	const handleRowClick = (record, index) => {
		dispatch(setActiveRow(index))
	}

	const handleRow = (record, index) => {
		return { onClick: () => handleRowClick(record, index) }
	}

	return (
		<>
			<ATable
				className={styles.table}
				rowClassName={(_, index) => (index === activeR ? styles.active : '')}
				onRow={handleRow}
				columns={columns}
				dataSource={data}
				pagination={data.length > 10 ? true : false}
			/>
		</>
	)
}

export default Table
