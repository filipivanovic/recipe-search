import React, { Component, Fragment } from 'react'

class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">search for recipes with <strong className="text-danger">Food2Fork</strong></h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">type recipes separated by comma</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    name="search"
                    value={value}
                    placeholder="chicken, onions, carrots" 
                    className="form-control"
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button 
                      type="submit" 
                      className="input-group-text bg-primary text-white"> <i className="fas fa-search"></i> 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeSearch
