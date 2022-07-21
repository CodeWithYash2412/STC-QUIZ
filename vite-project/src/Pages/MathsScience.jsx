import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const MathsScience = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>Maths & Science</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">Maths & Science 1</option>
          <option value="2">Maths & Science 2</option>
          <option value="3">Maths & Science 3</option>
          <option value="4">Maths & Science 4</option>
          <option value="5">Maths & Science 5</option>
          <option value="6">Maths & Science 6</option>
          <option value="7">Maths & Science 7</option>
          <option value="8">Maths & Science 8</option>
          <option value="9">Maths & Science 9</option>
          <option value="10">Maths & Science 10</option>
          <option value="11">Maths & Science 11</option>
          <option value="12">Maths & Science 12</option>
          <option value="13">Maths & Science 13</option>
          <option value="14">Maths & Science 14</option>
          <option value="15">Maths & Science 15</option>
          <option value="16">Maths & Science 16</option>
          <option value="17">Maths & Science 17</option>
          <option value="18">Maths & Science 18</option>
          <option value="19">Maths & Science 19</option>
          <option value="20">Maths & Science 20</option>
          

        </select>

        <MainQuiz value={select} name="m_s" />
      </div>
      <Footer/>
    </>
  )
}

export default MathsScience