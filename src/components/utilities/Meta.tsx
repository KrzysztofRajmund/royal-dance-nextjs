import Head from "next/head";

const Meta = ({
  keywords,
  type,
  webUrl,
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta property="og:url" content={webUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Royal Dance Szczecin",
  keywords: "szkoła tańca szczecin",
  description:
    "Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin",
  ogTitle: "Royal Dance Szkoła Tańca",
};
export default Meta;
