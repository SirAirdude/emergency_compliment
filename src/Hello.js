import React, {Component} from 'react'

class Hello extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    getName = () => {
        this.setState({name = event.target.value})
    }
    render() {
        return (
            <div>
                <input type={'text'} value = {this.state.name} onChange={this.getName}/>
            </div>
        )
    }
}

export default Hello