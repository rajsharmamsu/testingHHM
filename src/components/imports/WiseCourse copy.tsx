import svgPaths from "./svg-jr31xa737i";
import { imgGroup427321979 } from "./svg-4916w";

function Group427321979() {
  return (
    <div
      className="absolute h-[591.602px] left-[-57px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[57.0005px_-119px] mask-size-[1300px_620px] top-[119px] w-[1384.08px]"
      style={{ maskImage: `url('${imgGroup427321979}')` }}
    >
      <div className="absolute bottom-[-28.655%] left-[-15.173%] right-[-15.623%] top-[-36.962%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1811 981"
        >
          <g id="Group 427321979">
            <g filter="url(#filter0_f_1_30)" id="Vector 11">
              <path
                d={svgPaths.p223e8f80}
                fill="var(--fill-0, #00A7FF)"
                fillOpacity="0.12"
              />
            </g>
            <g filter="url(#filter1_f_1_30)" id="Vector 12">
              <path
                d={svgPaths.p350bbf00}
                fill="var(--fill-0, #FFA20C)"
                fillOpacity="0.12"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="832.897"
              id="filter0_f_1_30"
              width="1558.33"
              x="-0.00320625"
              y="147.23"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_30"
                stdDeviation="114.667"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="761.286"
              id="filter1_f_1_30"
              width="1558.68"
              x="251.628"
              y="0.33339"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_30"
                stdDeviation="109.333"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <Group427321979 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute bg-[#edf6fc] h-[620px] left-1/2 top-0 translate-x-[-50%] w-[1300px]" />
      <MaskGroup />
    </div>
  );
}

function Frame1000002353() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[620px] items-start justify-start left-[150px] px-[54px] py-[51px] top-60 w-[1300px]">
      <MaskGroup1 />
    </div>
  );
}

function Group427321400() {
  return (
    <div className="absolute contents left-[150px] top-60">
      <Frame1000002353 />
    </div>
  );
}

export default function WiseCourse() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Wise course">
      <Group427321400 />
    </div>
  );
}