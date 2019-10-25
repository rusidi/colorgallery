import React, { Component } from "react";
import Select from 'react-select';
import colorList from "./grid.json";
import "./App.css";
const filterColors = [
  { label: "Red", value: 1 },
  { label: "Green", value: 2 },
  { label: "Yellow", value: 3 },
  { label: "Blue", value: 4 },
  { label: "Brown", value: 5 },
  { label: "Gray", value: 6 },
  { label: "Purple", value: 7 },
  { label: "Pink", value: 8 },
  { label: "Other", value: 9 }
];
class App extends Component {
  state = {    
colors: [
    {
      id: 1,
      title: 'Red',
      selected: false,
      key: 'red'
    },
    {
      id: 2,
      title: 'Green',
      selected: false,
      key: 'green'
    },
    {
      id: 1,
      title: 'Yellow',
      selected: false,
      key: 'yellow'
    },
    {
      id: 2,
      title: 'Blue',
      selected: false,
      key: 'blue'
    },
    {
      id: 1,
      title: 'Brown',
      selected: false,
      key: 'Brown'
    },
    {
      id: 2,
      title: 'Gray',
      selected: false,
      key: 'gray'
    },
    {
      id: 1,
      title: 'Purple',
      selected: false,
      key: 'purple'
    },
    {
      id: 2,
      title: 'Pink',
      selected: false,
      key: 'pink'
    },
    {
      id: 2,
      title: 'Other',
      selected: false,
      key: 'other'
    }
    ],
    filter: ""
  };
/*
var MySelect = React.createClass({
     getInitialState: function() {
         return {
             value: 'select'
         }
     },
     change: function(event){
         this.setState({value: event.target.value});
     },
     render: function(){
        return(
           <div>
               <select id="lang" onChange={this.change} value={this.state.value}>                  
               </select>
               <p></p>
               <p>{this.state.value}</p>
           </div>
        );
     }
});*/

  renderColor = color => {
    const { filter } = this.state;
    
    var r = (Math.floor(Math.random() * 256));
    var g = (Math.floor(Math.random() * 256));
    var b = (Math.floor(Math.random() * 256));
    var bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    return (
      <div className="col-20">
        <div style={{background: bgColor}} r={{r}} g={{g}} b={{b}} >          
        </div>
      </div>
    );
  };

  onchange = e => {
     //varcodeR = color.r;
     //varcodeG = color.g;
     //varcodeB = color.b;

    /*if( filter.r > e.r &&  filter.g > e.b && filter.c > e.r){
        
    }*/
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredColor = colorList.filter(color => {
      return color.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-100">
                <center>
                  <h3>                    
                      Color Gallery                    
                  </h3>
                </center>
              </div>
              <div className="col">
                <Select options={ filterColors } />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredColor.map(color => {
                return this.renderColor(color);
              })}
            </div>
          </div>
        </main>        
      </div>
    );
  }
}

export default App;
