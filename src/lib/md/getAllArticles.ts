import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const ARTICLES_PATH = "articles";
const ABSOLUTE_PATH = `${process.cwd()}/${ARTICLES_PATH}`;

const getAllArticles = async (lang: string): Promise<Slug[]> => {
  const targetArticlePath = `${ABSOLUTE_PATH}/${lang}/**/*.mdx`;
  const foundPaths = sync(targetArticlePath);
  return foundPaths.map((path) => {
    const markdownFile = fs.readFileSync(path, "utf-8");
    const { data: frontMatter } = matter(markdownFile);
    const slug = path
      .replace(`${ARTICLES_PATH}/${lang}`, ARTICLES_PATH)
      .slice(path.indexOf(ARTICLES_PATH))
      .replace(".mdx", "");
    const title = frontMatter?.title ?? slug.slice(slug.lastIndexOf("/") + 1);
    return { title, slug };
  });
};

export default getAllArticles;
