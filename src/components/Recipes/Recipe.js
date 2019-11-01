import React, { Component, Fragment } from 'react'

class Recipe extends Component {
  render() {
    const { image_url, publisher, source_url, title } = this.props.recipe;
    const { handleDetails } = this.props;
    return (
      <Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img 
              src={ image_url } 
              className="img-card-top" 
              style={{ height: '14rem' }} 
              alt="recipe" 
            />
            <div className="card-body text-capitalized">
              <h6> {title} </h6>
              <h6 className="text-warning text-slanted">provided by: {publisher} </h6>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-primary text-capitalized" 
                type="button"
                onClick={handleDetails}>details
              </button>
              <a 
                href={ source_url } 
                className="btn btn-success mx-2 text-capitalized"
                target="_blank"
                rel="noopener noreferrer">recipe url
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Recipe
