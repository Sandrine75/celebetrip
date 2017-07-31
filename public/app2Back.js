var React = require('react');
/*---------------------------------Sous composants-----------------------------------*/
class App2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <Logo />
        <Hugo />
        <Rodin />
        <YSL />
        <Questionnaire />
    </div>
  );
  }
}/*FIN*/

/*-------------------Detail des sous composants LIGNE 19 à 238 ----------------------------*/

class Logo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <h2>Bienvenue sur Celebetrip</h2>
                    <h3>Choisissez votre compagnon <br /> parmi notre selection de célébrités</h3>
                    <p> </p>
                    <div className="nb_com" style="display:none">9</div>
                </div>
            </div>
        </div>
     );
  }
}/*FIN*/

/*---------------HUGO--------------*/
class Hugo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
     <div>
         <div className="container">
            <div className="row">
                <div className="col-xs-12 border">
                    <div className="col-xs-offset-1 col-xs-2">
                        <div className="artiste">
                            <div style="text-align:center">
                                <img src="images/hugopastille.png"/>
                                    <p>10 circuits <br /> 2 à 6 jours </p>
                                    <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> <a href="file:///C:/Users/famil/Documents/CELEBETRIP/circuit-hugo.html" > GO </a><span class="glyphicon glyphicon-chevron-right"></span>
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-offset-2 col-xs-7">
                        <div className="artiste">
                            <div className="left_align">
                                <h1>Victor Hugo</h1>
                                <p>Ce parcours guidé vous permet de découvrir Paris avec Victor Hugo ; vous serez amusé par les nombreuses anacdotes de sa vie parisiennes tout au long de votre parcours, ses pensées, ses souvenirs, le Paris qu'il a aimé. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}/*FIN*/

/*---------------PIAF--------------*/
class Piaf extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
     <div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 border">
                    <div className="col-xs-offset-1 col-xs-2">
                        <div className="artiste">
                            <div style="text-align:center">
                                <img src="images/piafpastille.png" />
                                    <p> 6 circuits <br /> 2 à 4 jours </p>
                                        <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> Découvrez Paris <br /> avec Piaf <span className="glyphicon glyphicon-chevron-right"></span>
                                        </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-offset-2 col-xs-7">
                      <div className="artiste">
                            <div className="left_align">
                                        <h1>Edith Piaf</h1>
                                        <p>De Belleville, où elle est née, au cimetière où elle est inhumée, la capitale recèle de lieux mythiques ou plus discrets, témoins silencieux de la vie tourmentée de la Môme. Parcours illustrés et commentés "Sur les Pas de la Môme Piaf. Un Paris hors du commun"</p>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}/*FIN*/

/*---------------RODIN--------------*/
class Rodin extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 border">
                    <div className="col-xs-offset-1 col-xs-2">
                        <div className="artiste">
                            <div style="text-align:center">
                                <img src="images/rodinpastille.png"/>
                                    <p> 5 circuits <br /> 2 à 4 jours </p>
                                    <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> Découvrez Paris <br /> avec Rodin<span className="glyphicon glyphicon-chevron-right"></span>
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-offset-2 col-xs-7">
                        <div className="artiste">
                            <div className="left_align">
                                    <h1>Emile Rodin</h1>
                                    <p>Itinéraire sur les pas de Rodin sculpteur, mais pas que ... Découvrez Paris avec Rodin le dessinateur, le collectionneur, le lecteur, l’amateur de danse et de musique... Nous vous proposons des circuits urbains scénarisés par les anecdotes de l'artiste. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}/*FIN*/

/*---------------YSL--------------*/
class YSL extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 border">
                    <div className="col-xs-offset-1 col-xs-2">
                        <div className="artiste">
                            <div style="text-align:center">
                                <img src="images/yslpastille.png"/>
                                    <p> 4 circuits <br /> 2 à 4 jours </p>
                                    <button name="choix" id="submit" type="submit" value="submit" className="btn btn-default"> Découvrez Paris <br /> avec YSL <span className="glyphicon glyphicon-chevron-right"></span>
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-offset-2 col-xs-7">
                      <div className="artiste">
                            <div className="left_align">
                                    <h1>Yves Saint Laurent</h1>
                                        <p>Itinéraire sur les pas de Rodin sculpteur, mais pas que ... Découvrez Paris avec Rodin le dessinateur, le collectionneur, le lecteur, l’amateur de danse et de musique... Nous vous proposons des circuits urbains scénarisés par les anecdotes de l'artiste. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
  }
}/*FIN*/

/*---------------PIAF--------------*/
class Questionnaire extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <div className="titleprghp">
                                <span className="prg">De quelle célébrité êtes-vous fan ?</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="programme" className="col-sm-2 control-label">Parmi ces choix :</label>
                                <div className="col-sm-8">
                                    <select className="form-control">
                                        <option>Victor Hugo</option>
                                        <option>Edith Piaf</option>
                                        <option>Emile Rodin</option>
                                        <option>Sophie Marceau</option>
                                        <option>Patricia Kass</option>
                                    </select>
                                </div>
                            </div>
                        <div className="form-group">
                            <label for="origine" className="col-sm-2 control-label">A venir</label>
                                <div className="col-sm-8">
                                    <select className="form-control">
                                        <option>Paul Bocuse</option>
                                        <option>Yves Saint Laurent</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="logo">
            <left> <img src="images/logo.png" className="img-responsive"/></left>
        </div>
    </div>
    );
  }
}/*FIN*/

module.exports = App2;
