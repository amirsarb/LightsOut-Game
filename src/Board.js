/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-01-25 14:40:55
 * @desc [The lights out game consists of a 5 by 5 grid of lights. 
 * A random number or a stored pattern of these lights is switched on. 
 * Pressing any of the lights will toggle it and the adjacent lights]
 */

import React, { Component } from 'react'
import Cell from './Cell'
import './Board.css'
class Board extends Component {
    static defaultProps = {

    } // End default props

    constructor(props) {

        super(props)
        this.state = {
            cells: this.initialValue(),
            isWin: false
        }// End State

        this.Neighbours = this.Neighbours.bind(this)
        this.checkWin = this.checkWin.bind(this)
        this.resetGame = this.resetGame.bind(this)

    }// End Constructor

    // Before starting game we need some lights be turn On
    // This function is just for initial values. So this returns 0 or 1

    initialValue = () => {
        let initCell = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                initCell[i][j] = Math.floor(Math.random() * 2)

        return initCell
    }

    // This function makes current cell to zero and
    // Reverses the status of Neighbours from 0=>1 or 1=>0
    Neighbours(x, y) {
        let tempCell = this.state.cells
        tempCell[x][y] = 0
        if (this.checkWin() === 0)
            this.setState({ isWin: true })
        else {
            if (x > 0)
                tempCell[x - 1][y] = 1 - tempCell[x - 1][y]
            if (x < 4)
                tempCell[x + 1][y] = 1 - tempCell[x + 1][y]
            if (y > 0)
                tempCell[x][y - 1] = 1 - tempCell[x][y - 1]
            if (y < 4)
                tempCell[x][y + 1] = 1 - tempCell[x][y + 1]
            this.setState({ cells: tempCell })
        }
    }

    checkWin() {
        let temp = this.state.cells
        let total = 0
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                total = temp[i][j] + total
        return total

    }

    resetGame() {
        this.setState({ cells: this.initialValue(), isWin: false })

    }

    render() {

        return (<>  <h1 style={{ color: this.state.isWin ? "green" : "black" }}>{this.state.isWin ? "You Win!" : "Lights Out"}</h1>
            <div className="container">
                <div className="grid">
                    {this.state.cells.map((array, x) => array.map((cell, y) => <Cell x={x} y={y} Neighbours={this.Neighbours} currentcell={cell} />))}



                </div>
            </div><div style={{ marginTop: "10px" }}> <button className="button" onClick={this.resetGame}>New Game</button></div> <h3>Code by:Amir Sarbazi</h3></>)
    }

}
export default Board