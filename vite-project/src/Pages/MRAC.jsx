import React, { useState } from 'react'
import Header from '../Components/Header'
import MainQuiz from '../Components/MainQuiz'
import Footer from '../Components/Footer'

const MRAC = () => {

  const [select, setSelect] = useState(1);

  return (
    <>
      <Header />
      <div className='text-center fs-3 text-uppercase'>MRAC</div>
      <div className="container p-5">
        <select className="form-select" aria-label="Default select example" value={select} onChange={e => setSelect(e.target.value)}>
          <option selected>Select The Quiz</option>
          <option value="1">MRAC 1</option>
          <option value="2">MRAC 2</option>
          <option value="3">MRAC 3</option>
          <option value="4">MRAC 4</option>
          <option value="5">MRAC 5</option>
          <option value="6">MRAC 6</option>
          <option value="7">MRAC 7</option>
          <option value="8">MRAC 8</option>
          <option value="9">MRAC 9</option>
          <option value="10">MRAC 10</option>
          <option value="11">MRAC 11</option>
          <option value="12">MRAC 12</option>
          <option value="13">MRAC 13</option>
          <option value="14">MRAC 14</option>
          <option value="15">MRAC 15</option>
          <option value="16">MRAC 16</option>
          <option value="17">MRAC 17</option>
          <option value="18">MRAC 18</option>
          <option value="19">MRAC 19</option>
          <option value="20">MRAC 20</option>
          <option value="21">MRAC 21</option>
          <option value="22">MRAC 22</option>
          <option value="23">MRAC 23</option>
          <option value="24">MRAC 24</option>
          <option value="25">MRAC 25</option>
          <option value="26">MRAC 26</option>
          <option value="27">MRAC 27</option>
          <option value="28">MRAC 28</option>
          <option value="29">MRAC 29</option>
          <option value="30">MRAC 30</option>
          <option value="31">MRAC 31</option>
          <option value="32">MRAC 32</option>
          <option value="33">MRAC 33</option>
          <option value="34">MRAC 34</option>
          <option value="35">MRAC 35</option>
          <option value="36">MRAC 36</option>
          <option value="37">MRAC 37</option>
          <option value="38">MRAC 38</option>
          <option value="39">MRAC 39</option>

        </select>

        <MainQuiz value={select} name="mrac" />
      </div>
      <Footer/>
    </>
  )
}

export default MRAC