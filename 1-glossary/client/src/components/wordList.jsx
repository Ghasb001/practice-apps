import React, { Component} from "react";
import Word from "./word.jsx";

const WordList = function(props) {
  //console.log(props)
return (
  <div>
  {props.list.map(gloss =>
      <Word word={gloss.word} definition={gloss.definition} key={gloss._id} />
    ) }
  </div>
)
  }

export default WordList;