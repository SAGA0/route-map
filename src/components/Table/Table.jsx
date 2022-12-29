import React, { useState } from 'react'
import { Table as ATable } from 'antd'
import styles from './index.module.scss'
import { columns, data } from './config'

const Table = () => {
	const [activeRow, setActiveRow] = useState(null)

	const handleRowClick = (record, index) => {
		setActiveRow(index)
	}

	const handleRow = (record, index) => {
		return { onClick: () => handleRowClick(record, index) }
	}

	return (
		<>
			<ATable
				className={styles.table}
				rowClassName={(_, index) => (index === activeRow ? styles.active : '')}
				onRow={handleRow}
				columns={columns}
				dataSource={data}
				pagination={data.length > 10 ? true : false}
			/>
		</>
	)
}

export default Table
