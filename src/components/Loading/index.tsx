import React from 'react'
import { FaCircleNotch } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-96">
      <FaCircleNotch className="animate-spin" size={34} />
    </div>
  );
}

export default Loading;
