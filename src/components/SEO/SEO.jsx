import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  image,
  schema,
}) => {
   
  return (
    <>
    
    <Helmet>
      {/* Basic SEO */}
      git 
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {canonical && (
        <meta property="og:url" content={canonical} />
      )}

      {image && (
        <meta property="og:image" content={image} />
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />

      {image && (
        <meta name="twitter:image" content={image} />
      )}

      {/* JSON-LD Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
      
    </Helmet>

    </>
  );
};

export default SEO;