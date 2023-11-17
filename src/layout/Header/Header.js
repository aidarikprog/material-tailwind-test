import { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import Modals from '../ModalWindow/Modal'

const Header = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="container max-w-[1190px]   ">
        <div className=" flex justify-between py-2 ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex justify-between items-center space-x-[40px]">
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Наши работы</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <button
            href="#"
            className="text-white py-[14px] px-[42px] rounded-lg bg-[#F32C6D]"
            onClick={()=>setOpenModal(!openModal)}
          >
            Заказать
          </button>
        </div>
      <Modals openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </>
  )
}

export default Header
