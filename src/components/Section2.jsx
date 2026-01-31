import "./Section2.css"
import tw from "../assets/tw.png"
import yu from "../assets/yu.png"


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
     <div className="s2-bg2-card">
       <div className="bg2">
        <h1>приглашаем <br /> <span>к сотрудничеству!</span></h1>
        <p>Если вы дизайнер интерьера, архитектор <br /> или дилер, то для вас специальные условия. </p>
        <br /> 
        <p>Оставляйте заявку и мы вам <br /> подробно расскажем по телефону.</p>

        <div className="s2-inp">
          <input type="text" placeholder="Анастасия" />
          <input type="text" placeholder="   +7 (999) 999 99-99" />
          <button>Оставить заявку</button>
        </div>

        <p>Нажимая на кнопку “Оставить заявку”, вы соглашаетесь с Политикой конфиденциальности данных</p>
      </div>
     </div>
    </div>





    <div className="S2-text-img-card">
     <div className="S2-mini">
       <div className="s2-text-btn">
        <h1>работаем <br /> <span>по всей россии</span></h1>

        <div className="btn-card">
          <p>Выберите <br />
           интересующий <br />
           шоурум:</p>

           <button className="btn1-s2">Москва</button>
           <button className="btn2-s2">Санкт-Петербург</button>
        </div>
      </div>
      <div className="s2-img-text">
        <div className="s2img"></div>
        <div className="s2text">
          <h4>Москва <br />ул. Тимирязевская, д. 1, стр. 2</h4>
          <h4>+7 (929) 590 82-87</h4>
          <h4>we@ambarwood.ru</h4>
          <p>По вопросам сотрудничества</p> <br />
          <h4>Подписывайте на наши соц.сети:</h4>
          <div className="twyu">
            <div className="imgs1">
            <img src={tw} alt="" />
            </div>
            <div className="imgs2">
            <img src={yu} alt="" />
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Section2