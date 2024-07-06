import "server-only";

const dictionaries: { [key: string]: any } = {
  en: () => import("./messages/en.json").then((module) => module.default),
  ko: () => import("./messages/ko.json").then((module) => module.default),
  jp: () => import("./messages/jp.json").then((module) => module.default),
};

export const getDictionary = async (lang: string) => dictionaries[lang]();
