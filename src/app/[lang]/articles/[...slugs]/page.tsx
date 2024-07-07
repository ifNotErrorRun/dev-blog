"use server";

import TypographyH1 from "@/components/atom/TypographyH1";
import { CustomMDX } from "@/components/mdx-remote";
import { parseArticle } from "@/lib/md/parseArticle";
import "./prose.css";

interface Props {
  params: { lang: string; slugs: string[] };
}

export default async function ArticlePage({ params: { lang, slugs } }: Props) {
  const markdownFile = await parseArticle(lang, slugs);
  return (
    <article className="relative prose dark:prose-invert dark:*:prose-invert max-w-3xl">
      <TypographyH1>{markdownFile?.frontMatter.title}</TypographyH1>
      {markdownFile?.content && <CustomMDX source={markdownFile.content} />}
    </article>
  );
}
