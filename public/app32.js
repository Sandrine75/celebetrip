/*---------------- -------------- LES CIRCUITS DE PIAF ---------------------------------*/

var React = require('react');
var Link = require('react-router-dom').Link;


/*-----------------------------------Sous composants-----------------------------------*/

class App32 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <Macaron />
        <Intro />
        <Circuit1 />
        <Circuit2 />
        <Circuit3 />
        <Circuit4 />
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


/*---CIRCUIT 1 Coeur historique de Paris-*/
class Circuit1 extends React.Component {
constructor() {
super();
}
render() {
return(
    <div>
        <div className="container background-hugo">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    
                    <div className="hugograndcadre">
                        <div className="background4">
                            <div className="container">
                                <div className="row1">
                                    <div className="col-xs-offset-0.5 col-xs-4" >
                                        <div className="map">
                                            <div className="hugocadre">
                                            <img src="images/circuit1.png" className="img-responsive"/>
                                            </div>
    
                                            <br />
    
                                            <div className="hugocadre">
                                            <img src="images/photocircuit1couleur.png" className="img-responsive"/>
                                            </div>
    
                                            <br />
    
                                            <div className="hugotextcentrer">
                                            <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit1.html" >Circuit 1 </a> <span class="glyphicon glyphicon-chevron-right"></span>
                                            </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-offset-0 col-xs-8">
                                        <div className="hugotextjustify">
                                        <h3><strong>Coeur historique de Paris</strong></h3>
                                        <h4> Notre-Dame de Paris, les îles de la Cité et Saint-Louis, le quartier latin... visite du cœur historique de Paris.</h4>
                                        <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo. Vous découvrirez nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    
                </div>
                <br />
            </div>
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
}
render() {
return(
    <div>
        <div className="container background-hugo">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <div className="hugograndcadre">
                        <div className="background4">
                            <div className="container">
                                <div className="row1">
                                    <div className="col-xs-offset-0.5 col-xs-4">
                                        <div className="map">
                                            <div className="hugocadre">
                                                <img src="images/circuit2.png" className="img-responsive"/>
                                                </div>
    
                                                <br />
    
                                                <div className="hugocadre">
                                                <img src="images/photocircuit2couleur.png" className="img-responsive"/>
                                                </div>

                                                <br />

                                                <div className="hugotextcentrer">
                                                <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit2.html" >Circuit 2 </a><span class="glyphicon glyphicon-chevron-right"></span>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-offset-0 col-xs-8">
                                            <div className="hugotextjustify">
                                               <h3>Autour de la tour Eiffel</h3>
                                               <h4> Tour Eiffel, Trocadéro, Invalides, Pont Alexandre-III... Balade placée sous le signe de la démesure.</h4>
                                               <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo. Vous découvrirez nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br />
                    </div>
                   
                </div>
            </div>
      </div>
   
);
}
}/*FIN*/


/*--CIRCUIT 3 Des Champs-Elysées au Louvre--*/
class Circuit3 extends React.Component {
constructor() {
super();
}
render() {
return(
    
        <div className="container background-hugo">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <div className="hugograndcadre">
                        <div className="background4">
                            <div className="container">
                                <div className="row1">
                                    <div className="col-xs-offset-0.5 col-xs-4">
                                        <div className="map">
                                            <div className="hugocadre">
                                               <img src="images/circuit3.png" className="img-responsive"/>
                                            </div>
                                               <br />
                                            <div className="hugocadre">
                                               <img src="images/photocircuit3couleur.png" className="img-responsive"/>
                                            </div>
    
                                               <br />
    
                                            <div className="hugotextcentrer">
                                               <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit3.html" >Circuit 3 </a><span class="glyphicon glyphicon-chevron-right"></span>
                                               </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-offset-0 col-xs-8">
                                        <div className="hugotextjustify">
                                            <h3>Des Champs-Elysées au Louvre</h3>
                                            <h4> Le Louvre, la Concorde, les Tuileries, le Grand Palais, les Champs-Élysées...Voyage au cœur du Paris légendaire.</h4>
                                            <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo. Vous découvrirez nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
                                        </div>
                                    </div>
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


/*--CIRCUIT 4 Montmartre et Pigalle--*/
class Circuit4 extends React.Component {
constructor() {
super();
}
render() {
return(
    <div>
        <div className="container background-hugo">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <div className="hugograndcadre">
                        <div className="background4">
                            <div className="container">
                                <div className="row1">
                                    <div className="col-xs-offset-0 col-xs-4">
                                        <div className="map">
                                            <div className="hugocadre">
                                               <img src="images/circuit3.png" className="img-responsive"/>
                                            </div>
                                               <br />
                                            <div className="hugocadre">
                                               <img src="images/photocircuit4couleur.png" className="img-responsive"/>
                                            </div>
                                               <br />
                                            <div className="hugotextcentrer">
                                               <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit3.html" >Circuit 3 </a><span class="glyphicon glyphicon-chevron-right"></span>
                                               </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-offset-0 col-xs-8">
                                        <div className="hugotextjustify">
                                           <h3>Des Champs-Elysées au Louvre</h3>
                                           <h4> Le Louvre, la Concorde, les Tuileries, le Grand Palais, les Champs-Élysées...Voyage au cœur du Paris légendaire.</h4>
                                           <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo. Vous découvrirez nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
                    <br />
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

module.exports = App32;