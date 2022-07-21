import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const Turner = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>Turner</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">Turner 1</option>
          <option value="2">Turner 2</option>
          <option value="3">Turner 3</option>
          <option value="4">Turner 4</option>
          <option value="5">Turner 5</option>
          <option value="6">Turner 6</option>
          <option value="7">Turner 7</option>
          <option value="8">Turner 8</option>
          <option value="9">Turner 9</option>
          <option value="10">Turner 10</option>
          <option value="11">Turner 11</option>
          <option value="12">Turner 12</option>
          <option value="13">Turner 13</option>
          <option value="14">Turner 14</option>
          <option value="15">Turner 15</option>
          <option value="16">Turner 16</option>
          <option value="17">Turner 17</option>
          <option value="18">Turner 18</option>
          <option value="19">Turner 19</option>
          <option value="20">Turner 20</option>
          <option value="21">Turner 21</option>
          <option value="22">Turner 22</option>
          <option value="23">Turner 23</option>
          <option value="24">Turner 24</option>
          <option value="25">Turner 25</option>
          <option value="26">Turner 26</option>
          <option value="27">Turner 27</option>
          <option value="28">Turner 28</option>
          <option value="29">Turner 29</option>
          <option value="30">Turner 30</option>
          <option value="31">Turner 31</option>
          <option value="32">Turner 32</option>
          <option value="33">Turner 33</option>
          <option value="34">Turner 34</option>
          <option value="35">Turner 35</option>
          <option value="36">Turner 36</option>
          <option value="37">Turner 37</option>
          <option value="38">Turner 38</option>
          <option value="39">Turner 39</option>

        </select>

        <MainQuiz value={select} name="turner" />
      </div>
      <Footer/>
    </>
  )
}

export default Turner