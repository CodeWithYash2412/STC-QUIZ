import React from 'react'
import ebook from '../Untitled design/undraw_book_lover_re_rwjy.svg'


const Ebook = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className=' col-sm-10 col-md-6 d-flex justify-content-center align-items-center flex-column'>
                <h2>You Can Download E-Books Here</h2>
                {/* <button className='btn btn-primary mb-3 btnSize'>Theory Books</button> */}
                <a className='btn btn-primary btnSize mb-3' target='_blank' href='https://stcquiz.blogspot.com/2020/06/theory-ebooks.html?m=1'>Theory Ebooks</a>
                {/* <button className='btn btn-outline-primary btnSize'>Practical Books</button> */}
                <a className='btn btn-outline-primary btnSize' target='_blank' href='https://stcquiz.blogspot.com/2020/06/prectical-ebooks.html?m=1'>Practical Ebooks</a>
            </div>
            <div className="col-sm-10 col-md-6 d-flex justify-content-center align-items-center flex-column p-3">
                <img src={ebook} width="100%" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Ebook