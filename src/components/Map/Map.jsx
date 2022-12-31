import React, { useState, useEffect, useMemo } from 'react'
import { Typography, Divider } from 'antd'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux'
import Routing from './Routing'

import styles from './index.module.scss'

const Lmap = () => {
	const { fromLat, fromLng, toLat, toLng } = useSelector(
		(state) => state?.activeRow?.activeRoute,
	)
	const options = useMemo(
		() => ({
			margin: [50, 50, 50, 50],
			center: [59.9342, 30.335],
			zoom: 8,
			maxZoom: 18,
		}),
		[],
	)

	return (
		<div className={styles.container}>
			<MapContainer {...options} className={styles.map}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{fromLat && fromLng ? (
					<Marker
						interactive={false}
						draggable={false}
						position={[fromLat, fromLng]}
					>
						<Popup>From this position</Popup>
					</Marker>
				) : null}
				{toLat && toLng ? (
					<Marker
						interactive={false}
						draggable={false}
						position={[toLat, toLng]}
					>
						<Popup>To this position</Popup>
					</Marker>
				) : null}
				{fromLat && toLng ? (
					<Routing from={[fromLat, fromLng]} to={[toLat, toLng]} />
				) : null}
			</MapContainer>
		</div>
	)
}

export default Lmap
