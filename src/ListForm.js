import React from 'react'; 

class ListForm extends React.Component {
// will be used to store data from the form 
  state = { name: ""}

handleChange = (event) => {
  this.setState({name: event.target.value})
}

  // This function will stop the page from submitting automatically
  handleSubmit = (event) => {
    event.preventDefault(); 
    // console.log(this.state.name); 
    this.props.addItem(this.state.name); 
    this.setState({name: ""})
  }
  
  
  render() {
    const {name} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={name}
        name="list item"
        onChange={this.handleChange}
        required
        placeholder="Add an item"/>
      </form>
    )
  }

}

export default ListForm; 