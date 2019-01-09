import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';




const title = ["British","Ragdoll"];
const image = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Britskorthaar-64091287828362D7bA.jpg/220px-Britskorthaar-64091287828362D7bA.jpg",
"https://mypetandi.bayer.com/sites/g/files/kmftyc426/files/styles/paragraph_image/public/2018-03/ragdoll_cat_01401.jpg?itok=PCISQ62h"
];

const subTitle =["The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. "];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Basis way
          </p>
        <div>
          <Card img={image[0]} title={title[0]} subtitle={subTitle[0]}/>

        </div>
        <div>
          <Card img={image[1]} title={title[1]} subtitle={subTitle[1]}/>

        </div>
         


      
        </header>
      </div>
    );
  }
}

export default App;
