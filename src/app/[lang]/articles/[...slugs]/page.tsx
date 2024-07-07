"use server";

import TypographyH1 from "@/components/atom/TypographyH1";
import CustomMDX from "@/components/atom/CustomMDX";
import { parseMDX } from "@/lib/md/md-utils";
import "./prose.css";

interface Props {
  params: { lang: string; slugs: string[] };
}

export default async function ArticlePage({ params: { lang, slugs } }: Props) {
  const slug = slugs.join("/");
  const md = await parseMDX({ lang, slug });
  return (
    <article className="relative prose dark:prose-invert dark:*:prose-invert max-w-3xl">
      <TypographyH1>{md?.frontMatter.title}</TypographyH1>
      {md?.content && <CustomMDX source={md.content} />}
    </article>
  );
}
