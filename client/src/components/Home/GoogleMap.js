import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYWpkb3JyaW5ndG9uIiwiYSI6ImNrMnZwN2lmYzA2eHEzZG54ZzcyN3Rqb3MifQ.i6b1jeTgD1Gtijm-WJEAMg";

class GoogleMap extends React.Component {
    state = {
        longitude: -1.5039,
        latitude: 23.7371,
    };

    getUserLocation(renderMap) {
        navigator.geolocation.getCurrentPosition((location, error) => {
            if (location) {
                this.setState({
                    longitude: location.coords.longitude,
                    latitude: location.coords.latitude,
                });
            }
            renderMap();
        });
    }

    componentDidMount() {
        this.getUserLocation(() => {
            const map = new mapboxgl.Map({
                container: this.refs.mapContainer,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [this.state.longitude, this.state.latitude],
                zoom: 2.5,
            });
            map.addControl(new mapboxgl.NavigationControl());
            map.on("click", ({ lngLat }) => {
                this.setState({
                    longitude: lngLat.lng.toFixed(4),
                    latitude: lngLat.lat.toFixed(4),
                });
                map.flyTo({
                    center: [this.state.longitude, this.state.latitude],
                    speed: 0.2,
                    curve: 2.0,
                    zoom: 4.0,
                });
                this.props.getCountry(lngLat);
            });
        });
    }

    render() {
        return <div ref="mapContainer" className="map"></div>;
    }
}

export default GoogleMap;
