import { sync } from "glob";

interface Slug {
  slug: string;
}

const ARTICLES_PATH = "articles";
const POST_PATH = `${process.cwd()}/${ARTICLES_PATH}`;

const getAllArticles = async (lang: string): Promise<Slug[]> => {
  const postPaths = sync(`${POST_PATH}/${lang}/**/*.mdx`);
  const paths = postPaths
    .map((postPath) =>
      postPath.replace(`${ARTICLES_PATH}/${lang}`, `${lang}/${ARTICLES_PATH}`)
    )
    .map((postPath) => {
      return {
        slug: postPath
          .slice(postPath.indexOf(ARTICLES_PATH))
          .replace(".mdx", ""),
      };
    });
  return paths;
};

export default getAllArticles;
