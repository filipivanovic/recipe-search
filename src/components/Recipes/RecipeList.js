import React, { Component, Fragment } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

class RecipeList extends Component {
  
  render() {
    const { recipes, handleDetails, handleSubmit, handleChange, value, error } = this.props;
    return (
      <Fragment>
        <RecipeSearch 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
          error={this.props.error}
        />
        <div className="container my-5">
          {/* { title } */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recipe list</h1>
            </div>
          </div>
          {/* { end of title } */}
          <div className="row">
            { error ? (<h1 className="text-danger text-center">{ error }</h1>) 
              : (recipes.map(recipe => {
                return (
                  <Recipe 
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={() => handleDetails(0, recipe.recipe_id)}
                  />
                )
              })) 
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeList
