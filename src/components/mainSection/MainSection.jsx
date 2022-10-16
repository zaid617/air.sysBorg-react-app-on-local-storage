import React from 'react'
import moment from 'moment';
import "./mainSection.css"

export default function MainSection(props) {

  return (
    <div className='mainSection'>
      <div className="box1">
        <div><strong >192.168.100</strong></div>
        <div>{moment(props.date).fromNow()}</div>
        <div ><input className='red' readOnly type="text" value={"Delete"} /></div>
      </div>

      <div className="box2">
        <p>{props.text}</p>
      </div>
    </div>
  )
}
