import React from 'react'
import './Portfolio.css'
import Photo from '../../assets/portfolio1.jpg'
import PortHead from './PortHead'

const Data =[
  {
    id:'1',
    image: Photo,
    title:'UI of What is Chat GPT-3',
    github:'https://github.com/AnmolTripathii',
    demo:'https://github.com/AnmolTripathii'

  },
  {
    id:'2',
    image: Photo,
    title:'UI of What is Chat GPT-3',
    github:'https://github.com/AnmolTripathii',
    demo:'https://github.com/AnmolTripathii'

  },
  {
    id:'3',
    image: Photo,
    title:'UI of What is Chat GPT-3',
    github:'https://github.com/AnmolTripathii',
    demo:'https://github.com/AnmolTripathii'

  },
  {
    id:'4',
    image: Photo,
    title:'UI of What is Chat GPT-3',
    github:'https://github.com/AnmolTripathii',
    demo:'https://github.com/AnmolTripathii'

  }
]
function Portfolio() {
  return (
      <section id='portfolio'>
        <PortHead/>
        <div className="container portfolio_container">
          {
            Data.map(({id,image,title,github,demo})=>{
              return(
                <article key={id} className='Portfolio_item' >
            <div className='Portfolio_item_img'><img src={image} alt="image" /></div>
            <h3 className='title'>{title}</h3>
            <div className="cta1">
            <a href={github} className='btn_port' target='_blank'>Github</a>
            <a href={demo} className='btn_port btn_primaryport'target='_blank'>Live Link</a>
            </div>
          </article>  
              )
            })
          }
        </div>
      </section>
  )
}

export default Portfolio
