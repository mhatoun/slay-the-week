import { useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import checkmarkAnimationData from './animations/checkmark.json';

const fullyCheckedFrame = 130;

const Checkmark = ({ size, setPlayingCheckmarkAnimation }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current && lottieRef.current.anim) {
      lottieRef.current.anim.playSegments([0, fullyCheckedFrame], true);
      lottieRef.current.anim.setSpeed(2.5);
      if (setPlayingCheckmarkAnimation != null) {
        lottieRef.current.anim.addEventListener('complete', function(e) { setPlayingCheckmarkAnimation(false);});
      }
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
