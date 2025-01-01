

export default function IngredientsList

    ({ ingre, getRecipe }:
        {
            ingre: string[],
            
            getRecipe: () => void,
        }) 
    {

   

    const ingredientsListItems = ingre.map(ingredient => (
        <>
         <li key={ingredient}>{ingredient}</li>
       
        </>
       
       ))



    return (
        <section className="mt-6">
            <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {ingre.length > 2 && <div className="flex get-recipe-container p-8 mt-8 border rounded-lg shadow-lg bg-gray-200 ">
                <div>
                    <h3 className="font-bold mb-4">Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe} className="bg-orange-600 rounded p-2 text-sm text-white">Get a recipe</button>
            </div>}
        </section>
    )
}