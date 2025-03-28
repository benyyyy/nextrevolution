"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News Article #{articleId}</h1>
      <p className="bg-green-300">Reading in: {lang.toUpperCase()}</p>

      {/* Language switcher */}
      <div className="language-options">
        <Link className="bg-red-300 m-1.5" href={`/articles/${articleId}?lang=en`}>English</Link> |
        <Link className="bg-red-300 m-1.5"  href={`/articles/${articleId}?lang=es`}>Español</Link> |
        <Link className="bg-red-300 m-1.5"  href={`/articles/${articleId}?lang=fr`}>Français</Link>
      </div>
    </div>
  );
}