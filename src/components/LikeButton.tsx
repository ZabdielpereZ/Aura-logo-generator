import {  useState } from "react";
import { HiHeart } from "react-icons/hi";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

//   useEffect(() => {
//     // Load the likes from localStorage when the component mounts
//     const savedLikes = localStorage.getItem("likes");
//     if (savedLikes) {
//       setLikes(parseInt(savedLikes, 10));
//     }
//   }, []);

  const handleLike = () => {
    const newLikes = likes + 1; setLikes(newLikes);
    console.log(newLikes)
    // Save the new number of likes to localStorage
    // localStorage.setItem('likes', newLikes.toString());
  };

  return (
    <div className="pb-4">
      <p className="text-[#07f3cf]">Likes</p>
      <button className="text-red-500" onClick={handleLike}>
        {" "}
        <HiHeart /> {likes}{" "}
      </button>
    </div>
  );
};
export default LikeButton;
