import React from 'react'

const InnerPageHead = ({heading}) => {
  return (
    <div>
      <div className="inner-hero">
        <div className="container">
            <div className="inner-hero-text">
                <h2>{heading}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InnerPageHead
