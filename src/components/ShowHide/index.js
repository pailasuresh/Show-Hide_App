// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, second: false}

  FirstName = () => {
    const {first} = this.state
    if (first === true) {
      this.setState({first: false})
    } else {
      this.setState({first: true})
    }
  }

  LastName = () => {
    const {second} = this.state
    if (second === true) {
      this.setState({second: false})
    } else {
      this.setState({second: true})
    }
  }

  render() {
    const {first, second} = this.state

    return (
      <div className="main">
        <h1 className="heading">Show/Hide</h1>
        <div className="main-butt">
          <div className="first">
            <button type="button" onClick={this.FirstName}>
              Show/Hide Firstname
            </button>
            {first && (
              <div className="names">
                <p>Suresh</p>
              </div>
            )}
          </div>
          <div className="last">
            <button type="button" onClick={this.LastName}>
              Show/Hide Lastname
            </button>
            {second && (
              <div className="names">
                <p>Paila</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
