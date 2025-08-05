import type { PropsWithDetailedHTML } from '@hairy/react-lib'

export function HomeFloatProjectsUnline(props: PropsWithDetailedHTML) {
  return (
    <div
      style={{
        backgroundImage: 'url(/svgs/device-mark.svg)',
        backgroundPositionX: '90%',
        backgroundPositionY: 'center',
        backgroundSize: '130% 130%',
        backgroundRepeat: 'no-repeat',
      }}
      className={clsx(
        'relative px-[20%]',
        'bg-cover',
        props.className,
      )}
      {...props}
    >
      <svg className="relative z-19" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 830" fill="none">
        <rect className="animate-[levitate_12s_ease_infinite_1s]" x="111.674" y="59" width="490.000" height="690" fill="url(#pattern0_4582_147581)" />
        <rect className="animate-[levitate_10s_ease_infinite]" x="450" y="50" width="176.000" height="176" fill="url(#pattern1_4582_147581)" />
        <rect className="animate-[levitate_13s_ease_infinite_1s_reverse]" x="93.674" y="78" width="209.000" height="209" fill="url(#pattern2_4582_147581)" />
        <rect className="animate-[levitate_16s_ease_infinite]" x="400" y="350" width="236.304" height="236.304" fill="url(#pattern3_4582_147581)" />
        <rect className="animate-[levitate_17s_ease_infinite_1s]" x="329.674" y="615" width="211.000" height="211" fill="url(#pattern4_4582_14751)" />
        <rect className="animate-[levitate_16s_ease_infinite]" x="78.696" y="414" width="175.693" height="175.693" fill="url(#pattern5_4582_147581)" />
        <defs>
          <pattern id="pattern0_4582_147581" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_4582_147581" transform="matrix(0.00253807 0 0 0.0018018 -0.763959 0)"></use></pattern>
          <pattern id="pattern1_4582_147581" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image1_4582_147581" transform="scale(0.00277778)"></use></pattern>
          <pattern id="pattern2_4582_147581" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image2_4582_147581" transform="scale(0.002)"></use></pattern>
          <pattern id="pattern3_4582_147581" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image3_4582_147581" transform="scale(0.00200401)"></use></pattern>
          <pattern id="pattern4_4582_14751" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image4_4582_147581" transform="scale(0.00200401)"></use></pattern>
          <pattern id="pattern5_4582_147581" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image5_4582_147581" transform="scale(0.002)"></use></pattern>
          <image id="image0_4582_147581" width="986" height="555" preserveAspectRatio="none" xlinkHref="/images/home.phone.png"></image>
          <image id="image1_4582_147581" width="360" height="360" preserveAspectRatio="none" xlinkHref="/images/home.device.watch.png"></image>
          <image id="image2_4582_147581" width="500" height="500" preserveAspectRatio="none" xlinkHref="/images/home.device.camera.png"></image>
          <image id="image3_4582_147581" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.device.ring.png"></image>
          <image id="image4_4582_147581" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.device.projection.png"></image>
          <image id="image5_4582_147581" width="500" height="500" preserveAspectRatio="none" xlinkHref="/images/home.device.speaker.png"></image>
        </defs>
      </svg>
    </div>
  )
}
