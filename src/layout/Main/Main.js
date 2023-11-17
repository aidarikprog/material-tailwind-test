import mainPic from '../../assets/images/mainpic.svg'
import Numbers from './Numbers'
const Main = () => {
  return (
    <>
      <div className="bg-[#F7F6FF] mb-[70px]">
        <div className="container max-w-[1190px] flex justify-between py-[90px]">
          <div>
            <div className="mb-4">
              <h1 className="text-[45px] font-extrabold leading-[65px]">
                Студия дизайна
              </h1>
              <h1 className="text-[55px] font-medium leading-[65px] uppercase">
                полного цикла
              </h1>
            </div>
            <p className="mb-7 font-semibold leading-6">
              От дизайна визиток до дизайна сайтов
            </p>
            <div className="space-x-[10px]">
              <button className="py-[14px] px-5 bg-[#77B2D3] rounded-[250px] text-white font-semibold">
                Комплексные решения
              </button>
              <button className="py-[14px] px-5 bg-[#77B2D3] rounded-[250px] text-white font-semibold">
                Логотипы
              </button>
              <button className="py-[14px] px-5 bg-[#77B2D3] rounded-[250px] text-white font-semibold">
                Дизайн
              </button>
            </div>
          </div>
          <div>
            <img src={mainPic} alt="pic" />
          </div>
        </div>
        <Numbers />
      </div>
    </>
  )
}

export default Main
