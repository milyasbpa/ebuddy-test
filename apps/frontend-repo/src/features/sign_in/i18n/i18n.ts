"use client";
import { LocaleRoute } from "@/core/app/router/constants";
import en from "./locales/en.json";
const dictionaries: { [key: string]: typeof en } = {
  en: en,
};

export const getDictionaries = (locale?: string | string[]) =>
  dictionaries[String(locale ?? LocaleRoute.default)];
