import React from 'react'
import './Services.css'
import ServHead from './S_Head'
import { VscSymbolEvent } from "react-icons/vsc";
import { LuFileCode2 } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
function Services() {
  return (
    <div>
      <section id='services'>
        <ServHead />
        <div className="service__container container">
          <div className="card">
            <div className="serv__main">
              <h3 className="card-title">Web Development</h3>
              <div className="corner"><div className="go-arrow"><LuFileCode2 /></div></div>
            </div>
            <div className="serv_content">
              <p className="small-desc">
              I specialize in crafting visually captivating and functional user interfaces. I'm dedicated to achieving the optimal balance between form and function in every development endeavor.
              </p>
            </div>


          </div>
          <div className="card">
            <div className="serv__main">
              <h3 className="card-title">UI Designing</h3>
              <div className="corner"><div className="go-arrow"><MdDesignServices /></div></div>
            </div>
            <div className="serv_content">
              <p className="small-desc">
              My design philosophy revolves around keeping things user-friendly and visually appealing. I'm on a mission to create interfaces that not only look good but also work seamlessly for everyone.
              </p>
            </div>


          </div>
          <div className="card">
            <div className="serv__main">
              <h3 className="card-title">SEO</h3>
              <div className="corner"><div className="go-arrow"><VscSymbolEvent /></div></div>
            </div>
            <div className="serv_content">
              <p className="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                eum nihil itaque!
              </p>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
