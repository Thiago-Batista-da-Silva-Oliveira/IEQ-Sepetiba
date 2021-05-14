import React, { useState } from 'react'
import Footer from '../Footer'
import './células.css'
export default function Células() {

    const [clickKids, setClickKids] = useState(true)
    const handleClickKids = () =>{
        setClickKids(!clickKids)
        setClickTeens(false)
        setClickAdults(false)
    }
    const [clickTeens, setClickTeens] = useState(false)
    const handleClickTeens = () =>{
        setClickTeens(!clickTeens)
        setClickKids(false)
        setClickAdults(false)
    }
    const [clickAdults, setClickAdults] = useState(false)
    const handleClickAdults = () =>{
        setClickAdults(!clickAdults)
        setClickKids(false)
        setClickTeens(false)
    }

    const [clickImgTeens, setClickImgTeens] = useState(false)
    const handleClickImgTeens = () => {
          setClickImgTeens(true)
    }
    const [clickImgTeens2, setClickImgTeens2] = useState(false)
    const handleClickImgTeens2 = () => {
        setClickImgTeens2(true)
  }

  const [clickImgKids, setClickImgKids] = useState(false)
  const handleClickImgKids = () => {
        setClickImgKids(true)
  }

  const [clickImgWomens, setClickImgWomens] = useState(false)
  const handleClickImgWomens = () => {
        setClickImgWomens(true)
  }

  const [clickImgMens, setClickImgMens] = useState(false)
  const handleClickImgMens = () => {
        setClickImgMens(true)
  }

    const leaveClickImg = () => {
        setClickImgTeens(false)
        setClickImgTeens2(false)
        setClickImgKids(false)
        setClickImgWomens(false)
        setClickImgMens(false)
    }
  
    return (
        <>
            <div  className="células-container">
            <div className="teste">
                      <div className="choose">
                          <button onClick={handleClickKids} value="Crianças" className={clickKids? 'btn active' : 'btn'}>Crianças</button>
                          <button onClick={handleClickTeens} value="Jovens" className={clickTeens? 'btn active' : 'btn'}>Jovens</button>
                          <button onClick={handleClickAdults} value="Adultos" className={clickAdults? 'btn active' : 'btn'}>Adultos</button>
                      </div>

               

                      <div className="Info-sobre">
             <div className={ clickKids? 'kids-section' : 'close-kids-section'}>
                  <h1>Crianças <i class="fas fa-child"></i></h1>
                  <p> Nos reunimos todas as quintas para fazermos diversas atividades, como:</p>

                  <ul className="kids-ul">
                      <li>Testemunhos</li>
                      <li>Orações</li>
                      <li>Dinâmicas</li>
                      <li>Entre outros</li>
                      </ul>
                      <div className="crianças-img-container">
                           <img onClick={handleClickImgKids} src="./images/Crianças.jpg" alt="jovens"></img>
                           
                       </div>
                     </div>
             
             <div className={ clickTeens? 'teens-section' : 'close-teens-section'}>
                  <h1>Jovens</h1>
                  <p> Nos reunimos todas as terças ás 17:30 para fazermos diversas atividades, como:</p>
                  <ul className="teens-ul">
                      <li>Testemunhos</li>
                      <li>Orações</li>
                      <li>Dinâmicas</li>
                      <li>Entre outros</li>
                      </ul>
                       <div className="jovens-img-container">
                           <img onClick={handleClickImgTeens} src="./images/Jovens.jpg" alt="jovens"></img>
                           <img onClick={handleClickImgTeens2} src="./images/Jovens2.jpg" alt="jovens"></img>
                       </div>
             </div>

             <div className={clickAdults? 'adults-section' : 'close-adults-section'}>
                  <h1>Adultos</h1>

                
                <div className="womens-mens-sections">
                    <div className="womens">
                          <h2>Mulheres</h2>
                    <p>Nos reunimos todas as sextas ás 18:30 para fazermos diversas atividades, como:</p>
                    <ul className="womens-ul">
                      <li>Testemunhos</li>
                      <li>Orações</li>
                      <li>Dinâmicas</li>
                      <li>Entre outros</li>
                      </ul>
                    <div className="womens-img-container">
                           <img onClick={handleClickImgWomens} src="./images/Mulheres.jpg" alt="Mulheres"></img>
                           
                       </div>
                    </div>

                    <div className="mens">
                         <h2>Homens</h2>
                         <p>Nos reunimos todas as sextas ás 18:30 para fazermos diversas atividades, como:</p>
                         <ul className="mens-ul">
                      <li>Testemunhos</li>
                      <li>Orações</li>
                      <li>Dinâmicas</li>
                      <li>Entre outros</li>
                      </ul>
                         <div className="mens-img-container">
                           <img onClick={handleClickImgMens} src="./images/Homens.jpg" alt="Homens"></img>
                          
                       </div>
                    </div>
                </div>
             
             </div>
             </div>

             <div onClick={leaveClickImg} className={clickImgTeens? 'modal open' : 'modal'}>
                    <img src= "./images/Jovens.jpg" alt="Jovens"></img>
             </div>

             <div onClick={leaveClickImg} className={clickImgTeens2? 'modal open' : 'modal'}>
                    <img src= "./images/Jovens2.jpg" alt="Jovens"></img>
             </div>

             <div onClick={leaveClickImg} className={clickImgKids? 'modal open' : 'modal'}>
                    <img src= "./images/Crianças.jpg" alt="Crianças"></img>
             </div>

             
             <div onClick={leaveClickImg} className={clickImgWomens? 'modal open' : 'modal'}>
                    <img src= "./images/Mulheres.jpg" alt="Mulheres"></img>
             </div>

             <div onClick={leaveClickImg} className={clickImgMens? 'modal open' : 'modal'}>
                    <img src= "./images/Homens.jpg" alt="Homens"></img>
             </div>
            </div>
            </div>

            <Footer />
        </>
    )
}
