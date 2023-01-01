import React, { useState, useEffect, useMemo, memo } from 'react'
import { Typography, Divider } from 'antd'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux'
import Routing from './Routing'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

import Img1 from 'leaflet/dist/images/marker-icon-2x.png'
import Img2 from 'leaflet/dist/images/marker-icon.png'
import Img3 from 'leaflet/dist/images/marker-shadow.png'

import styles from './index.module.scss'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
	iconRetinaUrl: Img1,
	iconUrl: Img2,
	shadowUrl: Img3,
})

const Lmap = memo(({ currentRecord }) => {
	const [markers, setMarkers] = useState([])

	useEffect(() => {
		if (currentRecord && Object.values(currentRecord)?.length !== 0) {
			setMarkers([
				{ id: 1, position: currentRecord?.from },
				{ id: 2, position: currentRecord?.to },
			])
		}
	}, [currentRecord])

	return (
		<div className={styles.container}>
			<MapContainer
				key={[51.505, -0.09]}
				center={[51.505, -0.09]}
				zoom={8}
				// style={{ height: '100%' }}
				className={styles.map}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{markers?.map((m) => (
					<React.Fragment key={m?.id}>
						<Marker position={m?.position} />
					</React.Fragment>
				))}

				{currentRecord && Object.keys(currentRecord)?.length ? (
					<Routing
						markers={markers}
						from={currentRecord?.from}
						to={currentRecord?.to}
					/>
				) : null}
			</MapContainer>
		</div>
	)
})

export default Lmap
