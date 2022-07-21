import React, { useEffect, useState } from 'react'

const MainQuiz = (props) => {
    const [data, setData] = useState(null);
    const [select, getSelect] = useState();
  useEffect(() => {
    setData(null);
    fetch(`https://quizstcapi.herokuapp.com/${props.name}/${props.value}`)
      .then((res) => res.json())
      .then(setData);
  }, [props.value, props.name]);
  


  

  if (!data) return <>Loading...</>;
  return (
    <div>
        {/* <h4>  {props.name} {props.value} </h4> */}
        {/* <h4> {url} </h4> */}
        {data.map((item,i)  => (
            <>
            
            <h3> Q.{i+1} {item.Question} </h3>
            <img src={item.image} width={200} alt="" /> <br />
            <button className='btnSize1 btn btn-primary'> {item.Option1} </button> <br />
            <button className='btnSize1 btn btn-primary'> {item.Option2} </button> <br />
            <button className='btnSize1 btn btn-primary'> {item.Option3} </button> <br />
            <button className='btnSize1 btn btn-primary'> {item.Option4} </button> <br />
            <h5 className='text-success'> Answer is :- {item.Answer} </h5>
            <hr />
            <br />
                    
            
            
            </>
        ))}
        
    </div>
  )
}

export default MainQuiz