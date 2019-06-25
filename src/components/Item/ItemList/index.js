import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../../actions/item';
import { getAvailableItems } from '../../../reducers/item';
import { getCategoryById } from '../../../reducers/category';
import { getCategory } from '../../../actions/category';

class ItemList extends React.Component {
  async componentDidMount() {
    // Fetch category information
    if (!this.props.category) {
      this.props.getCategory();
    }

    // Fetch categories
    await this.props.getItems();
  }
  
  render() {
    return (
      <div>
        <h1 className="mb-3">Items {this.props.category && `of ${this.props.category.name}`}</h1>

        {this.props.isLoading && <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>}

        {this.props.error && <div className="alert alert-danger" role="alert">
          <b>Encountered an error:</b> {this.props.error.message}
        </div>}

        <div className="list-group">
          {!this.props.isLoading && this.props.items.map(item => (
            <li className="list-group-item" key={`item-${item.id}`}>
              <div><b>{item.name}</b></div>
              <div>
                <small className="text-muted">{item.description}</small>
              </div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.item.isLoading || state.category.isLoading,
  error: state.item.error,
  items: getAvailableItems(state.item),
  category: getCategoryById(state.category, ownProps.match.params.categoryId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getItems: () => dispatch(getItems(ownProps.match.params.categoryId)),
  getCategory: () => dispatch(getCategory(ownProps.match.params.categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);