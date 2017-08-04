/*---------------- -------------- LES CIRCUITS D'HUGO ---------------------------------*/

var React = require('react');
var Link = require('react-router-dom').Link;

var connect = require('react-redux').connect;


/*-----------------------------------Sous composants-----------------------------------*/

class App3 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <Logo />
        <Introhugo />
        <Circuit1Redux />
        <Circuit2Redux />
        <Intropiaf/>
        <Circuit3 />
        <Circuit4 />
    </div>
  );
  }
}/*FIN*/

/*-------------------Detail des sous composants LIGNE 25 à 257 ----------------------------*/


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
class Introhugo extends React.Component {
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
                       <h4>Entrez dans l'univers d'Hugo </h4>
        </div></div></div></div></div>
    );
  }
}/*FIN*/
/*------------------------------------HUGO---------------------------*/


/*---CIRCUIT 1 Coeur historique de Paris-*/
class Circuit1 extends React.Component {
constructor() {
super();
this.onIncreaseClick = this.onIncreaseClick.bind(this);
}

onIncreaseClick(e) {
  console.log(e.target.value);
  this.props.onIncreaseClick1(e.target.value);
}

render() {
return(

<div className="background-color">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-xs-12">

                <div className="container">
                    <div className="row">
                        <div className="col-xs-offset-0 col-xs-3">
                            <br />
                            <br />
                            <Link to="/celebetrip">
                            <button name="choix" id="submit" type="submit" value="hugo_circuit1" className="btn btn-default circuithugobutton" onClick={this.onIncreaseClick}>Circuit 1<span className="glyphicon glyphicon-chevron-right"></span>
                            </button>
                            </Link>
                            </div>
                        <div className="col-xs-offset-1 col-xs-8 hugotextjustify">
                            <h4><strong>Coeur historique de Paris</strong></h4>
                            <h6> Notre-Dame de Paris, les îles de la Cité et Saint-Louis, le quartier latin... visite du cœur historique de Paris.</h6>
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </div>
    </div>
</div>

);
}
}/*FIN*/


/*--CIRCUIT 2 Autour de la Tour Eiffel--*/
class Circuit2 extends React.Component {
constructor() {
super();
this.onIncreaseClick = this.onIncreaseClick.bind(this);
}

onIncreaseClick(e) {
  console.log(e.target.value);
  this.props.onIncreaseClick2(e.target.value);
}
render() {
return(

    <div className="background-color">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12">

                <div className="container">
                    <div className="row">
                        <div className="col-xs-offset-0 col-xs-3">
                            <br />
                            <br />
                            <Link to="/celebetrip">
                            <button name="choix" id="submit" type="submit" value="hugo_circuit2" className="btn btn-default circuithugobutton" onClick={this.onIncreaseClick}> Circuit 2<span className="glyphicon glyphicon-chevron-right"></span>
                            </button>
                            </Link>
                        </div>
                        <div className="col-xs-offset-1 col-xs-8 hugotextjustify">
                            <h4>Autour de la tour Eiffel</h4>
                            <h6> Tour Eiffel, Trocadéro, Invalides, Pont Alexandre-III... Balade placée sous le signe de la démesure.</h6>

                        </div>
                    </div>
                </div>

                </div>
            <br />
        </div>
    </div>
</div>

);
}
}/*FIN*/



/*------------------------------------PIAF---------------------------*/
class Intropiaf extends React.Component {
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
                       <h4>Entrez dans l'univers de Piaf </h4>
        </div></div></div></div></div>
);
}
}


/*---CIRCUIT 1 Coeur historique de Paris-*/
class Circuit3 extends React.Component {
constructor() {
super();
this.onIncreaseClick = this.onIncreaseClick.bind(this);
}

onIncreaseClick(e) {
  console.log(e.target.value);
  this.props.onIncreaseClick1(e.target.value);
}

render() {
return(

<div className="background-color">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-xs-12">

                <div className="container">
                    <div className="row">
                        <div className="col-xs-offset-0 col-xs-3">
                            <br />
                            <br />
                            <Link to="/celebetrip">
                            <button name="choix" id="submit" type="submit" value="hugo_circuit1" className="btn btn-default circuithugobutton" onClick={this.onIncreaseClick}>Circuit 1<span className="glyphicon glyphicon-chevron-right"></span>
                            </button>
                            </Link>
                            </div>
                        <div className="col-xs-offset-1 col-xs-8 hugotextjustify">
                            <h4><strong>Coeur historique de Paris</strong></h4>
                            <h5> Notre-Dame de Paris, les îles de la Cité et Saint-Louis, le quartier latin... visite du cœur historique de Paris.</h5>
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </div>
    </div>
</div>

);
}
}/*FIN*/


/*--CIRCUIT 2 Autour de la Tour Eiffel--*/
class Circuit4 extends React.Component {
constructor() {
super();
this.onIncreaseClick = this.onIncreaseClick.bind(this);
}

onIncreaseClick(e) {
  console.log(e.target.value);
  this.props.onIncreaseClick2(e.target.value);
}
render() {
return(

    <div className="background-color">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12">

                <div className="container">
                    <div className="row">
                        <div className="col-xs-offset-0 col-xs-3">
                            <br />
                            <br />
                            <Link to="/celebetrip">
                            <button name="choix" id="submit" type="submit" value="hugo_circuit2" className="btn btn-default circuithugobutton" onClick={this.onIncreaseClick}> Circuit 2<span className="glyphicon glyphicon-chevron-right"></span>
                            </button>
                            </Link>
                        </div>
                        <div className="col-xs-offset-1 col-xs-8 hugotextjustify">
                            <h4>Autour de la tour Eiffel</h4>
                            <h5> Tour Eiffel, Trocadéro, Invalides, Pont Alexandre-III... Balade placée sous le signe de la démesure.</h5>

                        </div>
                    </div>
                </div>

                </div>
            <br /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
</div>

);
}
}/*FIN*/





function mapDispatchToPropsCircuit1(dispatch) {
  return {
    onIncreaseClick1: function(value) {
      dispatch({type: 'addCircuit', circuit: value})
    }
  }
}

var Circuit1Redux = connect(
  null,
  mapDispatchToPropsCircuit1
)(Circuit1);

function mapDispatchToPropsCircuit2(dispatch) {
  return {
    onIncreaseClick2: function(value) {
      dispatch({type: 'addCircuit', circuit: value})
    }
  }
}

var Circuit2Redux = connect(
  null,
  mapDispatchToPropsCircuit2
)(Circuit2);

/*----------------------------------------------------------------------REACT--------------------------------------------------------*/
module.exports = App3;
