import React, { useState } from 'react'


import Footer from '../Footer'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../SliderData'
import './cultos.css'


function Cultos() {
   
    
    const [clickDias, setClickDias] = useState(true)
    const handleClickDias = () => {
        setClickDias(!clickDias)
        setClickFotos(false)
    }

    const [clickFotos, setClickFotos] = useState(false)
    const handleClickFotos = () => {
        setClickFotos(!clickFotos)
        setClickDias(false)
    }



    return (
        <>
            <div className="cultos-container">
                <div className="teste">
                      
                <div className="choose">
                <button onClick={handleClickDias} value="Treinamento" className= {clickDias? 'btn active' : 'btn'} >Dias</button>
                <button onClick={handleClickFotos}  value="Jovens" className= {clickFotos? 'btn active' : 'btn'}>Fotos</button>
               
                </div>

                <div className="Info-sobre">
                    <div className={clickDias? 'Dias' : 'close-Dias'}>
                        <h1>Dias</h1>
                        <div className="Dias-section">
                            <div className="quintas">
                            <p>Todas as quintas feiras de 19:00 até 21:00</p>
                            </div>
                            <div className="domingos">
                            <p>Todos os domingos  de 18:30 até 20:30</p> 
                            </div>
                        </div>
                    </div>

                    <div className={clickFotos? 'Fotos' : 'close-Fotos'}>
                        <ImageSlider slides={SliderData}/>
                     
                    </div>
                </div>
                </div>
            </div>
           
            <Footer/>
        </>
    )
}

export default Cultos
