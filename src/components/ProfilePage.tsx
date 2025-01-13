import Profile from "./Profile";
import example from "../assets/example.png";
import Board from "./Board";
import { useState } from "react";

const ProfilePage = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImage(base64String);
      localStorage.setItem("savedImage", base64String);
    };

    if (file) { const reader = new FileReader(); 
      reader.onloadend = () => { 
        const base64String = reader.result as string; 
        setImage(base64String); 
        localStorage.setItem('savedImage', base64String); 
      }; reader.readAsDataURL(file); 
    } else { console.error('No file selected'); 
      
    }


  };

  const loadImageFromLocalStorage = () => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  };

  return (
    <>
      <Profile />
      <>
        {/* Image upload section */}
        <div className="md:container md:mx-auto dark:bg-gray-900 pb-5">
          <h1 className="text-3xl text-[#38c292] text-center font-mono">Images</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 px-4 font-mono pb-2">
            Welcome to Aura here are your images!
          </p>
          {/* Image card example 1 */}
          <div className="md:container md:mx-auto dark:bg-gray-900 flex flex-row justify-center pb-5 space-x-5">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              { image ? (
                  image && <img src={image} alt="Uploaded image" />
                ) : (
                <img
                  className="rounded-t-lg"
                  src={example}
                  alt="example image"
                />
                )}
              </a>
            </div>
            {/* Image card example 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              { image ? (
                  image && <img src={image} alt="Uploaded image" />
                ) : (
                <img
                  className="rounded-t-lg"
                  src={example}
                  alt="example image"
                />
                )}
              </a>
            </div>
            {/* Image card example 3 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                { image ? (
                  image && <img src={image} alt="Uploaded image" />
                ) : (
                <img
                  className="rounded-t-lg"
                  src={example}
                  alt="example image"
                />
                )}
              </a>
            </div>
          </div>
          {/* Displaying images through files test */}
          <div className="text-[#71cab7] px-4">
            <h1 className="px-4 font-mono">Display Images</h1>
            <div className="flex items-center py-2 bg-[#099] rounded-lg text-white hover:bg-teal-800 cursor-pointer m-2 px-4 h-10 w-32">
            <input type="file" className="hidden" id="fileInput" onChange={handleImageUpload} />
            <label htmlFor="fileInput">Choose a file</label>
            </div>
            <button onClick={loadImageFromLocalStorage}></button>
          </div>
        </div>
      </>
      {/* Rankings Page */}
      <>
        <div className="md:container md:mx-auto pt-5 pb-5">
          <Board />
        </div>
      </>
    </>
  );
};

export default ProfilePage;
