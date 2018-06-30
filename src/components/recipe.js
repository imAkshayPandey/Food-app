import React from 'react';

import DropDown from './dropdown';
import './recipe.css';
import './drop.css';


const Recipe=props=>(
     
    <div className="parent">
    <div className="row">
    {props.data.map((recipe)=>{
  return (
    <div key={recipe.recipe_id} className ="col-md-4" style={{marginbottom:"2rem"}}>
  <div  className="Recipe-box">
  <img className="Recipe-img" src={recipe.image_url} alt=""></img>
  <div className="Recipe-title"><b>{recipe.title.length<32?`${recipe.title}`:`${recipe.title.substring(0,32)}...`}</b></div>
  <div className="publisher-Name"><span><b>Publisher:</b>{recipe.publisher}</span></div>
  <DropDown />
  </div>
  </div>
  );
 })}
 </div>
    </div>
    
  
);
export default Recipe;
// {this.state.recipes.map((recipe)=>{
//   return <div key={recipe.recipe_id} className="col-md-4">{recipe.title}</div>
// })}