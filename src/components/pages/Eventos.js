import React, { useState } from 'react'
import Footer from '../Footer'
import './Eventos.css'
export default function Eventos() {

    const [clickTreinamento, setClickTreinamento] = useState(true)
    const handleClickTreinamento = () => {
        setClickTreinamento (!clickTreinamento)
        setClickProjetos(false)
        
    }

    const [clickProjetos, setClickProjetos] = useState(false)
    const handleClickProjetos = () => {
        setClickProjetos (!clickProjetos)
        setClickTreinamento(false)
        
    }

    

    const [clickEagleImg, setClickEagleImg] = useState(false)
    const handleClickEagleImg = () => {
        setClickEagleImg (!clickEagleImg)
        setClickHeroesImg(false)
    }

    const [clickHeroesImg, setClickHeroesImg] = useState(false)
    const handleClickHeroesImg = () => {
        setClickHeroesImg (!clickHeroesImg)
        setClickEagleImg(false)

    }

    const leaveClickImg = () => {
        setClickEagleImg(false)
        setClickHeroesImg(false)
    }
    return (
        <>
        
            <div className="eventos-container">
                <div className="teste">

               
                <div className="choose">
                <button onClick={handleClickTreinamento} value="Treinamento" className= {clickTreinamento? 'btn active' : 'btn'} >Treinamentos</button>
                <button onClick={handleClickProjetos}  value="Projetos" className= {clickProjetos? 'btn active' : 'btn'}>Projetos Sociais</button>
               
                </div>

                <div className="Info-sobre">
                    <div className={clickTreinamento? 'treinamento' : 'close-treinamento'}>
                       <h1>Treinamento de Líderes</h1>
                       <p> é formado por duas etapas:</p>
                        <div className="fases-treinamento">
                            <div className="formando-heróis">
                                <h3> Formando Heróis</h3>
                                    <img onClick={ handleClickHeroesImg} src="images/Heróis.jpg" alt="Formando Heróis"></img>
                                
                            </div>

                            <div className="academia-águias">
                            <h3> Academia das Águias</h3>
                            <img onClick={handleClickEagleImg} src="images/Águias.jpg" alt=" Águias"></img>
                                    
                            </div>
                        </div>
                    </div>

                    <div className={clickProjetos? 'projetos' : 'close-projetos'}>
                       <h1>Projetos Socias</h1>
                       <div className="video-container">
                       <video src= "images/Vídeo.mp4" controls="controls"  />
                       </div>

                    </div>

                  

                </div>
                <div onClick={leaveClickImg} className={clickHeroesImg? 'modal open' : 'modal'}>
                    <img src= "./images/Heróis.jpg" alt="Formando Heróis"></img>
                    
                                 
                                    
                                  
             </div>

             <div onClick={leaveClickImg} className={clickEagleImg? 'modal open' : 'modal'}>
                    <img src= "./images/Águias.jpg" alt="Academia da Águias"></img>
                    
                                  
                                 
             </div>
            </div>
            </div>

           

            <Footer/>
        </>
    )
}
