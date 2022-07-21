import React from 'react'
import logo from '../images/My Post.jpg'

const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-dark p-3">
            <div className='container bg-dark d-flex justify-content-center align-items-center flex-column text-white p-3'>
                <h3 className='fontMain'>Suryakant Technological Center</h3>
                <h4 className='fontSubMain'>ITI STC QUIZ</h4>
                <p className='fontPara'>All in one Web-App for ITI mcq's and materials</p>                
            </div>
            <div className='container bg-dark d-flex justify-content-center align-items-center flex-column text-white p-1'>
                <img src={logo} width={100} height={100} className="rounded" alt="" />

            </div>

        </div>
    </>
  )
}

export default Footer