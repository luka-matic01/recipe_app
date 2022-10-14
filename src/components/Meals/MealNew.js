

import 'antd/dist/antd.css'

import React, {useEffect, useState } from "react";
import './MealNew.css';
import Card from "../UI/Card";
import AppPagination from "./AppPagination";
import Switch from  '@mui/material/Switch';
import NewAPI from "./NewAPI";
import { Select } from "antd";
import { Empty } from 'antd';



const RECORDS_PER_PAGE = 10;


const MealNew = () => {
    const [data, setData] = useState([]);
    const [query,setQuery] = useState('');
    const[page,setPage] = useState(1);
    const[numberOfPages,setNumberOfPages]= useState();
    const[toggled,setToggled] = useState(false)
    const [cuisine,setCuisine] = useState('Select Cuisine');
    const [time,setTime] = useState(120);
    const [error,setError] = useState(null);

    const CuisinesList = [
      'African',
      'American',
      'British',
      'Cajun',
      'Caribbean',
      'Chinese',
      'Eastern European',
      'European',
      'French',
      'German',
      'Greek',
      'Indian',
      'Irish',
      'Italian',
      'Japanese',
      'Jewish',
      'Korean',
      'Latin American',
      'Mediterranean',
      'Mexican',
      'Middle Eastern',
      'Nordic',
      'Southern',
      'Spanish',
      'Thai',
      'Vietnamese'
    ].map((cuisine) => ({ label: cuisine, value: cuisine }));


    const handleChange = event => {
      setToggled(event.target.checked)
    }
    
    const handleClick =  () => {
      const offset = (page -1 ) * RECORDS_PER_PAGE;

      

      const link = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=6d06b297f61a4e7c915dd4eca31cf989&offset=${offset}&maxReadyTime=${time}&cuisine=${cuisine}	`;


      fetch (link)
      .then ((response)=> {
        if (!response.ok) {
          throw Error ('No Results Found');
        }
        return response.json()})
      .then ((data) => {
        setData(data.results)

         const totalPages = Math.ceil (data.totalResults / RECORDS_PER_PAGE);
         setNumberOfPages(totalPages);
         setError(null)
      })
      .catch (error=>{
       setError(error.message);
      })
    

    }
   
   
      

       
   
  


     
    



    const elementFood =  data?.map((meal,key) => {
     return (<div key={key}>
       
       <h1 className="meal-title">{meal.title}</h1>
       <img className="img-meals" src={meal.image}
       alt='e-meal'/>
     </div> )
          
    
})

const handleSubmit = (e) => {
  e.preventDefault();
  handleClick();
}

useEffect(()=> {
  handleClick();
},[page,cuisine,time])


const lol =  <form className="meal-lol" onSubmit={handleSubmit}>
<input 
type='text'
className="search"
placeholder="Search Meal..."
value={query}
onChange={(e)=>setQuery(e.target.value)}/>
<input type='submit' value='Search'/>

</form>



const handleCuisine =  <Select
className='cuisine-css'
 value={cuisine}
 options={CuisinesList}
onSelect ={(value)=> {
  setCuisine(value);
 }}
filterOption={false}
 dropdownMatchSelectWidth={false}
 />



const handleTime = <Select
className='time-css'
options={[{label:'Fast (30 Minutes)', value:'30'},
{label:'Slow (120 Minutes)',value:'120'}
]}
placeholder='Select Time'
onSelect={(value)=>{
  setTime(value);
}}
dropdownMatchSelectWidth={false}
/>


const lmao = <div>
<h1 className="lezgo">Something New!</h1>
            <p>Look for cuisine and the maximum time to prepare the food.</p></div>


const AllFood = <div>
  {!toggled && elementFood}
</div>

const aboutFood = <h1 >The most delicious food you can find is right here!</h1>

    return (
      <Card className="meal">
       <div className='uppercase'>
        <Switch
              className="toggle-button"
              checked={toggled}
              onChange={handleChange}
              name='switch'
              inputProps={{"aria-label":"test switch"}}
              color="warning"              />
             <p className="toggled">{toggled && <NewAPI/>}</p>
             <div>
             <h1 className='lezgo'>The most delicious food you can find is right here!</h1>              {!toggled && lol}
       
             {!toggled && lmao}
       
         
                   {!toggled && handleCuisine}
                {!toggled && handleTime}
                </div>
       
        <div className = 'meal-text'>
         <div className="elementfood">
          
       </div>
       {!toggled && (numberOfPages === 0? (<Empty/>) :AllFood)}
      { !toggled && <AppPagination
         setPage={setPage}
        pageNumber={numberOfPages}  
        page={page}
              />}

             
       
        
       
       
     
        </div>

        

   
        </div>   
  
      </Card>
    
       ) }

export default MealNew;