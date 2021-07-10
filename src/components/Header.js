import React, { Component } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Deals from './Deals.js';
import Cart from './Cart.js';
import Home from './Home';
import Items from './Items';
import ItemData from './ItemData';


export class Header extends Component {
    render() {
        return (
            <div>
        <BrowserRouter>
          <nav>
            <ul className="navul">
              <AiOutlineShoppingCart size='50'style={{display:'inline', color:'white', float:'left', paddingTop:15, margin:10}}/>
              <li className="navli">
               <NavLink to="/" exact activeClassName="active" className="navLi">Home</NavLink>                            
              </li>
              <li className="navli">
                <NavLink to="/deals" activeClassName="active" className="navLi">Deals</NavLink>
              </li>
              <li className="navli" >
                <NavLink to="/cart" activeClassName="active" className="navLi">Cart</NavLink>
              </li>
            </ul>
          </nav>
        
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/deals" >
              <Deals  />
            </Route>
            <Route exact path="/cart" >
              <Cart />
            </Route>
            <Route exact path="/item/list">
              <Items />  
            </Route>
            <Route exact path={`/items/item`}>
              <ItemData />  
            </Route>
            {/* <Route exact path="/new" >
              <NewItem />
            </Route> */}
          </Switch>
        </BrowserRouter>      
      <header className="App-header">
        
      </header>
      </div>
        )
    }
}

export default Header


