var React = require('react');
var ReactDOM = require('react-dom');
import { render } from 'react-dom';
import DivIcon from 'react-leaflet-div-icon';
import { Map, TileLayer, Marker, Popup, Circle, LayerGroup} from 'react-leaflet';
var Link = require('react-router-dom').Link;
var connect = require('react-redux').connect;



           // COMPOSANT LEAFLET CELEBETRIP
class CelebtripLeaflet extends React.Component {
    constructor() {
    super();
      this.state = {
       lat: '',
       lng: '',
       zoom: 13,
        // place of interests
       marker: [],
       loading: true,

        //  exploitation des pushs et notifications
       notification: '',
       desc: [],
       watchId: null,
       timeOutId: null
          }

            // distance de detection et d'interaction

    this.detect = 200;
      this.paris = [48.866667, 2.333333];
       this.data = [];

            }

       // MODUL DE CALCUL DES DISTANCES 2
  parseMarker() {
    for (var j = 0; j< this.state.marker.length; j++){
      var lat1 = this.state.lat;
       var lon1 = this.state.lng;
        var lat2 = this.state.marker[j].lat;
         var lon2 = this.state.marker[j].lng;

      // CALCUL DES DISTANCES ENTRE L UTILISATEUR ET LES POINTS D'INTERETS
      this.state.marker[j].distance = this.distance(lat1, lon1, lat2, lon2, "K")*1000;
      //console.log(Math.round(this.marker[j].distance));
        if (this.state.marker[j].distance <= this.detect ) {
      //  this.state.marker[j].close = true;
        // AJOUT DES DATA A PUSH
          if(this.data.indexOf(this.state.marker[j].description) === -1){
            this.data.push(this.state.marker[j].description);
               this.setState({desc: this.data});
                navigator.notification.vibrate(1000);
            console.log(this.state.desc);
           var timeOutId = setTimeout(function(){this.setState({desc: ''}); }.bind(this), 90000);
            this.setState({timeOutId: timeOutId });
     //console.log(this.state.desc+'after timeout');
        }

      //setTimeout(function(){this.setState({notification: this.state.marker[j].description}) }.bind(this), 5000);


      } else {
       //   this.state.marker[j].close = false;
        //this.setState({notification: null});
           //console.log(this.state.notification+'after');
      }
    }
  }

  // MODULE DE CALCUL DES DISTANCES 1
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


                // MONITORING DE NOTRE POSITION ET APPEL DES DATA DANS LA DB
   componentDidMount() {
      var appObj = this;
        var options = {enableHighAccuracy: false,timeout: 50000,maximumAge: 0, desiredAccuracy: 0, distanceFilter: 1 };

     // APPEL A LA DB
   fetch('https://celebetrip.herokuapp.com/getAllData', {
    method: 'post'
      }).then(function(response) {
    // return response.text();
     return response.json();

    }).then(function(obj) {
  //console.log('obj'+obj);
 //setInterval(function(){}.bind(this), 3000)

                //    GPS
   var watchID = navigator.geolocation.watchPosition(function(Position) {

      var lat = Position.coords.latitude;
        var lng = Position.coords.longitude;
      // console.log('lat: '+lat+'lon: '+lng);
      console.log('watch ID : '+watchID);
      appObj.setState({lat: lat, lng: lng, zoom: 13,  marker: obj, loading: false, watchId: watchID});
      appObj.parseMarker()

    }, appObj.options
      )
       });
        }

     componentWillUnmount() {
           navigator.geolocation.clearWatch(this.state.watchId);
                clearTimeout(this.state.timeOutId);

           console.log('toto'+this.state.watchId);
     }


 //   RENDER PENDANT LE DOWNLOAD DES DATA AVANT INITIALISATION
        renderLoading() {
             var loadingIcon = L.icon({
        iconUrl: "images/89.gif",
        iconSize: [100, 100]

      });

    return (
      <div className="background-color">
      <div className="background-logo">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-xs-12">
                      <div className="homelogo">
                      <center> <Link to="/app3"><img src="images/logo.png" className="img-responsive"/></Link></center>
                      </div>
                  </div>
              </div>
          </div>
      </div>
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
    )
  }

// RENDER REAL VIEW
        renderMarker() {


       var coffreIcon = L.icon({
        iconUrl: "images/etoile-gestion-sports.png",
        iconSize: [30, 30]
        });
        var userIcon = L.icon({
        iconUrl: "images/806 (4).gif",
        iconSize: [20, 20]
      });


          // MA POSITION ACTUELLE
  var myPosition = [this.state.lat, this.state.lng];
    var markerDisplay = [];
       var markerHidden = [];
         var descDisplay = [];

        if(this.state.marker != undefined || this.state.desc != undefined) {
            for (var i = 0; i < this.state.desc.length; i++) {
         descDisplay.push(<p key={i}>{this.state.desc[i]}</p>)
    }

    for (var i = 0; i<this.state.marker.length; i++){

  if (this.state.marker[i].hidden == false) {
    // MARKERS
      markerDisplay.push(

          <Marker position={[this.state.marker[i].lat, this.state.marker[i].lng]} >
          <Popup>
            <span>{this.state.marker[i].name}.<br/>
            {this.state.marker[i].overview}</span>
          </Popup>
        </Marker>

       )
     } else {
   // MARKERS CACHÉS
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
      <div className="background-color">
      <div className="background-logo">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-xs-12">
                      <div className="homelogo">
                      <center> <Link to="/app3"><img src="images/logo.png" className="img-responsive"/></Link></center>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div>
            <p className="jaune1">{descDisplay}</p>
      </div>
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

  </div>
    )
  }


    render() {

    const { loading } = this.state;

    return (

      <div className="leaflet-comp">

        {loading ? this.renderLoading() : this.renderMarker()}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { circuit: state.circuit }
}

var CelebtripLeafletRedux = connect(
  mapStateToProps,
  null
)(CelebtripLeaflet);

module.exports = CelebtripLeafletRedux;
