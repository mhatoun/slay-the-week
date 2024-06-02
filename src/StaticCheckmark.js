import { useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import checkmarkAnimationData from './animations/checkmark.json';

const fullyCheckedFrame = 130;

const Checkmark = ({ size }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current && lottieRef.current.anim) {
      lottieRef.current.anim.playSegments([fullyCheckedFrame - 1, fullyCheckedFrame], true);
    }
  });

  return (
    <div>
      <Lottie
        options={{
          animationData: checkmarkAnimationData,
          loop: false,
        }}
        height={size}
        width={size}
        ref={lottieRef}
      />
    </div>
  );
};

export default Checkmark;
