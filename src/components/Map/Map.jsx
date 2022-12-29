import React, { useState, useEffect, useMemo } from 'react'
import { Typography, Divider } from 'antd'
import { MapContainer, TileLayer } from 'react-leaflet'

import styles from './index.module.scss'

const Lmap = () => {
    const options = useMemo(() => ({
        margin: [50, 50, 50, 50],
        center: [38.9072, -77.0369],
        zoom: 8,
        maxZoom: 18
    }), [])

    return (
        <div className={styles.container}>
            <MapContainer {...options} className={styles.map}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )

}


export default Lmap