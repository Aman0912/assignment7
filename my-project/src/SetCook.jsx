import App from "./App";

const SetCook = ({SetToCook, deleteIt, Cooked}) => {
    console.log(SetToCook)

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center pb-5 border-b-2 w-80 mx-auto">want to cook: {SetToCook.length} </h1>
            
                
                    <div className="overflow-hidden mt-3">
                        <table className="table">
                       
                            <thead>
                                <tr>
                                    <th className=" text-[1rem] font-medium fira"></th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira">Name</th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira">Time</th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira">Calories</th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira"></th>
                                </tr>
                            </thead>
                            <tbody>
                     
                                {
                                SetToCook.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th className=" text-[1rem] font-medium fira">{index+1}</th>
                                    <td className="text-[#878787] text-[1rem] font-normal fira">{item.recipe_name}</td>
                                    <td className="text-[#878787] text-[1rem] font-normal fira">{item.preparing_time}</td>
                                    <td className="text-[#878787] text-[1rem] font-normal fira">{item.calories}</td>
                                    <td className="text-[#878787] text-[1rem] font-normal fira"><button onClick={()=>deleteIt(item)} className="py-2 px-4 w-24 bg-[#0BE58A] text-[#150B2B] rounded-3xl text-[1rem] font-medium">Preparing</button></td>
                                </tr>))}
                                

                            </tbody>
                        </table>
                    </div>
                 
                    <h1 className="text-2xl font-semibold text-center mt-7 pb-5 border-b-2 w-80 mx-auto">Currently cooking: {Cooked.length} </h1>
                    <div className="overflow-x-auto mt-6">
                        <table className="table">
                           
                            <thead>
                                <tr>
                                    <th className="text-[#878787] text-[1rem] font-medium fira"></th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira">Name</th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira">Time</th>
                                    <th className="text-[#878787] text-[1rem] font-medium fira">Calories</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                           
                                
                                {
                                Cooked.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <td className=" text-[1rem] font-normal fira">{index+1}</td>
                                    <td className="text-[#878787] text-[1rem] font-normal fira">{item.recipe_name}</td>
                                    <td className="text-[#878787] text-[1rem] font-normal fira">{item.preparing_time}</td>
                                    <td className="text-[#878787] text-[1rem] font-normal fira">{item.calories}</td>
                                    
                                </tr>))}
                                

                            </tbody>
                        </table>
                    </div>
                
            
        </div>
    );
};

export default SetCook;