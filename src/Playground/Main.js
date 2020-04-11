import React,{Component} from 'react';
import Title from './Title'
import List from './List'

const newtasks = ['TAG','props','content'];

class Main extends Component{
    render(){
        return(
            <div>
                <Title title = {'Headers'}/>
                <List tasks = {['Hi', 'Hello']}/>
                <List tasks = {newtasks}/>
            </div>
        )
    }
}

export default Main