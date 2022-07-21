import React from 'react'
import ebook from '../Untitled design/undraw_notebook_re_id0r.svg'


const Material = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-10 col-md-6 d-flex justify-content-center align-items-center flex-column p-3">
                <img src={ebook} width="100%" alt="" />
            </div>
            <div className=' col-sm-10 col-md-6 d-flex justify-content-center align-items-center flex-column'>
                <h2>Different type of materials available for Instructor and Students</h2>
                <a className='btn btn-outline-primary btnSize mb-3' target='_blank' href='https://talimrojgar.gujarat.gov.in/2014/Talimrojgar.aspx?t=Object_Master&c=Object_Id&i=283&ti=Object_Name&h=Training%20Material#.Ytl3V6hN00G'>SI Material</a>
                {/* <button className='btn btn-outline-primary mb-3 btnSize'>SI Material</button> */}
                {/* <button className='btn btn-primary btnSize'>Student Material</button> */}
                <a className='btn btn-primary btnSize' target='_blank' href='https://talimrojgar.gujarat.gov.in/2014/Talimrojgar.aspx?t=Object_Master&c=Object_Id&i=285&ti=Object_Name&h=ITI%20Virtual%20Classroom#.Ytl3Z6hN00E'>Student Material</a>                
            </div>
        </div>

    </div>
  )
}

export default Material