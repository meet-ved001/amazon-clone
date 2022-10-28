import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  const login=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <nav className="header">
      {/* {left side image,  */}
      <Link to="/">
        <img className="header__logo" src="data:image/png;base64,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"></img>
      </Link>
      {/* {search box , 3 links, basket icon with numbers}} */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1 Link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo"> {user ? 'Sign out':'Sign in'} </span>
          </div>
        </Link>
        {/* 2 Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>
        {/* 3 Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Your </span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4 Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* basket icon */}
            <ShoppingBasketIcon />
            {/* number of items */}
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;