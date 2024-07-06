import getAllArticles from "./getAllArticles";

interface Slug {
  slug: string;
}

export async function getArticles(
  lang: string,
  slugs: string[]
): Promise<Slug | undefined> {
  const filePaths = await getAllArticles(lang);
  const slug = `articles/${slugs.join("/")}`;
  const postsFind = filePaths.find((filePath) => filePath.slug === slug);
  return postsFind;
}
