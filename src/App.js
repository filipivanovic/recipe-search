import React, { Component, Fragment } from 'react';
import RecipeList from './components/Recipes/RecipeList'
import RecipeDetails from './components/Recipes/RecipeDetails'
import './App.css';

class App extends Component {
  state = {
    recipes: [],
    url: 'https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=a8ec4f558fc41d3d40ceb251eefd0c97',
    base_url: 'https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=a8ec4f558fc41d3d40ceb251eefd0c97',
    details_id: 35386,
    pageIndex: 1,
    search: '',
    query: '&q=',
    error: ''
  }

 getRecipes = async () => {
    try {
      const data = await fetch(this.state.url)
      const jsonData = await data.json();
      console.log(jsonData.recipes)

      if(jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: 'sorry, but your search did not return any results'
          }
        })
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes
          }
        })
      }
  
    } catch(error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getRecipes()
  }

  displayPage = (index) => {
    switch(index) {
      default:
      case 1:
        return(
          <RecipeList 
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            error={this.state.error}
          />
        )
      case 0:
        return(
          <RecipeDetails 
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        )
    }
  }

  handleIndex = (index) => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => console.log(this.state.search))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, query, search } = this.state;

    this.setState(() => {
      return {
        url: `${base_url}${query}${search}`,
        search: ''
      }
    }, () => {
      this.getRecipes();
    })
  }
  
  
  render() {
    return (
      <Fragment>
        { this.displayPage(this.state.pageIndex) }
      </Fragment>
    )
  }
}

export default App;
