import React from 'react'
import loading from "./loading.gif";

function Spinner() {
    return (
      <div>
        <img src={loading} alt="loading" style={{margin:"50px 0"}} />
      </div>
    )
  }

export default Spinner;
