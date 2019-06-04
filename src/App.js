import React from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import ListForm from './ListForm'; 
import { Container} from 'semantic-ui-react'



class App extends React.Component {
  state = {
    list: [
      {id: 1, name: "Pho", picked: true},
      {id: 2, name: "Soy Sauce", picked: false},
      {id: 3, name: "Cheese", picked: false},
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  // name is the name of the item being passed in. The const list will store the current state of the list array, the const list_item will create a variable with the object name and a unique id, and then this.state will update the list array with the new item at the top and the rest below. 
  addItem = (name) => {
    const { list } = this.state 
    const list_item = { name, id: this.getUniqId(), picked: false}
    this.setState({ list: [list_item, ...list]})
  }

  // this is a function to create a new array that will return our list items with their ids and names in <li></li> tags
  // renderList = () => {
  //   const { list } = this.state; 
  //   return list.map( list => 
  //     <li key={list.id}>{list.name}</li>
  //     )
  // }; 
  listClick = (id) => {
    const {list} = this.state; 
    this.setState({
      list: list.map( list_item => {
        if (list_item.id === id ) {
          return {
            ...list_item, 
            picked: !list_item.picked
          }
        }
        return list_item; 
      })
    })
  }

  
  // this is referring to the class of App and calling the functions inside. 
  //props are arbitrary inputs 
  render() {
    const {list} = this.state; 
    // const list = this.state.list;
    return (
      // <div>
      //   <h1>Grocery List</h1>
      //   <ul>
      //     {this.renderList()} 
      //   </ul>
      // </div>
      <Container textAlign='center'>
      <div>
      <ListForm addItem={this.addItem} />
      <List name="Grocery List" items={list} listClick={this.listClick}/>
      </div>
       </Container>
    )
  }
}; 

export default App;
