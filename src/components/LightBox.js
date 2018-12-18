import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('root')

class LightBox extends Component {
  componentDidMount() {
    console.log(this.props.projects)
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "Escape":
          this.props.handleClick()
          // window.removeEventListener()
          break;
        default:
      }
    }, {once:true})

    this.setState({
      current: this.props.projects[this.props.index],
      index: this.props.index
    })

  }

  state = {
    current: "",
    index: ""
  }

  updateModal = (event, update) => {
    let new_index = this.state.index + update
    console.log(new_index)
    if(new_index < 0) {
      new_index += this.props.projects.length
      console.log(new_index)
    } else if (new_index >= this.props.projects.length) {
      new_index -= this.props.projects.length
      console.log(new_index)
    }
    this.setState({
      current: this.props.projects[new_index],
      index: new_index
    })
  }

  render() {
    console.log(this.state.current)
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{this.state.current.name}</h5>
              <button type="button" className="close" onClick={this.props.handleClick} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={(e) => this.updateModal(e, -1)}>Prev</button>
              <button type="button" className="btn btn-secondary" onClick={(e) => this.updateModal(e, 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>,
    modalRoot
    )
  }
}

export default LightBox
