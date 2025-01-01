"use client";
import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import {getRecipeFromMistral} from "../apitest/ai"
import { setTimeout } from "timers";


export default function Main() {

    // const ingredients = ['chickne','oregano','tomatoes'];

    const [ingre, setIngre] = useState<string[]>([]);
    const [recipe, setRecipe] = useState<string|undefined>('');

   


    function addIngredient(formData: { get: (arg0: string) => any; }) {
        const newIngredient = formData.get('ingredient');
        console.log(newIngredient);
        setIngre(prevIngr => [...prevIngr, newIngredient]);
    }


    const getRecipe = async () => {
        // const recipeMarkdown = await getRecipeFromChefClaude(ingre);
        const recipeMarkdown = await getRecipeFromMistral(ingre)
        console.log(recipeMarkdown); // just to make sure 
        setRecipe(recipeMarkdown);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input className=""
                    placeholder="e.g. oregano "
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button >Add ingredient</button>
            </form>

            {ingre.length > 0 && <IngredientsList ingre={ingre} getRecipe={getRecipe}
       />}



            {recipe ? <Recipe recipe={recipe} />: (recipe==undefined?
                 <div>Loading...
                 </div>: null)}


        </main>

    )
}


