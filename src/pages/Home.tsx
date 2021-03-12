import { FC, useEffect } from 'react';
import SideView from '../components/SideView';
import MainView from '../components/MainView';
// import PictureMedia from '../components/PictureMedia';

// type WeatherType = {
//   id: number;
//   weatherStateName: string;
//   weatherStateAbbr: string;
//   windDirectionCompass: string;
//   created: string;
//   applicableDate: string;
//   minTemp: number;
//   maxTemp: number;
//   theTemp: number;
//   windSpeed: number;
//   windDirection: number;
//   airPressure: number;
//   humidity: number;
//   visibility: number;
//   predictability: number;
// };

const Home: FC = () => {
  // const [weather, setWeather] = useState<WeatherType>();
  useEffect(() => {
    void fetch(
      'https://www.metaweather.com/api/location/15015372/',
      {},
    ).then((res) => console.log(res.json()));
  });

  return (
    <div className="min-h-screen md:flex">
      <SideView className="min-h-screen w-full lg:max-w-md flex-shrink" />
      <MainView className="min-h-screen w-full flex-grow" />
    </div>
  );
};

export default Home;
