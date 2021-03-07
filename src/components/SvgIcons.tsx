import React from 'react'

interface SvgIconProps {
  strokeWidth?: number
  fillColor?: string
  classes?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SvgIcon extends React.FC<SvgIconProps> {}

export const HamburgerIcon: SvgIcon = ({
  strokeWidth = 2,
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CartIcon: SvgIcon = ({
  strokeWidth = 2,
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>Cart</title>
    <path
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CloseIcon: SvgIcon = ({
  strokeWidth = 2,
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ShopIcon: SvgIcon = ({
  strokeWidth = 2,
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const LearnIcon: SvgIcon = ({
  strokeWidth = 2,
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ChevronDownIcon: SvgIcon = ({
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={classes}
    fill={fillColor}
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
)

export const ChevronLeftIcon: SvgIcon = ({
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classes}
    fill={fillColor}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
)
