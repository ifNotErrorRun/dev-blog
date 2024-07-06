"use server";

import TypographyH1 from "@/components/atom/TypographyH1";
import { CustomMDX } from "@/components/mdx-remote";
import { parseArticle } from "@/lib/md/parseArticle";

interface Props {
  params: { lang: string; slugs: string[] };
}

export default async function ArticlePage({ params: { lang, slugs } }: Props) {
  const markdownFile = await parseArticle(lang, slugs);
  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate">
      <TypographyH1>{markdownFile?.frontMatter.title}</TypographyH1>
      {markdownFile?.content && <CustomMDX source={markdownFile.content} />}
    </article>
  );
}
