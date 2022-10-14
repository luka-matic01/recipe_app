import React from 'react'
import Card from '../UI/Card';

let imgs = [
    "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    "https://spoonacular.com/recipeImages/511728-312x231.jpg",
    "https://spoonacular.com/recipeImages/654812-312x231.jpg",
    "https://spoonacular.com/recipeImages/654857-312x231.jpg",
    "https://spoonacular.com/recipeImages/654883-312x231.jpg",
    "https://spoonacular.com/recipeImages/654928-312x231.jpg",
    "https://spoonacular.com/recipeImages/654926-312x231.jpg",
    "https://spoonacular.com/recipeImages/654944-312x231.jpg",
    "https://spoonacular.com/recipeImages/654905-312x231.jpg",
    "https://spoonacular.com/recipeImages/654901-312x231.jpg"

]

const ImageMeals = () => {
  return (
    <Card>
        <div className='image'>
        <img src={imgs[0]} alt='new'/>
        <img src={imgs[1]} alt='new1'/>
        <img src={imgs[2]} alt='new2'/>
        <img src={imgs[3]} alt='new3'/>
        <img src={imgs[4]} alt='new4'/>
        <img src={imgs[5]} alt='new5'/>
        <img src={imgs[6]} alt='new6'/>
        <img src={imgs[7]} alt='new7'/>
        <img src={imgs[8]} alt='new8'/>
        <img src={imgs[9]} alt='new9'/>
        </div>
        
    </Card>
  )
}

export default ImageMeals;