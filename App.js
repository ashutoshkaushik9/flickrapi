import React, { Component } from 'react';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      imgs: [],
      textinput: 'pokemon'
    };
  }

componentDidMount(){
  this.Ihjer();
}

Ihjer = () => {
  fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4de954b5cbda1d92ca05b3f94e968195&tags='+this.state.textinput+'&per_page=10&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
})
.then(function(phot){

  let green = phot.photos.photo.map((yes) => {
    var srcc= 'https://farm'+yes.farm+'.staticflickr.com/'+yes.server+'/'+yes.id+'_'+yes.secret+'.jpg';
    return(<button><img alt="dogs" className="apps" src={srcc}></img></button>)
  })
  this.setState({imgs: green});
}.bind(this))

}


handleChange= (p) => {
  this.setState({textinput: p.target.value})};

Delay= (function(){
  var timer= 0;
  return function(callback, ms){
    clearTimeout(timer);
    timer= setTimeout(callback, ms);

  };
})();

  render() {
   
    
  return (
    
    <div className="App">
     
      <p>  <input className="textinput" onChange={this.handleChange} onKeyUp={()=> this.Delay(function(){
        this.Ihjer();
        }.bind(this), 5000)}></input> </p>
      
     flickrapi
     <button>Search</button>
     <p>{this.state.imgs}</p>
    
     
    </div>
   
  );
}
}

export default App;
