import React from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

export default function GradientCircle(props) {
  return (
    <Svg width={954} height={954} viewBox="0 0 954 954" fill="none" {...props}>
      <Circle cx={477} cy={477} r={477} fill="url(#paint0_radial)" />
      <Defs>
        <RadialGradient
          id="paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 477) scale(823.5)"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#EC5265" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}


