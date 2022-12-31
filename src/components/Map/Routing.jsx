import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'

const Routing = ({ from, to }) => {
	const map = useMap()

	useEffect(() => {
		if (!map) return

		let routingControl = L.Routing.control({
			waypoints: [L.latLng(from), L.latLng(to)],
			routeWhileDragging: false,
			showAlternatives: false,
		}).addTo(map)

		if (from && to) {
			map.setView(to, 8)
		}

		return () => map.removeControl(routingControl)
	}, [map, from, to])

	return null
}

export default Routing
