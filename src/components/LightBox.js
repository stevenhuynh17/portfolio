import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('root')

class LightBox extends Component {
  componentDidMount() {
    console.log(this.props.projects)
    window.addEventListener("keydown", this.handleKeyPress)

    this.setState({
      current: this.props.projects[this.props.index],
      index: this.props.index
    })

  }

  state = {
    current: this.props.projects[this.props.index],
    index: this.props.index
  }

  handleKeyPress = (event) => {
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        this.updateModal(event, -1)
        break
      case "Right":
      case "ArrowRight":
        this.updateModal(event, 1)
        break
      case "Esc":
      case "Escape":
        this.props.handleClick()
        window.removeEventListener("keydown", this.handleKeyPress)
        break;
      default:
    }
    event.preventDefault()
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

  exit = () => {
    this.props.handleClick()
    window.removeEventListener("keydown", this.handleKeyPress)
  }

  render() {
    console.log(this.state.current)
    return ReactDOM.createPortal(
      <div className="modal ">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{this.state.current.name}</h5>
              <button type="button" className="close" onClick={this.exit} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body row">
              <img className="img-fluid project-img col-6" src={require("../" + this.state.current.img)} alt=""/>
              <div className="col">
                {this.state.current.description.map((info) => {
                  return(
                    <p>{info}</p>
                  )
                })}
              </div>
              <div className="">
                {this.state.current.badges.map((badge) => {
                  return(
                    <span class="badge badge-info">{badge}</span>
                  )
                })}
              </div>
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
