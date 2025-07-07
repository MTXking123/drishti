"use client";

import React, { useState, useEffect, useRef } from "react";

function Stats() {
  const [stats, setStats] = useState([
    { count: 0, heading: "Years of Experience", suffix: "+" }, // Stat 1
    { count: 0, heading: "Specialized Services", suffix: "+" }, // Stat 2
    { count: 0, heading: "Patiens", suffix: "K+" }, // Stat 3 (Million)
    { count: 0, heading: "Surgeries Delivered", suffix: "K+" }, // Stat 4
  ]);

  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
  const statRef = useRef(null); // Ref to the stats element

  useEffect(() => {
    const handleScroll = () => {
      if (!statRef.current || hasAnimated) return;

      const elementTop = statRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop <= viewportHeight && !hasAnimated) {
        setHasAnimated(true);
        animateCounts();
      }
    };

    // Throttle scroll event to improve performance
    const throttleScroll = () => {
      if (!hasAnimated) {
        window.requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener("scroll", throttleScroll);

    return () => window.removeEventListener("scroll", throttleScroll); // Cleanup scroll event listener
  }, [hasAnimated]);

  const animateCounts = () => {
    const endCounts = [15, 17, 40, 10]; // Target values for each stat (third stat is million)
    const duration = 3000; // Duration in milliseconds
    const startTime = performance.now(); // Get the initial time

    const runAnimation = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1

      const updatedCounts = endCounts.map(
        (endCount, index) => Math.round((endCount - 0) * progress) // Starting from 0 to the endCount
      );

      setStats((prevStats) =>
        prevStats.map((stat, index) => ({
          ...stat,
          count: updatedCounts[index], // Update the count
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(runAnimation);
      }
    };

    requestAnimationFrame(runAnimation);
  };

  return (
    <div className="">
      <div
        ref={statRef}
        id="stat"
        className="text-center py-20 w-[90%] max-w-7xl mx-auto pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg">
              {/* Render count with suffix */}
              <p className="text-6xl lg:text-8xl  py-2">
                {stat.count}
                {stat.suffix} {/* Add suffix here */}
              </p>
              <p className="text-lg mt-2 border border-black p-2">
                {stat.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
