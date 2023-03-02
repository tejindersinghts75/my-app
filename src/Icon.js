import React from 'react';
function Basic(props)
{
  return(
    <>
      <div className="container">
        <div className="firstbox"><img src={props.img} alt="" /></div>
        <div className="secondname">singh</div>

      </div>
    </>
  )
}
export default Basic;