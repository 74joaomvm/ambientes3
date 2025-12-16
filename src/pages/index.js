import React from 'react';
import Layout from '@theme/Layout';
import { useDocusaurusContext } from '@docusaurus/core';
import MarkdownPage from '@site/src/pages/markdown-page.md'; // Importa o arquivo markdown

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Descrição do seu projeto"
    >
      <MarkdownPage /> {/* O conteúdo Markdown será renderizado aqui */}
    </Layout>
  );
}

export default Homepage;
