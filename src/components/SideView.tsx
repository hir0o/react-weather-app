import { FC } from 'react';
import PictureMedia from './PictureMedia';

type PropType = {
  className?: string;
};

const SideView: FC<PropType> = ({ className }) => (
  <div className={`text-center bg-regal-blue-300 pt-32 ${className || ''}`}>
    <div className="w-48 mx-auto">
      <PictureMedia
        src="https://www.metaweather.com/static/img/weather/s.svg"
        ratio={1}
      />
      <h1 className="text-9xl text-gray-100 mt-24">
        15<span className="text-3xl text-gray-300">℃</span>
      </h1>
      <p className="text-gray-100 mt-24 text-2xl">Shower</p>
    </div>
  </div>
);

export default SideView;
