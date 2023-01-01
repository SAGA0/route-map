import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table as ATable } from 'antd'
import styles from './index.module.scss'
import { columns, data } from './config'

const Table = ({ activeRowID, handleActiveRow }) => {
	const handleRowClick = (record, index) => {
		handleActiveRow(record, index)
	}

	const handleRow = (record, index) => {
		return { onClick: () => handleRowClick(record, index) }
	}

	return (
		<>
			<ATable
				className={styles.table}
				rowClassName={(record) =>
					record.key === activeRowID ? styles.active : ''
				}
				onRow={handleRow}
				columns={columns}
				dataSource={data}
				pagination={data.length > 10 ? true : false}
			/>
		</>
	)
}

export default Table
