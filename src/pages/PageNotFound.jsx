import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate()
  return (
    <div className='page-404'>
      <div className="container text-center ">
            
            <img src="/3828537.jpg" alt="FreshNest"/>

            <button onClick={()=> navigate("/")}>Back To Home</button>
      </div>
    </div>
  )
}

export default PageNotFound
