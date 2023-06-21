import React, { useEffect, useState } from "react";

type Props = {};

const Range = (props: Props) => {
  const [zoom, setZoom] = useState(1);

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
        min={1}
        max={100}
        value={zoom}
        onChange={(e) => setZoom(Number(e.target.value))}
        className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Range;
