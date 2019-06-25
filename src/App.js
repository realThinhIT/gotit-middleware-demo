import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import CategoryList from './components/Category/CategoryList';
import ItemList from './components/Item/ItemList';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                Catalog
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/categories/:categoryId" component={ItemList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};