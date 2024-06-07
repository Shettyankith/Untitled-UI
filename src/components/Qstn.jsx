import React, { useCallback, useState } from 'react'
import "./Qstn.css"

function Qstn({question,answer}) {
    const [more,setmore]=useState(false);
    const update=()=>{
        setmore(!more);
    }
  return (
    <div className='qstn_box'>
        <div>
            <h5>{question}</h5>
            <i onClick={update} className={!more?"fa-solid fa-circle-plus":"fa-solid fa-circle-minus"}></i>
        </div>
        { more && <p>{answer}</p>}
    </div>
  )
}

export default Qstn