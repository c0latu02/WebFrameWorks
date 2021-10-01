import React from 'react'

class AdminView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItemName: "",
      newItemType: "",
      newItemPrice: "",
      newItemRating: "",
      newItemStatus: ""
    }
  }

  addNewItem = () => {
    this.props.addNewItem(this.state.newItemName, this.state.newItemType, this.state.newItemPrice, this.state.newItemRating, this.state.newItemStatus);
  }


  addAxiosItem = () => {
    this.props.addAxiosItem(this.state.newItemName, this.state.newItemType, this.state.newItemPrice, this.state.newItemRating, this.state.newItemStatus);
  }

  render() {
    return (
      <div>
        <div>
            Add new item
            <div>
              Name <input type="text" onChange={ (event) => this.setState({ newItemName: event.target.value }) } />
            </div>
            <div>
              Type <input type="text" onChange={ (event) => this.setState({ newItemType: event.target.value }) } />
            </div>
            <div>
              Price <input type="text" onChange={ (event) => this.setState({ newItemPrice: event.target.value }) } />
            </div>
            <div>
              Rating <input type="text" onChange={ (event) => this.setState({ newItemRating: event.target.value }) } />
            </div>
            <div>
              Status <input type="text" onChange={ (event) => this.setState({ newItemStatus: event.target.value }) } />
            </div>
            <button onClick={ this.addNewItem, this.addAxiosItem }>Add Item</button>

          </div>
          <button onClick={ this.props.disableAdminMode }>Disable Admin Mode</button>
      </div>
    )
  }
}

export default AdminView;