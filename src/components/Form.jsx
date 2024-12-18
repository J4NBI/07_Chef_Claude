import React from "react";

const Form = (props) => {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="bg-white bg-opacity-45 p-8 border-2 border-yellow-300 rounded-md text-xl text-center font-bold max-w-[800px] mx-auto">Welcome to Chef Claude!<br/> Type in at least three ingredients to generate personalized recipe suggestions and discover exciting culinary combinations.</h2>
      <form
        action={props.submit}
        className="flex items-center flex-col md:flex-row justify-center"
      >
        <input
          name="ing"
          className="rounded-md border-2 w-full md:mr-8 p-3 "
          type="text"
          id="ingredients"
          placeholder="e.g. oregano"
        />
        <button className=" text-white mt-4 md:mt-0 text-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm h-10 px-4 md:p-7 md:px-8 flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
          + Add ingredients
        </button>
      </form>
    </div>
  );
};

export default Form;
