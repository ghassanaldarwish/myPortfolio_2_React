import React, { Component } from 'react'
import axios from 'axios'

import Main from '../../components/main/main'

class main extends Component{

    state = {
        serviceInfos: [],
        protfolioInfos: []
      }
    
      componentDidMount (){
        axios.get('http://localhost:4000/api/services')
        .then(res => console.log(this.setState({serviceInfos: res.data}) ))

        axios.get('http://localhost:4000/api/protfolio')
        .then(res => console.log(this.setState({ protfolioInfos: res.data })))

      }

    

    render() {
        return (
            <Main serviceInfos={this.state.serviceInfos}  protfolioInfos={this.state.protfolioInfos}/>
        )
    }
}
export default main