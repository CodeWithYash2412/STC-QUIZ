import React from 'react'
import turner from '../images/turner.jpg'
import mrac from '../images/mrac.png'
import maths from '../images/maths.png'
import fitter from '../images/fitter.jpg'
import es from '../images/es.jpg'
import electrician from '../images/electrician.jpg'
import dm from '../images/Diesel Mechanic.jpg'
import copa from '../images/copa.jpg'
import cnc from  '../images/CNC.jpg'
import { Link } from 'react-router-dom'



const CoursesCovered = () => {

    return (

        <>
            <h2 className='text-center m-3'>Total Course Covered</h2>
            <hr className=' ms-5 me-5 border border-3 border-primary bg-primary'/>
            <div className="container">
                <div className="row m-3">
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={turner}  width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">Turner</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/turner' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={fitter} width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">Fitter</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/fitter' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={electrician} width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">Electrician</h4>
                                {/* <button className='btn btn-primary btn-sm '>Go To Quiz</button> */}
                                <Link to='/electrician' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={cnc}  width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">CNC & VMC</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/cncvmc' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={mrac} width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">MRAC</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/mrac' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={dm} width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">Diesel Mechanic</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/diselmechanical' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={es}  width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">Employability Skills</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/es' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={maths} width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">Maths & Science</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/mathsscience' className='btn btn-primary btn-sm'>Go to Quiz</Link>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm d-flex justify-content-center align-items-center flex-column p-2">
                            <img src={copa} width="60%" height={150} alt="" />
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <h4 class=" card-title text-center">COPA</h4>
                                {/* <button className='btn btn-primary btn-sm'>Go To Quiz</button> */}
                                <Link to='/copa' className='btn btn-primary btn-sm'>Go to Quiz</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoursesCovered