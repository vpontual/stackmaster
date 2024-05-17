//page used for 418 error

import teapot from '../assets/teapot.svg';

const handleHome = () => {
  location.href = '/';
};

export default function Teapot() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 text-center">
      <img src={teapot} alt="Teapot" className="w-64 h-64" />
      <h1 className="text-4xl font-bold text-red-500">418 - I'm a Teapot</h1>
      <button className="mt-6 inline-block text-white rounded-lg" onClick={handleHome}>
        Go Back to Home
      </button>
    </div>
  );
}
