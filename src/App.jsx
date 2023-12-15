import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {db} from './config/database';
import {collection, addDoc} from "firebase/firestore";
import heroImg from './assets/img/fries-hero-bg.jpg';
import friesSQ1 from './assets/img/fries-sq-1.jpg';
import friesSQ2 from './assets/img/fries-sq-2.jpg';




function App() {
  
  const [formulario, setFormulario]= useState({
    nombre:"",
    email:"",
    telefono:"",
    comentarios:""
  });

  const handleInputChange =(event)=>{
    setFormulario({
        ...formulario, 
        [event.target.name]: event.target.value
    });
  }
    const reservar= async(event)=>{
      event.preventDefault();
      console.log(formulario);
      //aqui mandar formulario a firebase
      await addDoc(collection(db, "reservas"), formulario);
    
    }
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-success">Especial hoy...Menú</h2>
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src={heroImg} class="card-img-top" alt="No encontro la imagen!!"/>
              <div className="card-body">
              <h5 className="card-title">Papas Mexas</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={friesSQ1} class="card-img-top" alt="No encontro la imagen!!"/>
              <div className="card-body">
              <h5 className="card-title">Papas Norteñas</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={friesSQ2} class="card-img-top" alt="No encontro la imagen!!"/>
              <div className="card-body">
              <h5 className="card-title">Papas Chiltepín</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <hr />
        <div className="row">
          <h2>Sección de reservas</h2>
          <p>En esta sección pudes reservar tu visita en el momento que desees. </p>
        <hr /><hr />
          <div className="col-md-6" style={{backgroungcolor:"#f1f1f1"}}>
            <h3>Reserva con nosotros</h3>
            <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
            <p>Centro Histórico Ciudad de México, MX 12345</p>
            <p>+1 (555) 123-4567</p>
            <p>contacto@lamiafamiglia.com</p>
            <p>
            2021. UCamp. Todos los derechos reservados.
            Esta es una aplicación ficticia para fines académicos.
            </p>
          </div>
          <div className="col-md-6">
            <form onSubmit={reservar}>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name='nombre' onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Email</label>
              <input type="email" className="form-control" name='email' onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Teléfono</label>
              <input type="text" className="form-control" name='telefono' onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Mensaje y comentarios</label>
              <textarea className="form-control"  rows="5" name='comentarios' onChange={handleInputChange}></textarea>
            </div>
            <div className="row">
              <div className="col-mid-12  text-center">
              <button className='btn btn-primary'>Reservar</button>
              </div>
            </div>
            </form>

          </div>
        </div>
      </div>
      
      <Footer titulo ='Subscribete a nuestras noticias ..!!' />

    </>
  )
}

export default App
