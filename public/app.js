var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var Switch = require('react-router-dom').Switch;
var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;

import DivIcon from 'react-leaflet-div-icon';
import { Map, TileLayer, Marker, Popup, Circle, LayerGroup} from 'react-leaflet';
import { render } from 'react-dom';

var App2 = require('./app2.js');/*-page Choix artiste-*/
var App3 = require('./app3.js');/*-page HUGO-*/
var App32 = require('./app32.js');/*-page PIAF-*/
var App33 = require('./app33.js');/*-page Rodin-*/
var App34 = require('./app34.js');/*-page YSL-*/
var CelebtripLeafletRedux = require('./celebtripLeaflet.js');

/*-----------------------------------------sous composants-----------------------------------*/
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <Logo />
        <Intro />
        <Chatbot />
        <Stars />
        <Textstars />
    </div>
    );
  }
}/*FIN*/

/*---------------------------detail sous composants LIGNE 25 à 245----------------------------*/

class Logo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div className="background-logo">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <div className="homelogo">
                    <center> <img src="images/logo.png" className="img-responsive"/></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}/*FIN*/

/*------------------------------------Phrase Intro---------------------------*/
class Intro extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="background-color">
         <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <div className="homeentete">
                       <strong><p>Découvrez Paris</p></strong>
                        <p>avec pour compagnon de voyage </p>
                       <strong><p>une célébrité d’hier ou d’aujourd’hui</p></strong>
        </div></div></div></div></div>
    );
  }
}/*FIN*/

/*------------------------------------CHATBOT---------------------------*/

class Chatbot extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
    <div className="background-color">
        <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <div className="jaune">
                        <br/>
                        <center><Link to="/app3" ><img src="images/operateur2.png" className="img-responsive"/></Link></center><br/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
  }
}/*FIN*/

class Stars extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
    <div className="background-color">
         <div className="container">
            <div className="row">

                <div className="col-sm-offset-2 col-sm-4 col-xs-4 col-xs-offset-2 ">
                      <div className="phototaille">
                         <img src="images/hugotrans.png" className="img-responsive" height="100px" width="100px"/>
                      </div>
                </div>

                <div className="col-sm-5 col-xs-5 offset-2">
                      <div className="phototaille">
                         <img src="images/piaftrans.png" className="img-responsive" height="100px" width="100px"/>
                      </div>
                </div>
    </div></div></div>
    )
  }
}/*FIN*/

class Textstars extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (

<div className="background-color">
    <div className="container">
        <div className="row">
            <div className="col-sm-offset-2 col-sm-4 col-xs-4 col-xs-offset-2">

                    <h3 className="homeentete"> Victor Hugo </h3>

            </div>

            <div className="col-sm-offset-0 col-sm-5 col-xs-offset-0 col-xs-5  ">

                    <h3 className="homeentete"> Edith Piaf </h3>

            </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </div></div></div>

    )
  }
}/*FIN*/



                   /*    <Link to="/app2" className="btn btn-default homebutton">
                       <span>Go ! <br /> Découvrez-les <span className="glyphicon glyphicon-chevron-right"></span></span>
                       </Link>

                </div>
            </div>
         </div>
    </div>
    </div>
    );
  }
}

---------------------------------------------------------------------------------------------
class Gargouille1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (

        <div className="background-image1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <div className="gartexte">
                            <h3>.</h3>
                            <h4>.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}


class Gargouille2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
        <div className="background-image2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <div className="gartexte">
                            <h3>.</h3>
                            <h4>.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <footer id="footer" className="clearfix">
            <div id="footer-widgets">
                <div className="container">
                    <div id="footer-wrapper">
                        <div className="row">
                            <div className="col-sm-6 col-md-2">
                              <div id="meta-3" className="widget widgetFooter widget_meta">
                                <h4  className="widgettitle">Plan du site</h4>
                                  <ul>
                                  <li><a href="#"><i className="fa fa-home fa-fw"></i> Home</a></li>
                                  <li><a href="privacypolicy.php"><i className="fa fa-link"></i> Mentions légales</a></li>
                                  <li><a href="#"><i className="fa fa-envelope fa-fw"></i> Contactez-nous</a></li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-sm-6 col-md-2">
                                <div id="recent-posts-3" className="widget widgetFooter widget_recent_entries">
                                    <h4 className="widgettitle">Réseaux sociaux</h4>
                                        <ul>
                                            <li>
                                             <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i> Facebook</a>
                                            </li>
                                            <li>
                                              <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i> Twitter</a>
                                            </li>
                                            <li>
                                              <a href="http://www.youtube.com/" target="_blank"><i className="fa fa-youtube"></i> Youtube</a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div id="meta-4" className="widget widgetFooter widget_meta">
                                    <h4 className="widgettitle"></h4>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">Newsletter</span>
                                                <input className="form-control" placeholder=" AliceDurand@gmail.com" type="text" />
                                            </div>
                                        </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">  Tel mobile  </span>
                                                    <input className="form-control" placeholder="06 24 39 00 00" type="text" />
                                                    <span className="input-group-btn">
                                                    <button className="btn btn-primary" type="button">Valider</button>
                                                    </span>
                                                </div>
                                            </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4">
                                <div id="search-3" className="widget widgetFooter widget_search"><h4 className="widgettitle"></h4>
                                    <div className="form-group">
                                        <label className="control-label">  </label>
                                            <div className="input-group">
                                                <span className="input-group-addon">Mot clé :</span>
                                                <input className="form-control" placeholder="Que recherchez-vous ?" type="text" />
                                                <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button">Valider</button>
                                                </span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
               <div className="container">
                  <div className="row">
                     <div className="col-xs-5" >
                        <div className="copyright">
                        <p>© 2017, Celebetrip, All rights reserved </p>
                        </div>
                        <div id="sub-floor">
                        </div>
                    </div>
                   </div>
                </div>
             </div>
      </footer>
</div>);

}
}*/

function circuitReducer(state, action) {
  if(action.type = 'addCircuit'){
    return { circuit: action.circuit }
  }
}

const store = createStore(circuitReducer);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/app2" component={App2} />
        <Route exact path="/app3" component={App3} />
        <Route exact path="/app32" component={App32} />
        <Route exact path="/app33" component={App33} />
        <Route exact path="/app34" component={App34} />
        <Route exact path="/celebetrip" component={CelebtripLeafletRedux} />
        <Route component={App} />
    </Switch>
 </Router>
 </Provider>
  , document.getElementById('root'));
