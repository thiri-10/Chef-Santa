// import ReactMarkdown form 'react-markdown';

import ReactMarkdown from "react-markdown";

export default function Recipe({recipe}:{recipe: any}) {
    return (

        <section className="suggested-recipe-container">
        <h2 className="text-orange-200 font-bold">Chef Claude Recommends:</h2>
        <ReactMarkdown>
        {recipe}
        </ReactMarkdown>
           
            {/* <h2 className="font-bold my-3">Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p>Based on the ingredients you have available,I would recommand
                    delicious <strong>Beef Bolognese Pasta</strong>.Here is the recipe</p>
                <h3>Beef Bolognese Pasta</h3>
                <strong>Ingredients:</strong>
                <ul className="ingredients-list">
                    <li>1 lb, ground beef</li>
                    <li>1 onion, diced</li>
                    <li>3 cloves garlic, minced</li>
                    <li>2 tablespoons tomato paste</li>
                    <li>1 (28 oz) can crushed tomatoes</li>
                    <li>1 cup beef broth</li>
                    <li>1 tea spoon dried oregano</li>
                    <li>1 teaspoon dried basil</li>
                    <li>Salt and pepper to taste</li>
                    <li>8 oz pasta of your choice (e.g., spagehetti, penne, or linguine)</li>
                </ul>
                <strong>Instructions:</strong>
                <ol>
                    <li>Bring a large  pot  of salted water to a boil for the pasta.</li>
                    <li>In a large skillet or Dutch oven,cook the ground beef over
                        breaking it up with a wooden spoon, until brwoned and cooked ten minutes.
                    </li>
                    <li>Add the deiced oinion and minced garlic to the skillet and cooked
                        until the onion is translucent.
                    </li>
                    <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring
                        occasionally, to allow the flavors to meld.
                    </li>
                    <li>While the sauce is simmering, cook the pasta according to the package instructions.
                        Drain the pasta and return it to the pot.
                    </li>
                    <li>Add the Bolognese sauce to the cooked pasta and toss to combine</li>
                    <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if
                        desired
                    </li>
                </ol>

            </article> */}
        </section>
    )
}