import OpenAI from "openai";
import example from "../assets/example.png";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const ImageGeneration = () => {
  console.log(import.meta.env.VITE_OPENAI_API_KEY);
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [prompt, setPrompt] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>(() => {
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
      return JSON.parse(storedImages);
    } else {
      return [];
    }
  });

  const saveImg = () => {
    toast("Image saved!")
    // spread operator [ ... ]<-- allows you to unpack the elements of an array or the properties of an object into another array or object.
    setImages([...images, url]);
  };

  useEffect(() => {
    // When images array changes, save it to local storage
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const handleClick = async (): Promise<void> => {
    setLoading(true);
    try {
      const response: any = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      });
      let imageUrl = response.data[0].url;
      // Saving image in local storage
      localStorage.setItem("generatedImageUrl", imageUrl);
      setUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load the URL from local storage when the component mounts, keeps image on image generation page
  // useEffect(() => {
  //   const storedImageUrl = localStorage.getItem("generatedImageUrl");
  //   if (storedImageUrl) {
  //     setUrl(storedImageUrl);
  //   }
  // }, []);

  // const handleDelete = (): void => {
  //   // localStorage.removeItem("generatedImageUrl");
  //   setUrl("");
  // };

  return (
    <div className="md:container md:mx-auto justify-center content-center items-center">
      <div className="text-5xl text-[#0ae192] flex justify-center p-5 pt-20 font-mono">
        AI Image Generator
      </div>
      {/* Generated Image section */}
      <div className="flex justify-center md:container md:mx-auto">
        {/* replacing placeholder Image with new generated image using ternary operator */}
        {url ? (
          url && <img src={url} alt="Generated image" />
        ) : (
          <img
            className="flex justify-center content-center items-center"
            src={example}
            alt="Aura Logo"
          />
        )}
      </div>
      {/* generate image Button section */}
      <div className="mb-3 mt-3 p-4">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="search-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          {/* Todo - make prompt full view in this div below */}
          <div className="relative">
            {/* image generation prompt */}
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-x-auto whitespace-nowrap"
              placeholder="Enter Prompt"
              required
            />
            {/* handle image generation button */}
            <button
              onClick={handleClick}
              disabled={loading}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-blue-800"
            >
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </div>
        </form>
      </div>
      {/* Save image button */}
      <div className="flex justify-center space-x-2 pb-20">
        <button
          type="button"
          onClick={saveImg}
          className="text-[#023] bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#38c292] dark:hover:bg-[#217658] dark:focus:ring-green-900"
        >
          Save Image
        </button>

        {/* <button
          onClick={handleDelete}
          className="text-[#023] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#38c292] dark:hover:bg-[#217658] dark:focus:ring-green-900"
        >
          Clear Image
        </button> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ImageGeneration;
