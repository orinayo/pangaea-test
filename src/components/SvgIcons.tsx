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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 19l-7-7 7-7"
    />
  </svg>
)

export const ExclamationIcon: SvgIcon = ({
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const EmptyIcon: SvgIcon = ({
  fillColor = 'none',
  classes = 'h-6 w-6',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -12 512.00032 512"
    className={classes}
    fill={fillColor}
    stroke="currentColor"
  >
    <path
      d="m279 90.0625-179.132812 98.363281 156.132812 85.734375 179.132812-98.363281zm0 0"
      fill="#fea02c"
    />
    <path
      d="m105.070312 393.699219 151.039063 82.9375v-202.480469l-151.039063-82.9375zm0 0"
      fill="#ffc66c"
    />
    <path
      d="m440.929688 375.699219v-191.472657l-108.929688 147.148438-38-18.5.109375 143.445312zm0 0"
      fill="#ffb954"
    />
    <g fill="#feda9b">
      <path d="m285 261.15625 59.183594 59.179688 157.816406-86.65625-59.183594-59.179688zm0 0" />
      <path d="m36.667969 247.011719 159.109375 87.367187 60.222656-60.222656-159.109375-87.367188zm0 0" />
      <path d="m440.929688 172.613281 60.667968-60.660156-156.527344-85.953125-60.667968 60.667969zm0 0" />
      <path d="m43 98.546875 57.765625 57.761719 155.234375-85.238282-57.765625-57.761718zm0 0" />
    </g>
    <path d="m455.074219 172.613281 53.996093-53.996093c2.226563-2.222657 3.273438-5.367188 2.828126-8.480469-.441407-3.113281-2.328126-5.839844-5.085938-7.355469l-64.914062-35.644531c-4.839844-2.65625-10.917969-.886719-13.578126 3.953125-2.65625 4.84375-.890624 10.921875 3.953126 13.578125l53.234374 29.230469-46.339843 46.335937-166.667969-91.519531 46.335938-46.335938 46.839843 25.722656c4.839844 2.65625 10.921875.890626 13.578125-3.953124 2.660156-4.839844.890625-10.921876-3.953125-13.578126l-53.417969-29.335937c-3.898437-2.140625-8.742187-1.449219-11.882812 1.695313l-54 54-54-54c-3.144531-3.144532-7.988281-3.832032-11.882812-1.695313l-184.929688 101.546875c-2.757812 1.515625-4.644531 4.238281-5.085938 7.355469-.445312 3.113281.601563 6.257812 2.828126 8.480469l53.996093 53.996093-53.996093 53.992188c-2.226563 2.226562-3.273438 5.367187-2.828126 8.484375.441407 3.113281 2.328126 5.839844 5.085938 7.351562l55.882812 30.6875v102.570313c0 3.652343 1.988282 7.011719 5.1875 8.769531l184.929688 101.542969c1.5.824219 3.15625 1.234375 4.8125 1.234375s3.3125-.410156 4.8125-1.234375l184.929688-101.542969c3.199218-1.757812 5.1875-5.117188 5.1875-8.769531v-102.570313l55.882812-30.683594c2.757812-1.515624 4.644531-4.242187 5.085938-7.355468.445312-3.113282-.601563-6.257813-2.828126-8.480469zm-199.074219 90.132813-164.152344-90.136719 164.152344-90.140625 164.152344 90.140625zm-62.832031-240.367188 46.332031 46.335938-166.667969 91.519531-46.335937-46.335937zm-120.328125 162.609375 166.667968 91.519531-46.339843 46.339844-166.671875-91.519531zm358.089844 184.796875-164.929688 90.5625v-102.222656c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v102.222656l-164.929688-90.5625v-85.671875l109.046876 59.878907c1.511718.828124 3.167968 1.234374 4.808593 1.234374 2.589844 0 5.152344-1.007812 7.074219-2.929687l54-54 54 54c1.921875 1.925781 4.484375 2.929687 7.074219 2.929687 1.640625 0 3.296875-.40625 4.808593-1.234374l109.046876-59.878907zm-112.09375-46.9375-46.339844-46.34375 166.667968-91.515625 46.34375 46.335938zm0 0" />
    <path d="m404.800781 68.175781c2.628907 0 5.199219-1.070312 7.070313-2.933593 1.859375-1.859376 2.929687-4.4375 2.929687-7.066407 0-2.632812-1.070312-5.210937-2.929687-7.070312-1.859375-1.863281-4.441406-2.929688-7.070313-2.929688-2.640625 0-5.210937 1.066407-7.070312 2.929688-1.871094 1.859375-2.929688 4.4375-2.929688 7.070312 0 2.628907 1.058594 5.207031 2.929688 7.066407 1.859375 1.863281 4.441406 2.933593 7.070312 2.933593zm0 0" />
    <path d="m256 314.925781c-2.628906 0-5.210938 1.066407-7.070312 2.929688-1.859376 1.867187-2.929688 4.4375-2.929688 7.070312 0 2.636719 1.070312 5.207031 2.929688 7.078125 1.859374 1.859375 4.441406 2.921875 7.070312 2.921875s5.210938-1.0625 7.070312-2.921875c1.859376-1.871094 2.929688-4.441406 2.929688-7.078125 0-2.632812-1.070312-5.203125-2.929688-7.070312-1.859374-1.863281-4.441406-2.929688-7.070312-2.929688zm0 0" />
  </svg>
)
