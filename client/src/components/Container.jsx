import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="bg-black bg-opacity-50 rounded-xl p-10 my-3">
      {children}
    </div>
  );
}

export default Container;