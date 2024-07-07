import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const ARTICLES_PATH = "articles/";
const ABSOLUTE_PATH = `${process.cwd()}/${ARTICLES_PATH}`;

export const getAllMD = async (lang: string = "en"): Promise<Slug[]> => {
  const absoluteMDPath = `${ABSOLUTE_PATH}${lang}/**/*.mdx`;
  const foundMDPathList = sync(absoluteMDPath);
  return foundMDPathList.map((path) => {
    const md = fs.readFileSync(path, "utf-8");
    const { data: frontMatter } = matter(md);
    const slug = path
      .replace(`${ARTICLES_PATH}${lang}/`, ARTICLES_PATH)
      .slice(path.indexOf(ARTICLES_PATH))
      .replace(".mdx", "");
    const title = frontMatter?.title ?? slug.slice(slug.lastIndexOf("/") + 1);
    return { title, slug };
  });
};

export const getMD = async ({ lang = "en", slug }: Slug): Promise<Slug> => {
  const mdList = await getAllMD(lang);
  const foundMD = mdList.find((md) => md.slug === `${ARTICLES_PATH}${slug}`);
  if (!foundMD) throw new Error("No article found");
  return {
    ...foundMD,
    slug: foundMD.slug.replace(ARTICLES_PATH, `${ARTICLES_PATH}${lang}/`),
  };
};

export const parseMDX = async ({ lang = "en", slug }: Slug) => {
  try {
    const md = await getMD({ lang, slug });
    const mdFile = fs.readFileSync(`${md.slug}.mdx`, "utf-8");
    const { data: frontMatter, content } = matter(mdFile);
    return {
      frontMatter,
      content,
    };
  } catch (e) {
    console.error(e);
  }
};
