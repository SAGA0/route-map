import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const Routing = ({ from, to, markers }) => {
	const map = useMap()

	useEffect(() => {
		if (!map) return

		let routingControl = L.Routing.control({
			waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
			routeWhileDragging: true,
			useZoomParameter: false,
		}).addTo(map)

		if (from && to) {
			map.setView(to, 8)
		}

		return () => map.removeControl(routingControl)
	}, [from, to])

	return null
}

export default Routing
