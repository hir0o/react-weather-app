import { FC } from 'react';
import Box from './Box';
import Weekly from './Weekly';

type PropType = {
  className?: string;
};

const MainView: FC<PropType> = ({ className }) => (
  <div
    className={`text-center bg-regal-blue-500 pt-32 2xl:px-36 xl:px-24 md:px-12 ${
      className || ''
    }`}
  >
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 gap-4">
      <Weekly />
      <Weekly />
      <Weekly />
      <Weekly />
      <Weekly />
    </div>
    <h2 className="mt-24 text-2xl text-gray-200">Today’s Hightlights </h2>
    <div className="grid xl:grid-cols-2 gap-12 mt-8">
      <Box>
        <p className="text-gray-200">Wind status</p>
        <h1 className="text-9xl text-gray-100">
          15<span className="text-3xl text-gray-300">℃</span>
        </h1>
      </Box>
      <Box>
        <p className="text-gray-200">Wind status</p>
        <h1 className="text-9xl text-gray-100">
          15<span className="text-3xl text-gray-300">℃</span>
        </h1>
      </Box>
      <Box>
        <p className="text-gray-200">Wind status</p>
        <h1 className="text-9xl text-gray-100">
          15<span className="text-3xl text-gray-300">℃</span>
        </h1>
      </Box>
      <Box>
        <p className="text-gray-200">Wind status</p>
        <h1 className="text-9xl text-gray-100">
          15<span className="text-3xl text-gray-300">℃</span>
        </h1>
      </Box>
    </div>
  </div>
);

export default MainView;
