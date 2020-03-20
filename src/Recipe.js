import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients, source}) =>{
    return(
                <div className={style.recipe}>
            <h1 className = "recipetitle">{title}</h1>
            <p>Calories: {parseInt(calories)} Kcal</p>
            <img src={image} alt = "" className={style.image}></img>
            <ul>
                {ingredients.map ( ingredient=>
                    <li>{ingredient.text}</li>
                )}
            </ul>
            <a href= {source} target="_blank" >Get the recipe !!</a>
        </div>
        
        
    )
}

export default Recipe;
