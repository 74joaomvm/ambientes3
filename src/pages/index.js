import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MarkdownPage from '@site/src/pages/markdown-page.md'; // importar o arquivo markdown

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Descrição do seu projeto"
    >
      <MarkdownPage /> {/* Aqui, o conteúdo markdown será renderizado */}
    </Layout>
  );
}

export default Homepage;
