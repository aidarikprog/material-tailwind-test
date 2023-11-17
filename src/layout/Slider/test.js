import { logos } from './sloder.data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Test = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="bg-[#575375]">
        <div className="container max-w-[1200px]">
          <h1 className="mb-10 text-[38px] font-bold uppercase leading-12">
            Наши работы
          </h1>
          <Slider {...settings} >
            {logos.map((data, id) => (
              <div
                className=" w-[570px] mb-12 rounded-2xl bg-white mr-10"
                key={id}
                style={{ boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.08)' }
                }
              >
                {/* <div className="pl-7 pt-2 pb-6  "> */}
                <div className="pl-7  h-[227px]  ">
                  <img src={data.mainLogo} alt="/" className="mb-1 " />
                  <p className="font-normal leading-[26px] pb-6 ">
                    {data.descr}
                  </p>
                </div>
                <div className="py-5 pl-[28px] bg-[#F3F1FE] ">
                  <h2 className="text-[18px] font-extrabold leading-6 mb-[10px]">
                    Результат:
                  </h2>
                  <div className="flex space-x-[34px] ">
                    <div className="max-w-[185px]">
                      <h1 className="text-[18px] font-extrabold leading-6">
                        {data.adv}
                      </h1>
                      <p className="leading-[26px] ">
                        увеличение количества обращений с рекламы
                      </p>
                    </div>
                    <div className="max-w-[94px]">
                      <h1 className="text-[18px] font-extrabold leading-6">
                        {data.adv}
                      </h1>
                      <p className="leading-[26px] ">увеличение конверсии</p>
                    </div>
                    <div className="max-w-[161px]">
                      <h1 className="text-[18px] font-extrabold leading-6">
                        {data.adv}
                      </h1>
                      <p className="leading-[26px] ">
                        снижение стоимости за обращение
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-5 pl-[28px]">
                  <h1 className="text-[18px] font-extrabold leading-[26px] uppercase mb-3">
                    Системы:
                  </h1>
                  <div className="flex space-x-4">
                    <img src={data.syst1} alt="/" />
                    <img src={data.syst2} alt="/" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

/* logos.map((data, id) => (
  <div
    className=" w-[570px] mb-12 rounded-2xl bg-white"
    key={id}
    style={{ boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.08)' }}
  >
    <div className="pl-7 pt-2 pb-6 ">
      <img src={data.mainLogo} alt="/" className="mb-1" />
      <p className="font-normal leading-[26px] ">{data.descr}</p>
    </div>
    <div className="py-5 pl-[28px] bg-[#F3F1FE] ">
      <h2 className="text-[18px] font-extrabold leading-6 mb-[10px]">
        Результат:
      </h2>
      <div className="flex space-x-[34px] ">
        <div className="max-w-[185px]">
          <h1 className="text-[18px] font-extrabold leading-6">{data.adv}</h1>
          <p className="leading-[26px] ">
            увеличение количества обращений с рекламы
          </p>
        </div>
        <div className="max-w-[94px]">
          <h1 className="text-[18px] font-extrabold leading-6">{data.adv}</h1>
          <p className="leading-[26px] ">увеличение конверсии</p>
        </div>
        <div className="max-w-[161px]">
          <h1 className="text-[18px] font-extrabold leading-6">{data.adv}</h1>
          <p className="leading-[26px] ">снижение стоимости за обращение</p>
        </div>
      </div>
    </div>
    <div className="py-5 pl-[28px]">
      <h1>Системы:</h1>
      <div className="flex space-x-4">
        <img src={data.syst1} alt="/" />
        <img src={data.syst2} alt="/" />
      </div>
    </div>
  </div>
)) */

export default Test
