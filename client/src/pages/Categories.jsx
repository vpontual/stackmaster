import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Front End' },
    { id: 2, name: 'Back End' },
    { id: 3, name: 'APIs' },
    { id: 4, name: 'React' },
    { id: 5, name: 'Databases' },
    { id: 6, name: 'All' },
  ];

  return (
    <div>
      <h1>Select a Category</h1>
      <div>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/study/${category.id}`}
            style={{ display: 'block', margin: '10px 0' }}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
