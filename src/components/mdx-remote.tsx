import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import TypographyH1 from "./atom/TypographyH1";
import TypographyH3 from "./atom/TypographyH3";

export const components = {
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    return <TypographyH1 {...props}>{props.children}</TypographyH1>;
  },
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    return <TypographyH3 {...props}>{props.children}</TypographyH3>;
  },
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
