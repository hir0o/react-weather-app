import { FC, CSSProperties } from 'react';

type PropType = {
  className?: string;
  width?: number;
  height?: number;
  ratio?: number;
  alt?: string;
  src: string;
};

const PictureMedia: FC<PropType> = ({
  width,
  height,
  ratio,
  src,
  alt,
  className,
}) => {
  const style: CSSProperties = {
    width,
    height,
  };

  const defaultRatio = 16 / 9;

  const bottom: CSSProperties = {
    paddingTop: `calc((1 / ${ratio || defaultRatio}) * 100%)`,
  };

  return (
    <div
      style={style}
      className={`relative block max-w-full w-full object-center	object-cover overflow-hidden ${
        className || ''
      }`}
    >
      <img
        src={src}
        alt={alt}
        style={style}
        className="absolute top-0 left-0 w-full h-full object object-center	object-cover"
      />
      <div style={bottom} />
    </div>
  );
};

export default PictureMedia;
