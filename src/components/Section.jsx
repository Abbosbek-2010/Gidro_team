import React from 'react'
import "./Section.css"
import A1 from "../assets/A1.png"
import A2 from "../assets/A2.png"
import A3 from "../assets/A3.png"
import A4 from "../assets/A4.png"
import A5 from "../assets/A5.png"
import A6 from "../assets/A6.png"
import A7 from "../assets/A7.png"
import A8 from "../assets/A8.png"
import A9 from "../assets/A9.png"

const Section = () => {
  return (
    <div>
      <div className="matn">
        <h1>Категории <br /> <span>Категории </span></h1>
        <button>Все товары</button>
      </div>

      <div className='add'>
        <div>
          <img src={A1} alt="" />
        </div>

        <div>
          <div className='add2'>
            <img src={A2} alt="" />
            <img src={A3} alt="" />
          </div>
          <div className='a4'><img src={A4} alt="" /></div>
        </div>
      </div>


      <div className="add_two">


        <div>
          <div className='class'>
            <img src={A5} alt="" />
            <img src={A6} alt="" />
          </div>
          <div className='class class2'>
            <img src={A7} alt="" />
            <img src={A8} alt="" />
          </div>
        </div>

        
        <div>
          <img src={A9} alt="" />
        </div>


      </div>


      <div className="Sone">
        <h1>есть вопросы? <br /> <span>с радостью ответим на них!</span></h1>

        <div className="in">
        <input type="text" placeholder='Анастасия'/>
        <input type="text" placeholder='+7 (999) 999 99-99'/>
        <button>Оставить заявку</button>
        <div className='os'>
          <p>Оставьте заявку или <br /> позвоните нам по номеру:</p>
        <p>+7 (929) 590 82-87</p>
        </div>
      </div>
      </div>


      <div className="rel">
        <div className='rel_div'>
          <h1>реализовали <br /> <span>более 500 проектов</span></h1>
          <div className='btn_div'>
            <button>Бесплатный замер</button>
          <button>Все проекты</button>
          <p>Подробнее</p>
          </div>
        </div>


        <div className="back">
          <div className='back1'>
            <div className="divv">
              <h2>Квартира в Санкт-Петербурге</h2>
            <p>Подробнее ↗</p>
            </div>
          </div>
          <div className='back2'>
            <div className="divv">
              <h2>Оформление стены</h2>
            <p>Подробнее ↗</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Section