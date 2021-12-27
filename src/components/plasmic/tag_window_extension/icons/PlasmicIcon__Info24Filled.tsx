// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Info24FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Info24FilledIcon(props: Info24FilledIconProps) {
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
          "M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.998 12 1.998zm-.004 8.25a1 1 0 00-.992.885l-.007.116.003 5.502.007.116a1 1 0 001.987 0L13 16.75l-.003-5.502-.007-.117a1 1 0 00-.994-.882zM12 6.5a1.252 1.252 0 100 2.503A1.252 1.252 0 0012 6.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Info24FilledIcon;
/* prettier-ignore-end */
