import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4 flex flex-col" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=8"
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link className="text-blue-700 pb-4 font-bold" href="#">
              Technology
            </Link>
            <Link
              className="text-slate-900 text-3xl font-bold hover:text-gray-70 pb-4"
              href={`articles/${article.id}`}
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">
              published on {article.createdAt}
            </p>
            <Link className="text-slate-900 pb-6" href="#">
            {article.content}
            </Link>
            <Link href="#" className="text-pink-800 hover:text-black">
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
