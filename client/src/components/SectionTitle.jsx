import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className='flex'>
    <h2 className="text-3xl text-tertiary font-bold mb-4">{title}</h2>
    </div>
  );
}

export default SectionTitle;
