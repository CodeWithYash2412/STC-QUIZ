import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const Fitter = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>Fitter</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">Fitter 1</option>
          <option value="2">Fitter 2</option>
          <option value="3">Fitter 3</option>
          <option value="4">Fitter 4</option>
          <option value="5">Fitter 5</option>
          <option value="6">Fitter 6</option>
          <option value="7">Fitter 7</option>
          <option value="8">Fitter 8</option>
          <option value="9">Fitter 9</option>
          <option value="10">Fitter 10</option>
          <option value="11">Fitter 11</option>
          <option value="12">Fitter 12</option>
          <option value="13">Fitter 13</option>
          <option value="14">Fitter 14</option>
          <option value="15">Fitter 15</option>
          <option value="16">Fitter 16</option>
          <option value="17">Fitter 17</option>
          <option value="18">Fitter 18</option>
          <option value="19">Fitter 19</option>
          <option value="20">Fitter 20</option>
          <option value="21">Fitter 21</option>
          <option value="22">Fitter 22</option>
          <option value="23">Fitter 23</option>
          <option value="24">Fitter 24</option>
          <option value="25">Fitter 25</option>
          <option value="26">Fitter 26</option>
          <option value="27">Fitter 27</option>
          <option value="28">Fitter 28</option>
          <option value="29">Fitter 29</option>
          <option value="30">Fitter 30</option>
          <option value="31">Fitter 31</option>
          <option value="32">Fitter 32</option>
          <option value="33">Fitter 33</option>
          <option value="34">Fitter 34</option>
          <option value="35">Fitter 35</option>
          <option value="36">Fitter 36</option>
          <option value="37">Fitter 37</option>
          <option value="38">Fitter 38</option>
          <option value="39">Fitter 39</option>

        </select>

        <MainQuiz value={select} name="fitter" />
      </div>
      <Footer/>
    </>
  )
}

export default Fitter