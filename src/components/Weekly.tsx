import { FC } from 'react';
import Box from './Box';
import PictureMedia from './PictureMedia';

type PropType = {
  className?: string;
};

const Weekly: FC<PropType> = ({ className }) => (
  <Box className={className}>
    <p className="text-gray-200">Tomorrow</p>
    <div className="mt-3 w-14 mx-auto">
      <PictureMedia
        src="https://www.metaweather.com/static/img/weather/s.svg"
        ratio={1}
      />
    </div>
    <p className="text-gray-200 mt-6">
      <span>16°C</span>
      <span>11°C</span>
    </p>
  </Box>
);

export default Weekly;
