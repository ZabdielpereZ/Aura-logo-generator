import Profile from "./Profile";
// import example from "../assets/example.png";
import Board from "./Board";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";


const ProfilePage = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  // removes the image from both the state and local storage.The images are displayed with a corresponding delete button for each one.
  const handleDelete = (index: number) => {
    const updatedImages = images.filter((_, idx) => index !== idx);
    setImages(updatedImages);
    localStorage.setItem("images", JSON.stringify(updatedImages));
  };

  return (
    <>
      <Profile />
      <>
        {/* Image upload section */}
        <div className="md:container md:mx-auto dark:bg-gray-900 pb-5">
          <h1 className="text-3xl text-[#08efb1] text-center font-mono">
            Images
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 px-4 font-mono pb-2">
            Welcome to Aura here are your images!
          </p>
          {/* 🧪 displaying generated image test 🧪 */}
          {/* <div className="pb-4">
            {" "}
            <h3 className="px-4 font-mono pb-2 text-[#2cd5a5]">
              Stored Images:
            </h3>{" "}
            {url ? (
              <img
                src={url}
                alt="Stored"
                style={{ width: "1024px", height: "1024px" }}
              />
            ) : (
              <img className="rounded-t-lg" src={example} alt="example image" />
            )}{" "}
          </div> */}
          {/* deleted images by index / display images */}
          <div className="md:container dark:bg-gray-900 flex flex-wrap justify-center pb-5 space-x-5">
            {images.length > 0 && (
                images.map((image, index) => (
                  <div className="first:ml-5 w-1/3">
                  <button className="text-[#023] bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#38c292] dark:hover:bg-[#217658] dark:focus:ring-green-900" onClick={() => handleDelete(index)}>Delete</button>{" "}
                  <ImageGallery image={image} />
                  </div>
                ))
            )}
          </div>
        </div>
      </>
      {/* Rankings Page */}
      <>
        <div className="md:container md:mx-auto pt-5 pb-20">
          <Board />
        </div>
      </>
    </>
  );
};

export default ProfilePage;
