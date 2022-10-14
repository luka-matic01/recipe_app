import { Fragment } from 'react';

import mealsImage from '../../assets/mealsimage.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>RecipeApp</h1>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
