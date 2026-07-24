import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.webibm.com";

export default function SEO({
  title,
  description,
  canonical,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={`${SITE_URL}${canonical}`}
      />
    </Helmet>
  );
}