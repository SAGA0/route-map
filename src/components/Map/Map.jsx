import React, { useState, useEffect, memo } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import Routing from './Routing'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

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
		<MapContainer
			key={[59.84660399, 30.29496392]}
			center={[59.84660399, 30.29496392]}
			zoom={13}
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
				<Routing from={currentRecord?.from} to={currentRecord?.to} />
			) : null}
		</MapContainer>
	)
})

export default Lmap
