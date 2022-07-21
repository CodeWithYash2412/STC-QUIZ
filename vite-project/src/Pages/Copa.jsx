import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const COPA = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>COPA</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">COPA 1</option>
          <option value="2">COPA 2</option>
          <option value="3">COPA 3</option>
          <option value="4">COPA 4</option>
          <option value="5">COPA 5</option>
          <option value="6">COPA 6</option>
          <option value="7">COPA 7</option>
          <option value="8">COPA 8</option>
          <option value="9">COPA 9</option>
          <option value="10">COPA 10</option>
          <option value="11">COPA 11</option>
          <option value="12">COPA 12</option>
          <option value="13">COPA 13</option>
          <option value="14">COPA 14</option>
          <option value="15">COPA 15</option>
          <option value="16">COPA 16</option>
          <option value="17">COPA 17</option>
          <option value="18">COPA 18</option>
          <option value="19">COPA 19</option>
          <option value="20">COPA 20</option>
          <option value="21">COPA 21</option>
          

        </select>

        <MainQuiz value={select} name="copa" />
      </div>
      <Footer/>
    </>
  )
}

export default COPA