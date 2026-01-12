import React from "react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Amazing event! Very well organized.",
  },
  {
    id: 2,
    name: "Ananya Patel",
    rating: 4,
    comment: "Good experience, but seating could improve.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    rating: 5,
    comment: "Loved the crowd and music management!",
  },
];

const Reviews = () => {
  return (
    <div className="m-5  px-6 py-4">
      

      <div className="max-w-xl mx-auto">
    
        <div className="bg-gray-300 p-6 rounded-xl shadow mb-6 text-center"> 
            
      Event Reviews   ⭐ 4.5 / 5 
        
          <p className="text-gray-500">Based on 120 reviews</p>
      
          
        </div>

        {/* Reviews */}
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100  grid grid-cols-3  p-5 rounded-xl shadow mb-4"
          >
            <h3 className="font-semibold">{review.name}</h3>

            <p className="text-yellow-400">
              {"⭐".repeat(review.rating)}
            </p>

            <p className="text-gray-600 mt-2">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
