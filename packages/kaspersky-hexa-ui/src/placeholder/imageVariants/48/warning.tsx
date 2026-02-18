import React from 'react'

export const ImageWarning: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none">
    <path d="M0 0h48v48H0z" />
    <path
      fill="#002055"
      fillOpacity={0.07}
      d="M2.315 14.583v18.834c0 1.83.994 3.505 2.563 4.447l16.585 9.469a5.16 5.16 0 0 0 5.074 0l16.584-9.47c1.57-.889 2.564-2.615 2.564-4.446V14.583c0-1.831-.994-3.505-2.564-4.447L26.537.667a5.16 5.16 0 0 0-5.074 0l-16.585 9.47c-1.57.889-2.563 2.615-2.563 4.446Z"
    />
    <path
      fill="#F7C105"
      fillRule="evenodd"
      d="M24 37.35c7.373 0 13.35-5.977 13.35-13.35 0-7.373-5.977-13.351-13.35-13.351-7.374 0-13.351 5.978-13.351 13.351 0 7.373 5.977 13.35 13.35 13.35Z"
    />
    <path stroke="#FFF" strokeLinecap="round" strokeWidth={2} d="M24 18v8" />
    <circle cx={24} cy={30} r={1} fill="#FFF" />
  </svg>
)
