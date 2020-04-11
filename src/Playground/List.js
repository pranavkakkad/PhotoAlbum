import React,{Component} from 'react';



class List extends Component{
    render(){
        return (
            <div>
                <h1>Create element parameter order</h1>
                <ol>
                    {this.props.tasks.map((task,index)=><li key={index}>{task}</li>)}
                </ol>
            </div>
        )
    }
}

export default List