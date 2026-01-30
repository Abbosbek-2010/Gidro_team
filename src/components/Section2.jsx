import "./Section2.css"

const Section2 = () => {
  return (
    <>
    <div className="s2-text-img">
      <div className="s2-text">
        <h1>СМОТРИТЕ НАС <br /> <span> HA YOUTUBE</span></h1>
        <button>Перейти в канал</button>
      </div>
      <div className="s2-img">
        <div className="img-s2">
        <button>▶</button>
        </div>
      </div>
    </div>



    <div className="s2-bg2">
      <div className="bg2">
        <h1>приглашаем <br /> <span>к сотрудничеству!</span></h1>
        <p>Если вы дизайнер интерьера, архитектор <br /> или дилер, то для вас специальные условия. </p>
        <br /> 
        <p>Оставляйте заявку и мы вам <br />  подробно расскажем по телефону.</p>

        <div className="s2-inp">
          <input type="text" placeholder="Анастасия" />
          <input type="text" placeholder="   +7 (999) 999 99-99" />
          <button>Оставить заявку</button>
        </div>

        <p>Нажимая на кнопку “Оставить заявку”, вы соглашаетесь с Политикой конфиденциальности данных</p>
      </div>
    </div>
    </>
  )
}

export default Section2