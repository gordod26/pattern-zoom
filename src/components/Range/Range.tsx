import React, { useEffect, useState } from "react";

type Props = {
  handleZoom: (zoom: number) => void;
  zoom: number;
};

const Range = ({zoom, handleZoom}: Props) => {

    useEffect(() => {
        console.log(zoom);
    }, [zoom]);

  return (
    <div className="">
      <label
        htmlFor="medium-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      <input
        id="medium-range"
        type="range"
        min={10}
        max={1000}
        value={zoom}
        onChange={(e) => handleZoom(Number(e.target.value))}
        className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Range;
