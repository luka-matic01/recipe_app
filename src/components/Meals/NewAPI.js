



import React, {useEffect, useState} from "react";
import './MealNew.css';
import Card from "../UI/Card";
import AppPagination from "./AppPagination";



const RECORDS_PER_PAGE = 10;


const NewAPI = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [query,setQuery] = useState('');
    const[page,setPage] = useState(1);
    const[numberOfPages,setNumberOfPages]= useState();


   
  
  
    const handleClick = () => {
      const offset = (page -1 ) * RECORDS_PER_PAGE;

      

      setShowData(true);
      const link = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=7a881a16691e4b9f963b39afc9f23fea&offset=${offset}`;


      fetch (link)
      .then ((response)=> response.json())
      .then ((data) => {
        setData(data.results)

         const totalPages = Math.ceil (data.totalResults / RECORDS_PER_PAGE);
         setNumberOfPages(totalPages);
      })
    

    }
 
    
   
   
      

       
   
  



     
    



    const elementFood =  data?.map((meal,key) => {
     return (<div key={key}>
       
       <h1 className="meal-title">{meal.title}</h1>
       <img className="img-meal" src={meal.image}
       alt='e-meal'/>
     </div> )
          
    
})




useEffect(()=> {
  handleClick();
},[query,page])

const handleCloick = event => {
  setQuery(event.target.value)
}




    return (
      <Card className="meal">
        <h1 className="keystroke">Find the meal within the every typed keystroke! </h1>
        <form className="meal-lola" >
        <input 
        type='text'
       className="meal-lola"
       placeholder="Search..."
       value={query}
       onChange={handleCloick}/>
       <input type='submit' value='Search'/>

       </form>
      
        <div className = 'meal-text'>
       <h5>{showData && elementFood}</h5>
       <AppPagination
         setPage={setPage}
        pageNumber={numberOfPages}  
        page={page}
              />

             
       
        
       
       
     
        </div>

        

       
        
            
  
      </Card>
    
       ) }

export default NewAPI;