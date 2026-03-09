import React from 'react';

const About = () => {
  return (
    <div className="bg-[#fff8ed] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

        <p className="text-lg mb-6 leading-relaxed">
          <strong>Welcome to Recipe Nest — your cozy corner for culinary creativity.</strong>
        </p>

        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          At Recipe Nest, we believe that cooking should be simple, satisfying, and personal.
          Whether you're a seasoned chef or a kitchen newbie, we are here to help you discover,
          save, and share recipes that truly feel like home.
        </p>

        <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Organize recipes effortlessly</strong>  Save your favorites, add personal notes, and categorize dishes your way.
          </li>
          <li>
            <strong>Discover new flavors</strong>  Explore curated recipes from around the world and from our community of passionate cooks.
          </li>
          <li>
            <strong>Cook with confidence</strong>  Access easy-to-follow instructions, ingredient swaps, and tips tailored to your needs.
          </li>
        </ul>

        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          Inspired by the idea of a nest — a place of comfort, creativity, and nourishment —
          Recipe Nest is designed to make your cooking journey more enjoyable and meaningful.
        </p>

        <p className="text-lg text-red-500 font-semibold mt-6">
          Lets cook something amazing, together.
        </p>
      </div>
    </div>
  );
};

export default About;

