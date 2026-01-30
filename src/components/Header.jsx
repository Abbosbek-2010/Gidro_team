import React from 'react'
import './Header.css'
import M from "../assets/M.png"
import M2 from "../assets/M2.png"
import M3 from "../assets/M3.png"

const Header = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li><h2>AMBAR<br />WOOD</h2></li>
            <li><a>Каталог</a></li>
            <li><a>Об амбарной доске</a></li>
            <li><a>Наши работы</a></li>
            <li><a>О нас</a></li>
            <li><a>Блог</a></li>
            <li><a>Контакты</a></li>
            <div>
              <li><a>+7 (929) 590 82-87</a></li>
              <p className='pen'>Москва и Санкт-Петербург</p>
            </div>
            <button className='btn'>Консультация</button>
          </ul>
        </nav>
      </div>

      <div className='spal'>
        <div className="text">
          <h1>Качественные <br /> <span>амбарные доски</span> <br /> от производителя</h1>
          <div className='M'>
            <div>
              <img src={M} alt="" />
              <p>Быстрая доставка <br /> по РФ</p>
            </div>
            <div>
              <img src={M2} alt="" />
              <p>Все оттенки <br /> в наличии</p>
            </div>
            <div>
              <img src={M3} alt="" />
              <p>Шоурумы <br />в Москве и Спб</p>
            </div>
          </div>

          <div className="but">
            <button className='btn'>Перейти в каталог</button>
          <button className='btn btn2'>Рассчитать стоимость</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header