import React from 'react'


//functional stateless components

const Comment = props => 
  <p className="well well-sm">
    {props.comment.comment} <br/>
   <b>por: {props.comment.user.name}</b>
   </p>

export default Comment