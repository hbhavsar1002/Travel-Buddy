import React from "react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Rating = ({ rating }) => {
  const validRating = typeof rating === "number" && rating >= 0 ? rating : 0;
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <IoStar
            key={`full-${i}`}
            className="text-yellow-400 dark:text-yellow-600 w-4 h-4"
          />
        ))}
      {Array(halfStars)
        .fill()
        .map((_, i) => (
          <IoStarHalf
            key={`half-${i}`}
            className="text-yellow-400 dark:text-yellow-600 w-4 h-4"
          />
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <IoStarOutline
            key={`empty-${i}`}
            className="text-gray-300 dark:text-neutral-600 w-4 h-4"
          />
        ))}
    </div>
  );
};

export default Rating;
