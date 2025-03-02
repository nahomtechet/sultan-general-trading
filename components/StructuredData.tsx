import { FC } from "react";
import Head from "next/head";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

const StructuredData: FC<StructuredDataProps> = ({ data }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default StructuredData;
