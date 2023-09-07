import { SVGProps } from 'react';

function ArrowDownIcon({
  width = 24,
  height = 24,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Keyboard arrow down" clipPath="url(#clip0_150_6617)">
        <path
          id="Vector"
          d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
          fill="#ECECEC"
        />
      </g>
      <defs>
        <clipPath id="clip0_150_6617">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowDownIcon;
