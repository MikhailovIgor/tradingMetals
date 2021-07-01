import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Withdraw(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.586 10.031h-1.703l1.186-2.247a.269.269 0 00-.033-.304.276.276 0 00-.085-.068l-6.046-3.176a.281.281 0 00-.214-.018.265.265 0 00-.166.127l-2.993 5.686H5.688c-1.028 0-1.844.857-1.844 1.885v9.264c0 1.028.816 1.883 1.844 1.883h12.898c1.028 0 1.852-.855 1.852-1.883v-9.264c0-1.028-.825-1.885-1.852-1.885zm-6.693-5.175l5.547 2.91-1.193 2.265h-.528l.25-.465a.275.275 0 00-.107-.368c-.471-.276-.594-.876-.3-1.463a.28.28 0 00-.12-.374l-2.07-1.087a.281.281 0 00-.378.114c-.316.576-.866.806-1.37.57a.277.277 0 00-.368.114l-1.56 2.96h-.528l2.725-5.176zm3.464 4.665l-.273.51H10.33l1.309-2.48c.626.171 1.274-.078 1.7-.663l1.611.845c-.237.68-.08 1.37.406 1.788zm3.229 12.98H5.688c-.718 0-1.282-.603-1.282-1.32v-9.265c0-.717.564-1.322 1.282-1.322h12.898c.718 0 1.289.605 1.289 1.322v1.444h-2.459a1.86 1.86 0 00-1.854 1.865v2.646a1.857 1.857 0 001.854 1.864h2.459v1.445c0 .718-.572 1.32-1.29 1.32zm1.289-8.579v5.25h-2.459a1.293 1.293 0 01-1.291-1.301v-2.646a1.295 1.295 0 011.291-1.303h2.459z"
        fill="#2F80ED"
        stroke="#2F80ED"
        strokeWidth={0.2}
      />
      <Path
        d="M18.047 17.756a.281.281 0 00.281-.281V15.62a.281.281 0 10-.562 0v1.854a.282.282 0 00.28.28zM6.724 7.305a3.174 3.174 0 100-6.349 3.174 3.174 0 000 6.349zm0-5.786a2.612 2.612 0 110 5.223 2.612 2.612 0 010-5.223z"
        fill="#2F80ED"
      />
      <Path
        d="M6.75 5.442a.278.278 0 00-.08-.002.468.468 0 01-.414-.465.281.281 0 00-.562 0 1.032 1.032 0 00.727.985v.18a.281.281 0 10.563 0v-.167a1.03 1.03 0 00-.26-2.028.468.468 0 01-.126-.918.279.279 0 00.225-.007.469.469 0 01.37.457.281.281 0 00.562 0 1.032 1.032 0 00-.771-.997v-.136a.281.281 0 10-.563 0v.148a1.03 1.03 0 00.303 2.015.468.468 0 01.027.935z"
        fill="#2F80ED"
      />
    </Svg>
  )
}

export default Withdraw;
