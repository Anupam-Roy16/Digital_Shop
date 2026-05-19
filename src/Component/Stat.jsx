// import React from 'react';

const Stat = () => {
  return (
    <div className="py-10 bg-violet-600">
      <div className="mx-48 max-[825px]:mx-5 flex justify-between max-[385px]:flex-col max-[385px]:items-center max-[385px]:gap-6">
        <div className="text-amber-50">
          <p className="text-5xl font-bold">50k+</p>
          <p className="opacity-65">  Active Users</p>
        </div>
        <div className="text-amber-50 ">
          <p className="text-5xl font-bold">200+</p>
          <p className="opacity-65">Premium Tools</p>
        </div>
        <div className="text-amber-50">
          <p className="text-5xl font-bold">4.9</p>
          <p className="opacity-65">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
