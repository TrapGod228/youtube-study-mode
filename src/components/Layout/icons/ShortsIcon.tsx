import React from 'react';

export default function ShortsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Rounded rectangle (phone shape) */}
      <rect x="6" y="3" width="12" height="18" rx="2" fill="currentColor" />
      
      {/* Play triangle in the center */}
      <path 
        d="M15 12L10 15V9L15 12Z" 
        fill="white" 
      />
    </svg>
  );
}
