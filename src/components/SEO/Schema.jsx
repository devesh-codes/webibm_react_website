import { Helmet } from "react-helmet-async";

const Schema = ({ data }) => (
  <Helmet>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  </Helmet>
);

export default Schema;