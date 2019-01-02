import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('root')

class LightBox extends Component {
  constructor(props) {
    super(props)
    this.setWrapperRef = React.createRef()
    this.state = {
      current: this.props.projects[this.props.index],
      index: this.props.index
    }
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress)
    window.addEventListener("mousedown", this.handleClickOutside)

    this.setState({
      current: this.props.projects[this.props.index],
      index: this.props.index
    })

  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress)
    window.removeEventListener("mousedown", this.handleClickOutside)
  }



  setWrapperRef(node) {
    console.log("INSIDE", this.setWrapperRef.current)
    this.setWrapperRef = node
  }

  handleClickOutside = (event) => {
    console.log(this.setWrapperRef.current)
    console.log(event.target)
    if (this.setWrapperRef.current && !this.setWrapperRef.current.contains(event.target)) {
      this.props.handleClick()
    }
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

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content" ref={this.setWrapperRef}>
            <div className="container-fluid">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{this.state.current.name}</h5>
                <button type="button" className="close" onClick={this.props.handleClick} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-7">
                    <img className="img-fluid rounded modal-img" src={require("../" + this.state.current.img)} alt=""/>
                  </div>
                  <div className="col-sm-5">
                    <div className="col">
                      {this.state.current.description.map((info, index) => {
                        return(
                          <p key={index}>{info}</p>
                        )
                      })}
                    </div>
                    <div className="col">
                      {this.state.current.badges.map((badge) => {
                        return(
                          <span className="badge badge-info mx-1" key={badge}>{badge}</span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="modal-footer">
              <a href={this.state.current.github} target="_blank" rel="noopener noreferrer" className="mx-4 github">
                <i className="fab fa-github fa-2x"></i>
              </a>
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
