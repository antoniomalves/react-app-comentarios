import React, {Component} from 'react'

class NewComment extends Component{
  render(){
    return(
      <div className="row">
        <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Comente!"></textarea>
      </div>
    )
  }
}

export default NewComment