import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div>
        pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
