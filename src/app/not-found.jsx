import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="text-center">
        <div className="animate-bounce text-8xl mb-4">
          🐄
        </div>

        <h1 className="text-7xl font-extrabold text-emerald-700">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Animal Not Found
        </h2>

        <p className="text-gray-600 mt-3 max-w-md mx-auto">
          Oops! The animal you're looking for seems to have wandered away.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default NotFoundPage;