/*---------------------*/
/*-------------------------------------------------------   LES CIRCUITS D'HUGO   ---------------------------------------------------*/
                                   /*--------Page 3-------*/


/*----------------------------------------------------------------------REACT--------------------------------------------------------*/

var React = require('react');
var Link = require('react-router-dom').Link;
/*----------------------------------------------------------------------REACT--------------------------------------------------------*/


/*---------------------------------Sous composants-----------------------------------*/
class App3 extends React.Component {
constructor() {
super();
}
render() {
return(
<div>
<Macaron />
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12">
   <div className="hugobody">
       <div className="hugotextcentrer">
           <h6>. </h6>
           <h3>Entrez dans l'univers de Hugo </h3>
           <h4>10 circuits pour découvrir Paris :</h4>
           <h6>. </h6>
       </div>
   <Circuit1 />
   <Circuit2 />
   <Circuit3 />
   <Circuit4 />
   <Recherche />
   </div>
</div>
</div>
</div>
</div>
);
}
}/*FIN*/

/*-------------------Detail des sous composants LIGNE 25 à 257 ----------------------------*/

class Macaron extends React.Component {
constructor() {
super();
}
render() {
return(
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12">
<div className="background3">
   <div className="artiste">
       <img src="images/logo-paris-hugo.png"/>
        <h4>Liste des circuits "Visite de Paris avec Hugo" :</h4>
   </div>
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
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12">
<div id="hugocadre2">
   <div className="background4">
       <div className="container">
           <div className="row1">
               <div className="col-xs-offset-0.5 col-xs-4" >
                   <div className="map">
                           <div id="hugocadre">
                               <img src="images/circuit1bis.png" className="img-responsive"/>
                           </div>
                               <br />
                           <div id="hugocadre">
                               <img src="images/photocircuit1couleur.png" className="img-responsive"/>
                           </div>

                               <br />
                           <div className="hugotextcentrer">
                              <Link to="/celebetrip">
                               <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default">Circuit 1<span className="glyphicon glyphicon-chevron-right"></span>
                               </button>
                               </Link>
                           </div>
                   </div>
               </div>

               <div className="col-xs-offset-0.5 col-xs-8">
                   <div className="hugotextjustify">
                       <h3><strong>Coeur historique de Paris</strong></h3>
                       <h4> Notre-Dame de Paris, les îles de la Cité et Saint-Louis, le quartier latin... visite du cœur historique de Paris.</h4>
                       <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo. Vous découvrirez nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
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
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12">
<div className="background4">
   <div className="container">
       <div className="row1">
           <div className="col-xs-offset-0.5 col-xs-4">
               <div className="map">
                   <div className="artiste">
                       <img src="images/circuit2.png"/>
                   </div>
                           <br />
                           <div id="hugocadre">
                           <img src="images/photocircuit2couleur.png" className="img-responsive"/>
                           </div>
                           <br />
                   <div className="hugotextcentrer">
                   <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit2.html" >Circuit 2 </a><span className="glyphicon glyphicon-chevron-right"></span>
                   </button>
                   </div>
               </div>
           </div>
           <div className="col-xs-offset-0.5 col-xs-6">
               <div className="artiste">
                   <div className="left_align">
                       <span className="left_align">
                       <h3>Autour de la tour Eiffel</h3>
                       <h4> Tour Eiffel, Trocadéro, Invalides, Pont Alexandre-III... Balade placée sous le signe de la démesure.</h4>
                       <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo. Vous découvrirez nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
                       </span>
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
<div>
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12">
<div id="hugocadre2">
   <div className="background4">
       <div className="container">
           <div className="row1">

               <div className="col-xs-offset-0.5 col-xs-4">
                   <div className="map">
                       <div id="hugocadre">
                           <img src="images/circuit3.png" className="img-responsive"/>
                       </div>
                           <br />
                       <div id="hugocadre">
                           <img src="images/photocircuit3couleur.png" className="img-responsive"/>
                       </div>
                           <br />
                       <div className="hugotextcentrer">
                           <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit3.html" >Circuit 3 </a><span className="glyphicon glyphicon-chevron-right"></span>
                           </button>
                       </div>
                   </div>
               </div>

           <div className="col-xs-offset-0.5 col-xs-8">
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


/*--CIRCUIT 4 Montmartre et Pigalle--*/
class Circuit4 extends React.Component {
constructor() {
super();
}
render() {
return(
<div>
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12">
<div id="hugocadre2">
   <div className="background4">
       <div className="container">
           <div className="row1">

               <div className="col-xs-offset-0.5 col-xs-4">
                   <div className="map">
                       <div id="hugocadre">
                           <img src="images/circuit3.png" className="img-responsive"/>
                       </div>
                           <br />
                       <div id="hugocadre">
                           <img src="images/photocircuit4couleur.png" className="img-responsive"/>
                       </div>
                           <br />
                       <div className="hugotextcentrer">
                           <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit3.html" >Circuit 3 </a><span className="glyphicon glyphicon-chevron-right"></span>
                           </button>
                       </div>
                   </div>
               </div>

           <div className="col-xs-offset-0.5 col-xs-8">
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
<div className="container">
<div className="row">
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

module.exports = App3;
