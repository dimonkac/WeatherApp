import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const SvgCalendarColor = (props: any) => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 121"
    {...props}>
    <Defs></Defs>
    <Path
      d="M11.52 6.67h99.84a11.57 11.57 0 0 1 11.52 11.52v26.75H0V18.19A11.56 11.56 0 0 1 11.52 6.67Zm24.79 9.75A9.31 9.31 0 1 1 27 25.73a9.31 9.31 0 0 1 9.31-9.31Zm49.79 0a9.31 9.31 0 1 1-9.31 9.31 9.31 9.31 0 0 1 9.31-9.31Z"
      style={{
        fillRule: 'evenodd',
        fill: '#ef4136',
      }}
    />
    <Path
      d="M111.36 121H11.52A11.57 11.57 0 0 1 0 109.48V40h122.88v69.46A11.56 11.56 0 0 1 111.36 121Z"
      style={{
        fill: 'gray',
      }}
    />
    <Path
      d="M12.75 117.31h97.38a9.1 9.1 0 0 0 9.06-9.06V40H3.69v68.23a9.09 9.09 0 0 0 9.06 9.06Z"
      style={{
        fill: '#fff',
        fillRule: 'evenodd',
      }}
    />
    <Path
      className="cls-4"
      d="M86.1 14.63a11.11 11.11 0 1 1-7.85 3.26l.11-.1a11.06 11.06 0 0 1 7.74-3.16Zm0 1.79a9.31 9.31 0 1 1-9.31 9.31 9.31 9.31 0 0 1 9.31-9.31ZM36.31 14.63a11.11 11.11 0 1 1-7.85 3.26l.11-.1a11.08 11.08 0 0 1 7.74-3.16Zm0 1.79A9.31 9.31 0 1 1 27 25.73a9.31 9.31 0 0 1 9.31-9.31Z"
    />
    <Path
      className="cls-5"
      d="M80.54 4.56C80.54 2 83 0 86.1 0s5.56 2 5.56 4.56v21.21c0 2.51-2.48 4.56-5.56 4.56s-5.56-2-5.56-4.56V4.56ZM30.75 4.56C30.75 2 33.24 0 36.31 0s5.56 2 5.56 4.56v21.21c0 2.51-2.48 4.56-5.56 4.56s-5.56-2-5.56-4.56V4.56Z"
    />
    <Path
      className="cls-6"
      d="M22 85.62h14a1.79 1.79 0 0 1 1.79 1.79v11.7A1.8 1.8 0 0 1 36 100.9H22a1.8 1.8 0 0 1-1.8-1.79v-11.7a1.8 1.8 0 0 1 1.8-1.79ZM54.58 85.62h14.06a1.79 1.79 0 0 1 1.79 1.79v11.7a1.8 1.8 0 0 1-1.79 1.79H54.58a1.8 1.8 0 0 1-1.79-1.79v-11.7a1.8 1.8 0 0 1 1.79-1.79ZM86.87 85.62h14.06a1.8 1.8 0 0 1 1.79 1.79v11.7a1.8 1.8 0 0 1-1.79 1.79H86.87a1.8 1.8 0 0 1-1.79-1.79v-11.7a1.79 1.79 0 0 1 1.79-1.79ZM22 56.42h14a1.8 1.8 0 0 1 1.79 1.8v11.69A1.8 1.8 0 0 1 36 71.7H22a1.8 1.8 0 0 1-1.8-1.79V58.22a1.81 1.81 0 0 1 1.8-1.8ZM54.58 56.42h14.06a1.8 1.8 0 0 1 1.79 1.8v11.69a1.8 1.8 0 0 1-1.79 1.79H54.58a1.79 1.79 0 0 1-1.79-1.79V58.22a1.8 1.8 0 0 1 1.79-1.8ZM86.87 56.42h14.06a1.8 1.8 0 0 1 1.79 1.8v11.69a1.8 1.8 0 0 1-1.79 1.79H86.87a1.79 1.79 0 0 1-1.79-1.79V58.22a1.8 1.8 0 0 1 1.79-1.8Z"
    />
  </Svg>
);

export default SvgCalendarColor;