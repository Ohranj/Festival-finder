import React from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYWpkb3JyaW5ndG9uIiwiYSI6ImNrMnZwN2lmYzA2eHEzZG54ZzcyN3Rqb3MifQ.i6b1jeTgD1Gtijm-WJEAMg";

class GoogleMap extends React.Component {
    state = {
        longitude: -1.5039,
        latitude: 53.7371,
    };

    componentDidMount() {
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
            this.getCountry();
        });
    }

    getCountry() {
        axios({
            method: "get",
            url: "/geo",
        }).then((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        display: "inline-block",
                        position: "absolute",
                        top: "18.5vh",
                        left: "2.5vw",
                        margin: "12px",
                        backgroundColor: "#404040",
                        color: "#ffffff",
                        zIndex: "1",
                        padding: "6px",
                        fontWeight: "bold",
                    }}
                >
                    <div>
                        Longitude: {this.state.longitude} | Latitude:
                        {this.state.latitude}
                    </div>
                </div>
                <div
                    ref="mapContainer"
                    style={{
                        position: "absolute",
                        top: "20vh",
                        right: "45vw",
                        left: "2.5vw",
                        bottom: "2.5vh",
                        border: "2px solid black",
                    }}
                />
            </div>
        );
    }
}

export default GoogleMap;
