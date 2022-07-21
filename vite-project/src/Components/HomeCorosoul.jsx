import React from 'react'
import logo from '../Untitled design/Phone Screenshot 1.png';


const HomeCorosoul = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row bgChange p-3 ">
                <div className="col-md-6  col-sm-10 d-flex justify-content-center align-items-center flex-column">
                    <h3>Download our mobile app</h3>
                    <button className='btn btn-danger' >Download</button>
                </div>
                <div className="col-md-6 col-sm-10 d-flex justify-content-center align-items-center">
                    <img className='shadow-lg p-3 mb-5 rounded-3' src={logo} height={500} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
 
export default HomeCorosoul