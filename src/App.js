
import React from 'react';
//import '/images';
import './App.css'
import Item from './components/Item'
function App(){
const itemList = [
{id: 1,
date: new Date(2022, 1, 8),
price: 420.69,
desc: 'Shredzz'
},
{id: 2,
    date: new Date(2022, 1, 8),
    price: 440.95,
    desc: 'Jamz'
    },
{id: 3,
    date: new Date(2022, 1, 8),
    price: 420.67,
    desc: 'Whakz'
    }
];
    
        return(
            <div className='App'>
                Yeehaw
                <div>
                <h1 className='Main'>Music-api service</h1>
                <Item date={itemList[0].date} price={itemList[0].price} desc={itemList[0].desc} />
                <Item date={itemList[1].date} price={itemList[1].price} desc={itemList[1].desc}/>
                <Item date={itemList[2].date} price={itemList[2].price} desc={itemList[2].desc}/>
                <Item date={itemList[0].date} price={itemList[0].price} desc={itemList[0].desc}/>
                </div>
            </div>
        );
    
}

export default App;