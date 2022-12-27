import React, { Component} from "react";

const Word = (props) => (
  <div >
    <h5> WORD </h5>
    <button type="button" onClick={() => {
          alert('Delete')
        }}>DELETE</button>
        <button type="button" onClick={() => {
          alert('edit')
        }}>EDIT</button>
  </div>
)

export default Word;