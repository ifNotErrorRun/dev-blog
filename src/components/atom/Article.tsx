"use client";

import { useParams } from "next/navigation";
import TypographyH1 from "./TypographyH1";

const Article = () => {
  const { title } = useParams();
  return (
    <div>
      <TypographyH1>{title}</TypographyH1>
      <p className="mt-5">test article body</p>
    </div>
  );
};

export default Article;
