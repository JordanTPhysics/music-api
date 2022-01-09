
import React, {Component} from 'react';

class App extends Component{
    constructor(props){
super(props);

this.state={
    newItem:"",
    list:[]
        }
    }
    updateInput(key, value){

    }
    addItem(){
        const newItem={
            id: 1+Math.random(),
            value: this.state.newItem.slice()
        };
        const list = {...this.state.list};

        list.push(newItem);

        this.setState({
            list,
            newItem:""
        })
    }
    render(){
        return(
            <div className='App'>
                Yeehaw
                <div>
                
                </div>
            </div>
        );
    }
}

export default App;