import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
Math.random()

  
/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    //this.addSomeCarrot = this.addSomeCarrot.bind(this);

  }



  addSomeCarrot = () => {
    for(let a = 0; a < this.state.items.length; a++){
      if(this.state.items[a].value=="carrot") {
        const product = [...this.state.items];
        product[a].qty += Math.floor(Math.random() * 10+1);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "carrot", qty: Math.floor(Math.random() * 20+1), unit: 'x'}] });
      }
    }
  }


  addSomeYogurt = () => {
    for(let a = 0; a < this.state.items.length; a++){
      if(this.state.items[a].value=="Yogurt") {
        const product = [...this.state.items];
        product[a].qty += Math.floor(Math.random() * 10+1);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Yogurt", qty: Math.floor(Math.random() * 20+1), unit: 'x'}] });
      }
    }
  }

  addSomeBlueberry = () => {
    for(let a = 0; a < this.state.items.length; a++){
      if(this.state.items[a].value=="Blueberry") {
        const product = [...this.state.items];
        product[a].qty += Math.floor(Math.random() * 10+1);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Blueberry", qty: Math.floor(Math.random() * 20+1), unit: 'x'}] });
      }
    }
  }

  addSomeBeer = () => {
    for(let a = 0; a < this.state.items.length; a++){
      if(this.state.items[a].value=="Beer") {
        const product = [...this.state.items];
        product[a].qty += Math.floor(Math.random() * 20+1);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Beer", qty: Math.floor(Math.random() * 20+1), unit: 'x'}] });
      }
    }
  }
  


  // addSomeCarrot = () =>{
  //   this.setState({ items: [...this.state.items,{id: 5, value: "carrot", qty: Math.floor(Math.random()*6+1), unit: "pcs"}] });
  // }
  // addSomeYogurt = () =>{
  //   this.setState({ items: [...this.state.items,{id: 5, value: "Yogurt", qty: Math.floor(Math.random()*6+1), unit: "ltr"}] });
  // }
  // addSomeBlueberry = () =>{
  //   this.setState({ items: [...this.state.items,{id: 5, value: "Blueberry", qty: Math.floor(Math.random()*6+1), unit: "kg"}] });
  // }
  // addSomeBeer = () =>{
  //   this.setState({ items: [...this.state.items,{id: 5, value: "Beer", qty: Math.floor(Math.random()*24+1), unit: "x"}] });
  // }



  /*  setTimeout(()=>{
    
      //this.state.item = []; classia ei saa tehdä näin
      //this.state.items.push();  ei voi laittaa uutta tietoa näin
      // this.setState({ items: [] });

      this.setState({ items: [...this.state.items,{id: 5, value: "carrots", qty: 5}] });
    }, 2000);
    */
  

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeCarrot }>Add carrot</button>
      <button onClick={ this.addSomeYogurt }>Add Yogurt</button>
      <button onClick={ this.addSomeBlueberry }>Add Blueberry</button>
      <button onClick={ this.addSomeBeer }>Add Beer</button>
    </div>
  
  }
}
export default App;