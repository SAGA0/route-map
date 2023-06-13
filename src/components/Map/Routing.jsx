// @ts-nocheck
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'

const Routing = ({ from, to }) => {
    const map = useMap()

    useEffect(() => {
        if (!map) return

        let routingControl = L.Routing.control({
            waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
            lineOptions: {
                styles: [
                    {
                        color: 'blue',
                        opacity: 0.6,
                        weight: 4,
                    },
                ],
            },
            addWaypoints: false,
            draggableWaypoints: false,
            routeWhileDragging: true,
            useZoomParameter: false,
        }).addTo(map)

        if (from && to) {
            map.setView(to, 8)
        }

        return () => map.removeControl(routingControl)
    }, [map, from, to])

    return null
}

export default Routing
