import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-info-container">
          <section className="igreja-info">
             <div className="wpp-info-church">
            
            <span> <strong>Contato para mais informações: </strong> <i class="fab fa-whatsapp"></i> 98452-1040</span>
             </div>
          </section>

          <section className="developer-info">
              <div className="wpp-info-dev">
              <strong>Contato do desenvolvedor: </strong> <i class="fab fa-whatsapp"></i> 96716-3455
              </div>
          </section>

          </div>

          <div className="IEQ">
          <h1>IEQ Nova Sepetiba</h1>
          <h2>Ano da Superação</h2>
          </div>
         
            
        </div>
    )
}
