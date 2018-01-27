import React, {Component} from 'react'

class NewComment extends Component{

  constructor(props){
    super(props)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter(event){
    if(event.which === 13){
      this.props.postNewComment({
        'comment': 'test'
      })
      event.preventDefault()
    }
  }

  render(){
    return(
      <div className="row">
        <textarea className="form-control" onKeyDown={this.handleEnter} name="" id="" cols="30" rows="10" placeholder="Comente!"></textarea>
      </div>
    )
  }
}

export default NewComment