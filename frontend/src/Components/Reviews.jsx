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

const Stars = ({ rating, className = "" }) => (
  <div className={`flex items-center ${className}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={
          i < rating ? "text-yellow-400" : "text-gray-300"
        }
      >
        ★
      </span>
    ))}
  </div>
);

const Reviews = () => {
  const total = reviews.length;
  const average = (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1);

  return (
    <section className="my-6 px-4 md:px-6 py-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900 text-gray-300 p-6 rounded-xl shadow mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Event Reviews</h2>
              <p className="text-indigo-100 mt-1">
                What attendees are saying about the events
              </p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end">
                <div className="text-3xl font-extrabold mr-3">{average}</div>
                <div className="text-sm">
                  <Stars rating={Math.round(average)} />
                  <div className="text-indigo-100 text-xs mt-1">
                    Based on {total} reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews list */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-slate-700  text-white border border-gray-100 rounded-xl shadow-sm p-4 md:p-5 grid md:grid-cols-6 gap-4 items-start"
            >
              

              {/* Content */}
              <div className="md:col-span-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold ">{review.name}</h3>
                  <div className="text-sm ">{review.rating}/5</div>
                </div>

                <p className=" mt-2">{review.comment}</p>
              </div>

              {/* Stars */}
              <div className="md:col-span-1 flex items-center justify-end">
                <Stars rating={review.rating} className="text-lg" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
