import React, { Component, Fragment } from 'react'
import {recipe} from '../../tempDetails'

class RecipeDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: recipe,
      url:`https://www.food2fork.com/api/get?key=c3e4ef889d734bc954385b912930c0de&rId=${this.props.id}`
    }
  }
      
  async componentDidMount() {
    try {
      const data = await fetch(this.state.url)
      const jsonData = await data.json();
  
      this.setState({
        recipe: jsonData.recipe
      })
    } catch(error) {
      console.log(error)
    }
  }
      
  render() {
    const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
    const { handleIndex } = this.props;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button 
                className="btn btn-warning mb-5 text-capitalized"
                type="button"
                onClick={() => handleIndex(1)}>back to recipe list
              </button>
              <img 
                src={image_url} 
                className="d-block w-100"
                alt="recipe"
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase"> {title} </h6>
              <h6 className="text-warning text-capitalized text-slanted">provided by: {publisher} </h6>
              <a 
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 text-capitalized">publisher webpage
              </a>
              <a 
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2 mx-3 text-capitalized">recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingrediens</h2>
                {
                  ingredients.map((item, index) => {
                    return (
                      <li 
                        className="list-group-item text-slanted"
                        key={index}>
                        {item}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeDetails
