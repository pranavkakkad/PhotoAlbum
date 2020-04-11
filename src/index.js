import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'





// const element = React.createElement("ol", null,tasks.map((task,index)=>
//     React.createElement('li',{key:index},task)));


//JSX







ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
