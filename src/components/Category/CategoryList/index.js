import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCategories } from '../../../actions/category';
import { getCategories } from '../../../reducers/category';

class CategoryList extends React.Component {
  componentDidMount() {
    // Fetch categories
    this.props.getAllCategories();
  }
  
  render() {
    return (
      <div>
        <h1 className="mb-3">Categories</h1>

        {this.props.isLoading && <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>}

        {this.props.error && <div className="alert alert-danger" role="alert">
          <b>Encountered an error:</b> {this.props.error.message}
        </div>}

        <div className="list-group">
          {this.props.categories.map(category => (
            <Link to={`/categories/${category.id}`} className="list-group-item" key={`category-${category.id}`}>{category.name}</Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.category.isLoading,
  error: state.category.error,
  categories: getCategories(state.category)
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);