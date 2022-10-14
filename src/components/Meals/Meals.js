import { Fragment } from 'react';
import MealNew from './MealNew';
import MealsSummary from './MealsSummary';


const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      
      <MealNew />
    </Fragment>
  );
};

export default Meals;
