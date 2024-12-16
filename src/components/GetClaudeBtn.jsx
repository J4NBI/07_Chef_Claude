import React from "react";

const GetClaudeBtn = (props) => {
  return (
    <>
      {props.ingredients.length > 3 && (
        <div className="gap-8 my-24 border-2 border-[#ffd769] p-8 rounded-md flex flex-col md:flex-row justify-between items-center md:w-[90%] bg-white bg-opacity-45 mx-auto">
          <div>
            <h3 className="font-bold mb-2">Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button
            className="min-w-[150px]
      mt-2 bg-[#ffd769] transition-all duration-300 text-[#6f578e] font-bold hover:bg-[#6f578e]/90 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-md text-sm h-10 px-4 flex items-center justify-center mb-2
      "
            onClick={props.show}
          >
            Get a recipe
          </button>
        </div>
      )}
    </>
  );
};

export default GetClaudeBtn;
