import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  )
}

Meta.defaultProps = {
  title: "User Dashboard App",
  description: "A NextJS App",
  keywords: "dashboard, nextjs, app"
}

export default Meta;