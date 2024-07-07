import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import TypographyH1 from "./TypographyH1";
import TypographyH2 from "./TypographyH2";
import TypographyH3 from "./TypographyH3";

const defaultComponents = {
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    return <TypographyH1 {...props}>{props.children}</TypographyH1>;
  },
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    return <TypographyH2 {...props}>{props.children}</TypographyH2>;
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

const CustomMDX = ({ source, options, components }: MDXRemoteProps) => {
  return (
    <MDXRemote
      source={source}
      options={{
        ...options,
        mdxOptions: {
          remarkPlugins: [[remarkGfm], [remarkBreaks]],
          rehypePlugins: [
            [rehypeSlug],
            [
              rehypeToc,
              {
                headings: ["h1", "h2", "h3"],
              },
            ],
            [rehypeAutolinkHeadings, { className: "anchor" }],
            [rehypePrettyCode, { theme: "one-dark-pro" }],
          ],
        },
      }}
      components={{ ...defaultComponents, ...(components || {}) }}
    />
  );
};

export default CustomMDX;
