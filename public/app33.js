/*---------------- -------------- LES CIRCUITS DE PIAF ---------------------------------*/

var React = require('react');
var Link = require('react-router-dom').Link;


/*-----------------------------------Sous composants-----------------------------------*/

class App33 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <Macaron />
        <Intro />
        <Recherche />
    </div>
  );
  }
}/*FIN*/

/*-------------------Detail des sous composants LIGNE 25 à 257 ----------------------------*/





class Macaron extends React.Component {
constructor(){
super();
}
render() {
return(
 
    <div className="container">
            <div className="row">
                
                <img src="images/logo-paris-piaf.png" className="img-responsive"/>
            </div>
        </div>
);
}
}/*FIN*/


class Intro extends React.Component {
constructor(){
super();
}
render() {
return(
    
<div className="container background-hugo">
    <div className="row2">  
        
        <div className="col-sm-12 col-xs-12">
            
                <div className="hugotextcentrer">
                    <br/>
                    <h3>Entrez dans l'univers de Piaf </h3>
                    <h4>10 circuits pour découvrir Paris </h4> 
                    <br/>
                </div>
            </div>
        </div>
    
</div>
);
}
}/*FIN*/


/*---------Zone de recherche--------*/
class Recherche extends React.Component {
constructor() {
super();
}
render() {
return(
    <div>
        <div className="container background-hugo">
            <div className="row2">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <form className="navbar-form navbar-right inline-form">
                            <div className="form-group">
                            <input type="search" className="input-sm form-control" placeholder="Recherche" />
                            <button type="submit" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-eye-open"></span> Chercher</button>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </div>
);
}
}/*FIN*/




/*----------------------------------------------------------------------REACT--------------------------------------------------------*/

module.exports = App33;