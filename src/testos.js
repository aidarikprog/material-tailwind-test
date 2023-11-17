import { useState } from 'react'

const Testos = () => {
  const [count, setCount] = useState(0)
  const plus = ()=>{
    setCount(count +1)
  }
  const minus = ()=>{
    if(count == 0 ) return 
    setCount(count - 1)
  }
  
  return (
    <>
      <div onClick={plus}>+</div>
      <div>{count}</div>
      <div onClick={minus}>-</div>
    </>
  )
}

export default Testos
