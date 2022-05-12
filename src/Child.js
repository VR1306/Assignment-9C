import React, { Component } from 'react'

export class Child extends Component {
    state={
        show:false
    }
    handleshow=()=>{this.setState({show:!this.state.show})}
  render() {
    return (
      <div className='c'>

    <div> <h3>  {this.props.title}<button className='d' onClick={this.handleshow}>{this.state.show?'-':'+'}</button></h3>
       {
           this.state.show&&<div className='e'>
               {this.props.info}
           </div>
       }
       </div>
      </div>
    )
  }
}

export default Child