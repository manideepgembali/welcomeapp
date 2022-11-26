// Write your code here
import {component} from 'react'

import './index.css'

class Welcome extends component {
  clicked = () => {
    if (this.button.textContent === 'Subcribe') {
      this.button.textContent = 'Subcribed'
    } else {
      this.button.textContent = 'Subcribe'
    }
  }

  render() {
    return (
      <div className="bg">
        <h1 className="head">Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <button onClick={this.clicked} type="button" className="buttin">
          Subscribe
        </button>
      </div>
    )
  }
}
export default Welcome
