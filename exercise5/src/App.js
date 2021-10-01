import React from 'react';
import SearchView from './Components/SearchView';
import data from './data.json'
import AdminView from './Components/AdminView';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      items: [],
      productSearchString: "",
      adminModeActive: false,
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("component Mounted")
    axios.get('http://localhost:4000/ex5')
      .then((response => {
        console.log(response);
        this.setState({items: response.data.items})
      }))
  }
  
  onSearchFieldChange = (event) => {
    
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({productSearchString: event.target.value});
   
  }

  addNewItem = (name, type, price, rating, status) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      type: type,
      price: price,
      rating: rating,
      status: status
    });

    this.setState({
      items: newItems
    });
  }

  addAxiosItem = (name, type, price, rating, status) =>{
    let newItems = [...this.state.items];
    axios.
      post('http://localhost:4000/ex5',{
        id: newItems.length + 1,
        name: name,
        type: type,
        price: price,
        rating: rating,
        status: status
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response =>{
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    console.log("render");
    let output =
    <>
    <div>
      Search <input type="text" onChange={this.onSearchFieldChange} value={this.state.productSearchString}/>
      </div>
      <SearchView
      items={this.state.items.filter((item) => item.name.toUpperCase().includes(this.state.productSearchString.toUpperCase())
        || item.type.toUpperCase().includes(this.state.productSearchString.toUpperCase()))} 
      />
      <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
    </>
    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }                  
                  deleteItem={ this.deleteItem }
                  addAxiosItem = { this.addAxiosItem }
               />;
    }

    return (
      <>
        { output }
      </>
    )
  }

}

export default App;
