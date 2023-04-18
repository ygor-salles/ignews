import Head from "next/head";
import Prismic from "@prismicio/client";

import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2023</time>
            <strong>Creating a Morepo with Lerna & Yarn Workspace</strong>
            <p>
              The following command is run locally in your Next.js project so
              you can build Custom Types for your pages. Once you have done
              that, you will be brought back here to start adding content to
              your website pages.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2023</time>
            <strong>Creating a Morepo with Lerna & Yarn Workspace</strong>
            <p>
              The following command is run locally in your Next.js project so
              you can build Custom Types for your pages. Once you have done
              that, you will be brought back here to start adding content to
              your website pages.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2023</time>
            <strong>Creating a Morepo with Lerna & Yarn Workspace</strong>
            <p>
              The following command is run locally in your Next.js project so
              you can build Custom Types for your pages. Once you have done
              that, you will be brought back here to start adding content to
              your website pages.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic?.query(
    [Prismic?.predicates?.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log("response", response);

  return {
    props: {},
  };
};
