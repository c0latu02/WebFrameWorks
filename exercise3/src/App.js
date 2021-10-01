import React from 'react';
import SearchView from './Components/SearchView';
import data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      items: data.items,
      productSearchString: ""
    }
  }

  onSearchFieldChange = (event) => {
    
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({productSearchString: event.target.value});
   
  }
  render()
  {
    return(
    <>
      <input type="text" onChange={this.onSearchFieldChange} value={this.state.productSearchString}/>
      <SearchView
           items={this.state.items.filter((item) => item.name.toUpperCase().includes(this.state.productSearchString.toUpperCase())
            || item.type.toUpperCase().includes(this.state.productSearchString.toUpperCase()))}

      />
    </>
    )  
  }

}

export default App;
