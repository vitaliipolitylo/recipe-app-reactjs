import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <h3>Calories: {calories}</h3>
            <a className={style.HowToCook} href={url} target="_blank">How to cook</a>
            <img className={style.image} src={image} alt={title} />
        </div>
    );
}

export default Recipe;