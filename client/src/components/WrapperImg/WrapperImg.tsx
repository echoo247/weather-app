import { FC, CSSProperties } from "react";
import classes from "./WrapperImg.module.css";

interface WrapperImgProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const WrapperImg: FC<WrapperImgProps> = ({
  src,
  alt,
  className = "",
  style,
  width,
  height,
  onClick,
}) => {
  return (
    <div
      className={`${classes.wrapperImg} ${className}`}
      style={style}
      onClick={onClick}>
      <img
        src={src}
        alt={alt}
        style={{
          width: width || "auto",
          height: height || "auto",
        }}
      />
    </div>
  );
};

export default WrapperImg;
