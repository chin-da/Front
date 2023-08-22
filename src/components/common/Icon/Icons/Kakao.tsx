import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16c6.075 0 11-3.582 11-8s-4.925-8-11-8S0 3.582 0 8c0 2.774 1.942 5.219 4.891 6.654L4 20l5.44-4.08c.51.053 1.03.08 1.56.08z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgComponent;
