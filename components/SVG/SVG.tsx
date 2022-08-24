import React, { ReactNode } from "react";

export const SVG = ({ icon = "" }: { icon: string }) => {
  switch (icon) {
    case "edit":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.258"
          height="16.258"
          viewBox="-1.5 -1.5 16.258 16.258"
        >
          <path
            d="m12.024-.75 3.484 3.484L3.895 14.347-.75 15.508l1.161-4.645L12.024-.75Z"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#0ff"
            fill="transparent"
            data-name="Path 659"
          />
        </svg>
      );

    case "delete":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.174"
          height="16.258"
          viewBox="-0.75 -0.75 15.174 16.258"
        >
          <g data-name="Group 1251">
            <path
              d="M.334 5.753v7.587c0 1.198.97 2.168 2.168 2.168h8.67c1.198 0 2.169-.97 2.169-2.168V5.753"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#ff6904"
              fill="transparent"
              data-name="Path 651"
            />
            <path
              d="M-.75 2.502h15.174"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#ff6904"
              fill="transparent"
              data-name="Path 652"
            />
            <path
              d="M4.67 2.502V-.75h4.335v3.252"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#ff6904"
              fill="transparent"
              data-name="Path 653"
            />
            <path
              d="M6.837 6.837v5.42"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#ff6904"
              fill="transparent"
              data-name="Path 654"
            />
            <path
              d="M10.089 6.837v5.42"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#ff6904"
              fill="transparent"
              data-name="Path 655"
            />
            <path
              d="M3.586 6.837v3.92"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#ff6904"
              fill="transparent"
              data-name="Path 656"
            />
          </g>
        </svg>
      );

    default:
      break;
  }
};
