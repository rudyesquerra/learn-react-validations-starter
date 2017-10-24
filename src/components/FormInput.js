import React, { Component } from 'react';

export default class FormInput extends Component {
  constructor(props){
    super(props)
    this.state={
      type:'password' || 'text'
    }
  }
  render(){
    return(
      <div>
        <div className='form-group'>
          <label
            htmlFor={this.props.name}
            className='control-label'
          >
            {this.props.label}
          </label>
          <input
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            className='form-control'
          />
          {this.props.errors &&
            <div className='help-block'>{this.props.errors}</div>
          }
        </div>
      </div>
    )
  }
}
