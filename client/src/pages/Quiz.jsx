//page used for taking the quiz

import BugLogo from '../assets/bug';

export default function Quiz() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BugLogo className="text-red-500 mx-2" aria-label="Github logo" height="300" width="300" />
      <h1 className="text-center text-red-500 mb-4">
        You haven't reached the peak of the stack yet. Keep climbing, and you'll debug it eventually!
      </h1>
    </div>
  );
}
