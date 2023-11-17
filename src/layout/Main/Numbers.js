const Numbers = () => {
  return (
    <>
      <div className="container max-w-[1190px] bg-white rounded-2xl shadow-2xl">
        <div className="p-[40px]">
          <h1 className="text-[38px] leading-12 uppercase font-bold ">
            Мы знаем толк в дизайне!
          </h1>
          <ul className="flex justify-between mt-[35px] ">
            <div className="border-r-[1px] border-[#C7C7C7] h-[86px] border-solid pr-[60px]">
              <h1 className="mb-1 text-[#F32C6D] text-[50px] font-extrabold leading-10">
                6 лет
              </h1>
              <p className="leading-6 font-medium">В сфере рекламы</p>
            </div>
            <div className="border-r-[1px] border-[#C7C7C7] h-[86px] border-solid pr-[60px]">
              <h1 className=" mb-1 text-[#F32C6D] text-[50px] font-extrabold leading-10">
                более 100
              </h1>
              <p className="leading-6 font-medium">Наших постоянных клиентов</p>
            </div>
            <li className="border-r-[1px] border-[#C7C7C7] h-[86px] border-solid pr-[60px]">
              <h1 className="mb-1 text-[#F32C6D] text-[50px] font-extrabold leading-10">
                +20%
              </h1>
              <p className="leading-6 font-medium">Конверсия продаж</p>
            </li>
            <li>
              <h1 className="mb-1 text-[#F32C6D] text-[50px] font-extrabold leading-10">
                -70%
              </h1>
              <p className="leading-6 font-medium">Ошибок менеджеров</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Numbers
