//page used for 418 error

import teapot from '../assets/teapot.svg';

const handleHome = () => {
  location.href = '/';
};

export default function Teapot() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img src={teapot} alt="Teapot" className="w-64 h-64 mb-4" />
      <h1 className="text-4xl font-bold text-red-500 mb-4">418 - I'm a Teapot</h1>
      <button className="mt-6 inline-block text-white px-6 py-3 rounded-lg" onClick={handleHome}>
        Go Back to Home
      </button>
    </div>
  );
}
