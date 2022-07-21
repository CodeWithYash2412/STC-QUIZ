import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const DieselMechanic = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>Diesel Mechanic</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">Diesel Mechanic 1</option>
          <option value="2">Diesel Mechanic 2</option>
          <option value="3">Diesel Mechanic 3</option>
          <option value="4">Diesel Mechanic 4</option>
          <option value="5">Diesel Mechanic 5</option>
          <option value="6">Diesel Mechanic 6</option>
          <option value="7">Diesel Mechanic 7</option>
          <option value="8">Diesel Mechanic 8</option>
          <option value="9">Diesel Mechanic 9</option>
          <option value="10">Diesel Mechanic 10</option>
          

        </select>

        <MainQuiz value={select} name="md" />
      </div>
      <Footer/>
    </>
  )
}

export default DieselMechanic;