// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Info24RegularIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Info24RegularIcon(props: Info24RegularIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.998 12 1.998zm0 1.5a8.502 8.502 0 100 17.003A8.502 8.502 0 0012 3.5zm-.004 7a.75.75 0 01.744.648l.007.102.003 5.502a.75.75 0 01-1.493.102l-.007-.101-.003-5.502a.75.75 0 01.75-.75zM12 7.003A.999.999 0 1112 9a.999.999 0 010-1.997z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Info24RegularIcon;
/* prettier-ignore-end */
