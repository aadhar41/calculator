import React, { Component, useState } from "react";

function Main() {

    const [inputvalue, setinputvalue] = useState('')

    function display(value) {
        setinputvalue(inputvalue + value);
    }

    function calculate(params) {
        var answer = eval(inputvalue)
        setinputvalue(answer)
    }

    function clear() {
        setinputvalue('')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <h1>React Calc</h1>
                <table class="table">
                        <tr>
                            <td scope="row" colSpan="3"><input type="text" value={inputvalue}  /></td>
                            <td><button className="btn btn-primary" onClick={clear} >Clear</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary" onClick={() => {display('1')}}>1</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('2')}}>2</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('3')}}>3</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('/')}}>/</button></td>
                        </tr>
                         <tr>
                            <td><button className="btn btn-primary" onClick={() => {display('4')}}>4</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('5')}}>5</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('6')}}>6</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('+')}}>+</button></td>
                        </tr>
                         <tr>
                            <td><button className="btn btn-primary" onClick={() => {display('7')}}>7</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('8')}}>8</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('9')}}>9</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('-')}}>-</button></td>
                        </tr>
                         <tr>
                            <td><button className="btn btn-primary" onClick={() => {display('.')}}>.</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('0')}}>0</button></td>
                            <td><button className="btn btn-primary" onClick={() => {calculate()}}>=</button></td>
                            <td><button className="btn btn-primary" onClick={() => {display('*')}}>*</button></td>
                        </tr>
                </table>
            </div>
        </div>
    )
}

export default Main;
