import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-success">Especial hoy...Menú</h1>
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src="src/assets/img/fries-hero-bg.jpg" class="card-img-top" alt="No encontro la imagen!!"/>
              <div className="card-body">
              <h5 className="card-title">Papas Mexas</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src="src/assets/img/fries-sq-1.jpg" class="card-img-top" alt="No encontro la imagen!!"/>
              <div className="card-body">
              <h5 className="card-title">Papas Norteñas</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src="src/assets/img/fries-sq-2.jpg" class="card-img-top" alt="No encontro la imagen!!"/>
              <div className="card-body">
              <h5 className="card-title">Papas Chiltepín</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer titulo ='Subscribete a nuestras noticias ..!!' />

    </>
  )
}

export default App
