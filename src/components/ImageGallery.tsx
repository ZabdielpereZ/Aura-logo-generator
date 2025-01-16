import example from "../assets/example.png";

const ImageGallery = ({image}) => {
 
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                {image ? (
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
  );
};
export default ImageGallery;
