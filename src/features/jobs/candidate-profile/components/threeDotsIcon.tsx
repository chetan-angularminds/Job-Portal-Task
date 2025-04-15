import React from 'react'

const ThreeDotsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle
      cx='10'
      cy='10'
      r='5'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    />
    <circle
      cx='30'
      cy='10'
      r='5'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    />
    <circle
      cx='50'
      cy='10'
      r='5'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    />
  </svg>
)

export default ThreeDotsIcon
