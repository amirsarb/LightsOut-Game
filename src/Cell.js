/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-01-25 14:40:55
 * @desc [The lights out game consists of a 5 by 5 grid of lights. 
 * A random number or a stored pattern of these lights is switched on. 
 * Pressing any of the lights will toggle it and the adjacent lights]
 */
import React, { Component } from 'react'
class Cell extends Component{
static defaultProps={

}
    constructor(props){
        super(props)
        this.state={
        }
        this.handleNeighbours = this.handleNeighbours.bind(this)
        
    }

handleNeighbours(){
    this.props.Neighbours(this.props.x,this.props.y)
}
    render(){
       // {this.props.x},{this.props.y}:{this.props.currentcell}
        return(<div className="cell"  onClick={this.handleNeighbours} style={{fontSize:"20px",backgroundColor:this.props.currentcell?"yellow":"gray"}}></div>)
    }

}
export default Cell

