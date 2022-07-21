import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const Electrician = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>Electrician</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">Electrician 1</option>
          <option value="2">Electrician 2</option>
          <option value="3">Electrician 3</option>
          <option value="4">Electrician 4</option>
          <option value="5">Electrician 5</option>
          <option value="6">Electrician 6</option>
          <option value="7">Electrician 7</option>
          <option value="8">Electrician 8</option>
          <option value="9">Electrician 9</option>
          <option value="10">Electrician 10</option>
          <option value="11">Electrician 11</option>
          <option value="12">Electrician 12</option>
          <option value="13">Electrician 13</option>
          <option value="14">Electrician 14</option>
          <option value="15">Electrician 15</option>
          <option value="16">Electrician 16</option>
          <option value="17">Electrician 17</option>
          <option value="18">Electrician 18</option>
          <option value="19">Electrician 19</option>
          <option value="20">Electrician 20</option>
          <option value="21">Electrician 21</option>
          <option value="22">Electrician 22</option>
          <option value="23">Electrician 23</option>
          <option value="24">Electrician 24</option>
          

        </select>

        <MainQuiz value={select} name="electrician" />
      </div>
      <Footer/>
    </>
  )
}

export default Electrician