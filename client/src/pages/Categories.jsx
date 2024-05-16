import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Back End' },
    { id: 3, name: 'APIs' },
    { id: 4, name: 'React' },
    { id: 5, name: 'Databases' },
    { id: 6, name: 'All' },
  ];
  //added div to encapsule link to provide style to each item in array
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-10 text-header">Select a Category</h1>
      <div className="flex justify-items-center w-3/5 text-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            className="flex justify-center items-center bg-index p-5 rounded h-40 w-3/5 text-center"
            key={category.id}>
            <Link
              className="text-banner hover:text-slate-400 hover:animate-bounce"
              key={category.id}
              to={`/study/${category.name}`.replace(/\s/g, '')}
              style={{ display: 'block', margin: '10px 0' }}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
