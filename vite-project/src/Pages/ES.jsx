import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const EmployabilitySkills = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>Employability Skills</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">Employability Skills 1</option>
          <option value="2">Employability Skills 2</option>
          <option value="3">Employability Skills 3</option>
          <option value="4">Employability Skills 4</option>
          <option value="5">Employability Skills 5</option>
          <option value="6">Employability Skills 6</option>
          <option value="7">Employability Skills 7</option>
          <option value="8">Employability Skills 8</option>
          

        </select>

        <MainQuiz value={select} name="es" />
      </div>
      <Footer/>
    </>
  )
}

export default EmployabilitySkills