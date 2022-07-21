
import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const CNCVMC = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>CNC & VMC</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">CNC & VMC 1</option>
          <option value="2">CNC & VMC 2</option>
          <option value="3">CNC & VMC 3</option>
          <option value="4">CNC & VMC 4</option>
          <option value="5">CNC & VMC 5</option>
          <option value="6">CNC & VMC 6</option>
          <option value="7">CNC & VMC 7</option>
          <option value="8">CNC & VMC 8</option>
          <option value="9">CNC & VMC 9</option>
          <option value="10">CNC & VMC 10</option>
          <option value="11">CNC & VMC 11</option>
          <option value="12">CNC & VMC 12</option>
          <option value="13">CNC & VMC 13</option>
          <option value="14">CNC & VMC 14</option>
          

        </select>

        <MainQuiz value={select} name="cv" />
      </div>
      <Footer/>
    </>
  )
}

export default CNCVMC

