// import './Map.css';
// import { React, useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// function RecenterMap({ position }) {
//   const map = useMap();

//   useEffect(() => {
//     if (position) {
//       map.setView(position, 13);
//     }
//   }, [position, map]);

//   return null;
// }

// const Map = () => {
//   const [position, setPosition] = useState([5.6037, -0.1870]); // Accra
//   const [input, setInput] = useState("");

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`,
//         {
//           headers: {
//             "User-Agent": "delivery-app (fosterkelvin108@gmail.com)",
//             "Accept-Language": "en",
//           },
//         }
//       );
//       const data = await response.json();
//       console.log("Search results:", data);
//       if (data.length > 0) {
//         const { lat, lon } = data[0];
//         setPosition([parseFloat(lat), parseFloat(lon)]);
//       } else {
//         alert("Location not found");
//       }
//     } catch (error) {
//       console.error("Error fetching location:", error);
//     }
//   };

//   return (
//     <div className="map-container">
//       <div className="map-search">
//         <input
//           type="text"
//           placeholder="Enter location..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleSearch} style={{ padding: "8px 12px" }}>
//           Search
//         </button>
//       </div>

//       <MapContainer center={position} zoom={13} className="leaflet-map">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         />
//         <Marker position={position}>
//           <Popup>📍 {input || "You are here: Accra"}</Popup>
//         </Marker>

//         <RecenterMap position={position} />
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
