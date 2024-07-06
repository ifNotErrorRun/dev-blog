import fs from "fs";
import matter from "gray-matter";
import { getArticles } from "./getArticles";

const ARTICLES_PATH = "articles/";

export async function parseArticle(lang: string, slugs: string[]) {
  try {
    const postPath = await getArticles(lang, slugs);
    if (!postPath) return console.error("No post found");

    const postPathFileSlug = postPath.slug.replace(
      ARTICLES_PATH,
      `${ARTICLES_PATH}${lang}/`
    );
    const markdownFile = fs.readFileSync(`${postPathFileSlug}.mdx`, "utf-8");
    const { data: frontMatter, content } = matter(markdownFile);
    return {
      frontMatter,
      content,
    };
  } catch (e) {
    console.error(e);
  }
}
