import "../App.css";
import example from "../assets/example.png";

const ImageGeneration = () => {
  return (
    <div className="md:container md:mx-auto justify-center content-center items-center">
      <div className="text-5xl text-[#0ae192] flex justify-center p-4 font-mono">
        AI Logo Generator
      </div>
      {/* Generated Image */}
      <div className="flex justify-center md:container md:mx-auto">
        {/* Ensure this path is correct based on your project structure */}
        <img
          className="flex justify-center content-center items-center"
          src={example}
          alt="Aura"
        />
      </div>
      {/* generate image Button */}
      <div className="mb-3 mt-3">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="search-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Prompt"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-blue-800"
            >
              Generate Image
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center space-x-2">
        <button className="text-[#023] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#38c292] dark:hover:bg-[#217658] dark:focus:ring-green-900">
          Save Logo
        </button>

        <button className="text-[#023] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#38c292] dark:hover:bg-[#217658] dark:focus:ring-green-900">
          Design Custom Logo
        </button>
      </div>

      <div className="text-white flex justify-center pb-4">
        <p>
          Developed by <span>Team Aura</span>
        </p>
      </div>
    </div>
  );
};

export default ImageGeneration;
