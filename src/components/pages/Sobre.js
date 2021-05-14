import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import './Sobre.css'
export default function Sobre() {
    const [clickAbout, setClickAbout] = useState(true)
    const handleClickAbout = () =>{
        setClickAbout(!clickAbout)
        setClickGroups(false)
        setClickLocation(false)
    }

    const [clickGroups, setClickGroups] = useState(false)
    const handleClickGroups = () =>{
        setClickGroups(!clickGroups)
        setClickAbout(false)
        setClickLocation(false)
    
    }

    const [clickLocation, setClickLocation] = useState(false)
    const handleClickLocation = () =>{
        setClickLocation(!clickLocation)
        setClickAbout(false)
        setClickGroups(false)
    }

    const [clickCells, setClickCells] = useState(false)
    const handleClickCells = () => {
        setClickCells(!clickCells)
    }

    const [clickPastores, setClickPastores] = useState(false)
    const handleClickPastores = () => {
        setClickPastores(true)
    }

    const [clickChurch, setClickChurch] = useState(false)
    const handleClickChurch = () => {
        setClickChurch(true)
    }

    const leaveClickImg = () => {
        setClickPastores(false)
        setClickChurch(false)
    }
    return (
        <>
            <div className="container">
                <div className="teste">
                <div className="choose">
                    <button onClick={handleClickAbout} className={clickAbout ? "btn active" : "btn"} value="Sobre Nós">Sobre Nós</button>
                    <button onClick={handleClickGroups} className={clickGroups ? "btn active" : "btn"} value="Células">Células</button>
                    <button onClick={handleClickLocation} className={clickLocation ? "btn active" : "btn"} value="Localização">Localização</button>
                </div>
                <div className="Info-sobre">
                <div className={clickAbout? 'about' :'close-about'}>
                     <div className="cards">
                         <h2 className="about-h2">IEQ Nova Sepetiba</h2>
                         <div className="p-container">
                         <p>A igreja do Evangelho Quandragular em Nova Sepetiba foi inaugurada há aproximadante 5
                              anos e está sobre a direção do pastor Wiliams Oliveira desde julho de 2019.</p>
                         
                         <p>Nas palavras do atual pastor: "Somos uma igreja cujo sobrenome é compaixão. Fomos abraçados por Jesus de tal
                             modo que agora a nossa missão é mantermos os nossos braços abertos para distribuir o amor que já nos foi dado por meio da graça".</p>
                         <p>Cremos em um evangelho no qual ainda há batismo com espírito Santo, salvação, cura e a espera da volta do nosso Salvador.</p>   
                         
                        
                        
                             <h3>Pastores:</h3>                  
                         <p className="Name">Wiliams Oliveira da Silva (25 anos)</p>
                         <p className="Name">Gizeli da Silva Cavalcante Maturgo(26 anos)</p>
                         </div>
                         <div className="church-img-container">
                             <img onClick={handleClickPastores} className="church-img" src="./images/Pastores.jpg" alt="pastores" />
                         </div>
                     </div>
                </div>
                <div className={clickGroups? 'group' :'close-group'}>
                    <div className="cards">
                        <div  className="what-are-cells">
                               <h1>O que são células <i onClick={handleClickCells} class="far fa-question-circle"/></h1>
                        </div>
                       <div className={clickCells? "cells-explanation" :'cells-explanation-close'}>
                       <p>As nossas células são a extensão de toda felicidade e comunhão que cultivamos em nossa igreja local. É
                           um momento no qual, em um ambiente mais discontraído, falamos de Jesus de maneiraw inclusiva, amorosa e divertida!
                        </p>
                        <p>Reunimos membros da nossa igreja com seus convidados não cristãos para testemunharmos o amor incondicional de Cristo.</p>

                              
                       <Link to="/Células" className="our-cells">
                           <button value="Conheça nossas células !" className="btn-cells">Conheça nossas células !</button>
                       </Link >

                       </div>

                    </div>
                </div>
                <div  className={clickLocation? 'location' :'close-location'}>
                      <div className="cards">
                          <div className="adress">
                          <h3>Nosso endereço:</h3>
                          <p>Av.Sete- Sepetiba,Rio de Janeiro, 23547</p>

                          <div className="cars-app">
                              <h3> Vai vim com algum app de transporte?</h3>
                              <p> Só digitar "IEQ Nova Sepetiba"</p>
                          </div>

                          <a target="_blank" rel="noopener noreferrer" className="maps" href="https://maps.app.goo.gl/voVoAGbPaC17KQz86">
                              Click aqui para ver no Google Maps
                           <i class="fas fa-map-marker-alt"></i></a>
                          </div>
                        <div className="location-img-container">
                            <img onClick={handleClickChurch} src="./images/FrenteDaIgreja.jpg" alt="Igreja" />
                        </div> 
                           
                      </div>
                      
          
                </div>
                </div>
                </div>
                
                </div>
                
                <div onClick={leaveClickImg} className={clickPastores? 'modal open' : 'modal'}>
                    <img src= "./images/Pastores.jpg" alt="Pastores"></img>
             </div>

             <div onClick={leaveClickImg} className={clickChurch? 'modal open' : 'modal'}>
                    <img src= "./images/FrenteDaIgreja.jpg" alt="Igreja"></img>
             </div>
            
            <Footer />
        </>
    
    )
}
