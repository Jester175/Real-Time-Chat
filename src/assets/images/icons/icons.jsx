export const IconEnter = (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="50.000000pt"
    height="50.000000pt"
    viewBox="0 0 50.000000 50.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
    >
      <path
        d="M216 464 c-12 -11 -16 -36 -16 -90 l0 -74 -74 0 c-103 0 -106 -4
-106 -140 0 -85 3 -112 16 -124 23 -24 405 -24 428 0 24 23 24 405 0 428 -12
13 -39 16 -124 16 -85 0 -112 -3 -124 -16z m239 -214 l0 -205 -205 0 -205 0 0
115 0 115 85 5 85 5 3 75 c1 41 4 81 7 88 3 9 33 12 117 10 l113 -3 0 -205z"
      />
      <path
        d="M330 276 c0 -99 -7 -106 -112 -106 l-81 0 23 25 c38 41 13 42 -28 2
l-37 -37 37 -37 c41 -40 66 -39 28 2 l-23 25 85 0 c75 0 87 2 106 23 19 20 22
35 22 100 0 45 -4 77 -10 77 -6 0 -10 -31 -10 -74z"
      />
    </g>
  </svg>
);

export const IconRect = (
  <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter
        x="-50%"
        y="-14.7%"
        width="200%"
        height="141.2%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="1"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
        filter="url(#a)"
      ></path>
      <path
        d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
        className="corner"
      ></path>
    </g>
  </svg>
);
