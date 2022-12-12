// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../../models";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article | Article[]>
) {
  const { slug } = req.query;

  let slugValue = "";
  if (typeof slug === "string") {
    slugValue = slug;
  }

  const articles: Article[] = [
    { id: "1", title: "test", slug: "test", body: "Test" },
    { id: "2", title: "test2", slug: "test-2", body: "test 2" },
    {
      id: "3",
      title:
        "ทําไมผู้ป่วยถึงเลือกเกาหลีใต้ในการรักษาโรคมะเร็งและมะเร็งชนิดที่พวกเขารักษาได้ดีกว่า",
      slug: "ทําไมผู้ป่วยถึงเลือกเกาหลีใต้ในการรักษาโรคมะเร็งและมะเร็งชนิดที่พวกเขารักษาได้ดีกว่า",
      body: "test 3 ทําไมผู้ป่วยถึงเลือกเกาหลีใต้ในการรักษาโรคมะเร็งและมะเร็งชนิดที่พวกเขารักษาได้ดีกว่า",
    },
    // {
    //   id: "4",
    //   title:
    //     "f48a093378588a19f5519a6b2474cc5601ad12d8b1774535175ad31321e0909dc3c24301ce961d33a1a37058e6cf5d5d7a54f08500b83d8a398ac0b2d542ce77a9f86cdb66943b30df278b9733a412049bfa651f6b3d8046ad8ab01bfa78825020e4919a10bee6acc039617564648d355251496379bd30ff60e1640f1411",
    //   slug: "f48a093378588a19f5519a6b2474cc5601ad12d8b1774535175ad31321e0909dc3c24301ce961d33a1a37058e6cf5d5d7a54f08500b83d8a398ac0b2d542ce77a9f86cdb66943b30df278b9733a412049bfa651f6b3d8046ad8ab01bfa78825020e4919a10bee6acc039617564648d355251496379bd30ff60e1640f1411",
    //   body: "f48a093378588a19f5519a6b2474cc5601ad12d8b1774535175ad31321e0909dc3c24301ce961d33a1a37058e6cf5d5d7a54f08500b83d8a398ac0b2d542ce77a9f86cdb66943b30df278b9733a412049bfa651f6b3d8046ad8ab01bfa78825020e4919a10bee6acc039617564648d355251496379bd30ff60e1640f1411",
    // },
  ];
  if (slugValue) {
    const article = articles.find((x) => x.slug === slugValue);
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404);
    }
  } else {
    res.status(200).json(articles);
  }
}
