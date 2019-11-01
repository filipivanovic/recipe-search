import React, { Component, Fragment } from 'react';
import {recipes} from './tempList'
import RecipeList from './components/Recipes/RecipeList'
import RecipeDetails from './components/Recipes/RecipeDetails'
import './App.css';

class App extends Component {
  state = {
    recipes: recipes,
    url: 'https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=1710c72f6c76ad68282122276f16c190',
    base_url: 'https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=1710c72f6c76ad68282122276f16c190',
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

      if(jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: 'sorry, but your search did not return any results'
          }
        })
      } else {
        this.setState(()=> {
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
