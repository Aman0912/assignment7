import App from "../src/App"



const Carts=({food, sentToCook})=>{
    const {recipe_image, recipe_name, short_description, ingredients,preparing_time, calories} = food;
    console.log(recipe_name);

    return (
        <div>
            <div className="card h-[800px] card-compact w-96 bg-base-100 border shadow-xl p-6">
                <figure className='max-w-80'><img src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-[1.25rem] font-semibold">{recipe_name}</h2>
                    <p className="text-[#878787] fira text-[1rem] font-normal pb-4 border-b-2">{short_description}</p>
                    <p className='text-[1.125rem] font-medium mt-4 mb-3'>Ingredients: {ingredients.length}</p>
                    <ul className="list-disc fira pl-3 pb-3 border-b-2 text-[#878787]">
                        {
                            ingredients.map(list => <li>{list}</li>)
                        }
                    </ul>
                    <div className="flex justify-between my-4">
                        <span><i className="fa-regular fa-clock mr-3 text-[#282828cc] text-[1rem] font-normal"></i> {preparing_time}</span>
                        <span><i className="fa-solid fa-fire mr-3 text-[#282828cc] text-[1rem] text-red-600"></i>{calories}</span>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>sentToCook(food)} className=" py-3 px-5 w-44 bg-[#0BE58A] text-[#150B2B] rounded-3xl text-[1.125rem] font-medium">Cook Now</button>
                    </div>
                </div>
            </div>

        </div>
    );


}
export default Carts;