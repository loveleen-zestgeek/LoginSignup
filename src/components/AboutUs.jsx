// src/components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-8">
          Discover the story behind our education platform.
        </p>
      </div>

      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <p className="text-lg leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod efficitur lacus, ut accumsan augue scelerisque
          at. Fusce ut sagittis tortor. Duis auctor nisl id quam tincidunt,
          vitae lacinia mauris cursus. Proin aliquam, justo et congue tempus,
          felis urna euismod libero, nec euismod quam nisl vel dui. Proin vel
          sapien a augue imperdiet laoreet.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Integer accumsan ligula vitae sem auctor, in ullamcorper velit
          euismod. Sed hendrerit diam sed orci tincidunt, at laoreet augue
          tristique. Nullam vehicula arcu eu est congue, vel auctor nunc
          facilisis. Nam ullamcorper mi quis neque facilisis, nec congue velit
          feugiat.
        </p>

        {/* Add more content about your team, mission, etc. */}
      </div>
    </div>
  );
};

export default AboutUs;
