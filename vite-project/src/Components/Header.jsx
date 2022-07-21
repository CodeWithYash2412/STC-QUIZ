import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/My Post.jpg'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <img src={logo} width={40} alt="" />
                    <Link class="navbar-brand ms-2" to="/">ITI STC QUIZ</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                           
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MCQ
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className='dropdown-item' to='/turner'>Turner</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/fitter'>Fitter</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/electrician'>Electrician</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/cncvmc'>CNC & VMC</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/mrac'>MRAC</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/diselmechanical'>Disel Mechanic</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/es'>Employability Skills</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/mathsscience'>Maths & Science</Link></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link className='dropdown-item' to='/copa'>COPA</Link></li>                                    
                                    
                                    
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Videos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className='dropdown-item' target='_blank' href='https://stcquiz.blogspot.com/2020/06/cnc-vmc-machine-training-videos-1-g.html?m=1'>CNC / VMC Videos</a></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className='dropdown-item' target='_blank' href='https://stcquiz.blogspot.com/2020/06/employability-skills-video.html?m=1'>Employability Skills Videos</a></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className='dropdown-item' target='_blank' href='https://itiharyana.gov.in/en/e-learning-of-iti-curriculum'>All Trade Videos</a></li>                                    
                                                                       
                                    
                                    
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ebooks
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className='dropdown-item' target='_blank' href='https://stcquiz.blogspot.com/2020/06/theory-ebooks.html?m=1'>Theory Ebooks</a></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className='dropdown-item' target='_blank' href='https://stcquiz.blogspot.com/2020/06/prectical-ebooks.html?m=1'>Practical Ebooks</a></li>                                    
                                                                       
                                                                       
                                    
                                    
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Materials
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className='dropdown-item' target='_blank' href='https://talimrojgar.gujarat.gov.in/2014/Talimrojgar.aspx?t=Object_Master&c=Object_Id&i=283&ti=Object_Name&h=Training%20Material#.Ytl3V6hN00G'>SI Materials</a></li>                                    
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className='dropdown-item' target='_blank' href='https://talimrojgar.gujarat.gov.in/2014/Talimrojgar.aspx?t=Object_Master&c=Object_Id&i=285&ti=Object_Name&h=ITI%20Virtual%20Classroom#.Ytl3Z6hN00E'>Student Material</a></li>                                    
                                                                       
                                                                       
                                    
                                    
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header