var React = require('react');
var ReactDOM = require('react-dom');
import { render } from 'react-dom';
import DivIcon from 'react-leaflet-div-icon';
import { Map, TileLayer, Marker, Popup, Circle, LayerGroup} from 'react-leaflet';









           // composant affichage avec push quand distance
class CelebtripLeaflet extends React.Component {
    constructor() {
    super();
      this.state = {
       lat: '',
       lng: '',
       zoom: 13,
        // place of interests
       marker:[],
       loading: true,

        // valeur par defaut pour exploitation des pushs et notifications
       notification: ''
          }

            // distance de detection et d'interaction
    this.detect = 200;
      // coordonnées de paris
      this.paris = [48.866667, 2.333333];
            }


        // calcul des distances par lat et lng
  parseMarker() {
    for (var j = 0; j< this.state.marker.length; j++){
      var lat1 = this.state.lat;
       var lon1 = this.state.lng;
        var lat2 = this.state.marker[j].lat;
         var lon2 = this.state.marker[j].lng;

      // distance entre ma position actuelle et les markers
      this.state.marker[j].distance = this.distance(lat1, lon1, lat2, lon2, "K")*1000;
      //console.log(Math.round(this.marker[j].distance));
      if(this.state.marker[j].distance <= this.detect) {
        this.state.marker[j].close = true;

        // ajout des data a exploiter selon la methode choisie
        this.setState({notification: this.state.marker[j].description});
        console.log(this.state.notification);
      } else {
          this.state.marker[j].close = false;
      }
    }
  }

  // function de calcul des distances
  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
      var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
      var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
      dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
      if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
       return dist

      }


                // monitoring de la position
   componentDidMount() {
      var appObj = this;
        var options = {enableHighAccuracy: true,timeout: 3000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };
     //console.log("call componentDidMount");
   fetch('https://mighty-brushlands-14103.herokuapp.com/getAllData', {
    method: 'post'
      }).then(function(response) {
    // return response.text();
     return response.json();

    }).then(function(obj) {
  //console.log('obj'+obj);


    navigator.geolocation.watchPosition(function(Position) {

      let lat = Position.coords.latitude;
        let lng = Position.coords.longitude;
      // console.log('lat: '+lat+'lon: '+lng);
     //console.log(appObj);
      appObj.setState({lat: lat, lng: lng, zoom: 13,  marker: obj, loading: false});
      appObj.parseMarker();

    }, appObj.options
      );
       });

        }
        renderLoading() {
             var loadingIcon = L.icon({
        iconUrl: '../image/89.gif',
        iconSize: [100, 100]
      });
    return <div>
     <h1>Loading</h1>
      <Map center = {this.paris}  zoom = {this.state.zoom}>
     <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
         <Marker position={this.paris}  icon={loadingIcon} >
          <Popup>
            <span></span>
          </Popup>
        </Marker>
  </Map>
   </div>

  }


        renderMarker() {


       var coffreIcon = L.icon({
        iconUrl: '../images/etoile-icone-5157-128.png',
        iconSize: [20, 20]
        });
        var userIcon = L.icon({
        iconUrl: '../images/806 (4).gif',
        iconSize: [20, 20]
      });


          // ma position actuelle et rendu
  var myPosition = [this.state.lat, this.state.lng];
    var markerDisplay = [];
       var markerHidden = [];
        if(this.state.marker != undefined) {

    for (var i = 0; i<this.state.marker.length; i++){

  if (this.state.marker[i].hidden == false) {

      markerDisplay.push(

          <Marker position={[this.state.marker[i].lat, this.state.marker[i].lng]} key={i}  >
          <Popup>
            <span>{this.state.marker[i].name}.<br/>
            {this.state.marker[i].overview}</span>
          </Popup>
        </Marker>

       )
     } else {

      markerHidden.push(

          <Marker position={[this.state.marker[i].lat, this.state.marker[i].lng]} key={i} icon={coffreIcon}>
          <Popup>
            <span><br/>{this.state.marker[i].name}. A {Math.round(this.state.marker[i].distance) > 1000 ? Math.round(this.state.marker[i].distance)/1000+'km' : Math.round(this.state.marker[i].distance)+'m' } de ce point</span>
          </Popup>
        </Marker>
         )
          }
           }
             }


    return (
      <div>
      <h1>CelebTrip</h1>

   <Map center = {this.paris}  zoom = {this.state.zoom}>
     <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
         <Marker position={myPosition} icon={userIcon} className="user-icon" zIndexOffset={1000}>
          <Popup>
            <span></span>
          </Popup>
         </Marker>

        {markerDisplay}
        {markerHidden}


   </Map>
  <div>
   <p>{this.state.notification}</p>
  </div>
  </div>
    )
  }


    render() {

    const { loading } = this.state;

    return (
      <div>

        {loading ? this.renderLoading() : this.renderMarker()}
      </div>
    );
  }
}




module.exports = CelebtripLeaflet;
