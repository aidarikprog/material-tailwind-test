import { logos } from './sloder.data'
import { Carousel } from "@material-tailwind/react";



const SliderTailMat = () => {
  return (
    <>
      {/*  <div className="bg-[#F7F6FF]">
        <div className="container max-w-[1190px]">
          <h1 className="mb-10 text-[38px] font-bold uppercase leading-12">
            Наши работы
          </h1>

          {logos.map((data, id) => (
            <div
              className=" w-[570px] mb-12 rounded-2xl bg-white"
              key={id}
              style={{ boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="pl-7  h-[227px]  ">
                <img src={data.mainLogo} alt="/" className="mb-1 " />
                <p className="font-normal leading-[26px] pb-6 ">{data.descr}</p>
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
        </div>
      </div> */}
      <div className="container max-w-[1190px] flex justify-center">
        <Carousel className="rounded-xl w-[700px] ">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  )
}

logos.map((data, id) => (
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
))

export default SliderTailMat