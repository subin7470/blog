import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image'


function App() {
  return (
    <div className="App">
         <header class="header-section">
       <div class="header-top">
         <div class="container.fluid">
   

<nav class="navbar navbar-expand-md bg-dark navbar-dark top-fixed">

<ul class="navbar-nav">
  <li class="nav-item">
<a class="navbar-brand" id="i" href="www.avionics.me/">
    <img src="/On dark@4x.png" alt="logo" width="40px"></img>
  </a>
  </li>
  
 
  </ul>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav tggle">
      <li class="nav-item">
        <a class="nav-link" href="www.google.com">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="www.facebook.in">Register/Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="www.google.com">Subscribe</a>
      </li>    
    </ul>
  </div> 
</nav>
</div>
</div>

<div class="header-bottom">
  <div class="container.fluid">
  <nav class="navbar navbar-expand-md bg-warning navbar-light top-fixed">
<span class="navbar-text">MOTO BLOG</span>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav tiggle">
      <li class="nav-item">
        <a class="nav-link" href="www.google.com"><span>Features</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="www.facebook.in"><span>Reviews</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="www.google.com"><span>Contacts</span></a>
      </li>    
    </ul>
  </div> 
<form class="form-inline" action="/action_page.php">
    <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
    <button class="btn btn-success" type="submit">Search</button>
  </form>


    </nav>
  </div>
</div>
</header>
<div class="container.fluid">
<div id="demo" class="carousel slide" data-ride="carousel" >
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/wrangler.jpg" alt="wrangler" width="100%" height="400" ></img>
      <div class="carousel-caption">
        <h3>JEEP WRANGLER</h3>
        <p> Go Anywhere. Do Anything</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="gwagon.jpg" alt="G-wagon" width="100%" height="400"></img>
      <div class="carousel-caption">
        <h3>G-WAGON</h3>
        <p>The Best or Nothing</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="bmwm.jpg" alt="BMW M5" width="100%" height="400"></img>
      <div class="carousel-caption">
        <h3>B M W M5</h3>
        <p>Sheer Driving Pleasure</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</div>
<section class="add-section spad">
  <div class="container">
    <div class="add-wrap">
    <div class="add-text text-white">
      <h1>BEST CARS</h1>
      <div class="underline align-center">
        <div class="line">

        </div>
      </div>

    </div>
    </div>
  </div>
</section>
<div class="container.fluid">
<CardDeck>
  <Card>
    <Card.Img variant="top" src="/jeep.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>JEEP WRANGLER</Card.Title>
      <Card.Text>
       Go Anywhere. Do Anything
      </Card.Text>
    </Card.Body>
    
    <Card.Footer>
      <small className="text-muted">Last updated 4 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/compass.jpg" height="50%" ></Card.Img>
    <Card.Body>
      <Card.Title>JEEP COMPASS</Card.Title>
      <Card.Text>
        Find Your True North
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 6 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="ford.jpg" height="50%" ></Card.Img>
    <Card.Body>
      <Card.Title>FORD MUSTANG</Card.Title>
      <Card.Text>
      The Future Of Exhilaration.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="por.jpg" height="50%" ></Card.Img>
    <Card.Body>
      <Card.Title>PORSCHE</Card.Title>
      <Card.Text>
      There Is No Substitute.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="/bbm.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>BMW M5</Card.Title>
      <Card.Text>
       Sheer Driving Pleasure.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 4 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/beet.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>BEETLE</Card.Title>
      <Card.Text>
   Think Small.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="ppp.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>PORSCHE 911 GT-3</Card.Title>
      <Card.Text>
      There Is No Substitute
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 9 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="fiat.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>PREMIER PADMINI</Card.Title>
      <Card.Text>
        Driven By Fashion FIAT.
        Simply More.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 4 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="/charger.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>DODGE CHARGER</Card.Title>
      <Card.Text>
      Domestic. Not Domesticated.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 6 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/fm.jpg"height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>FORD MUSTANG</Card.Title>
      <Card.Text>
      The Future Of Exhilaration.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 7 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="shi.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>SUPER CAR</Card.Title>
      <Card.Text>
        Turbo
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 8 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="dsh.jpg" height="50%"></Card.Img>
    <Card.Body>
      <Card.Title>UNKOWN</Card.Title>
      <Card.Text>
        Supercar
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
  </div>
  <br></br>
  <div class="underline align-center">
        <div class="line">

        </div>
      </div>
      <br></br>

  <div class="subnavigation-container">
  <div class="container">
<nav class="navbar p-a-0">
  <ul class="nav navbar-nav col-subnav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#">Review</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Subscribe</a>
    </li>
  </ul>
</nav>
  </div>
</div>

<div class="m-t-3"></div>

<footer class="mainfooter" role="contentinfo">
  <div class="footer-top p-y-2">
    <div class="container-fluid">

    </div>
  </div>
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
       
        <div class="footer-pad">
          <h4>Address</h4>
          <address>
								<ul class="list-unstyled">
									<li>
                    AVIONICS SHUTTLE<br></br>
										KOCHI<br></br>
										KERALA<br></br>
										
									</li>
									<li>
										Phone: 1800-555-111
									</li>
								</ul>
							</address>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
       
        <div class="footer-pad">
          <h4>Popular Services</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Website Information</h4>
          <ul class="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Popular Departments</h4>
          <ul class="list-unstyled">
            <li><a href="#">Cars</a></li>
            <li><a href="#">Bikes</a></li>
            <li><a href="#">Trucks</a></li>
            <li><a href="#">Aircraft</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          
          <p class="text-xs-center">&copy; Copyright 2020 - City of AVIONICS.  All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>

  
  
    </div>
  );
}

export default App;
