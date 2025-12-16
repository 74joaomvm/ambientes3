import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aplicação Intuitiva',
    description: (
      <>
        A nossa aplicação é fácil de usar e foi projetada para simplificar a gestão do seu negócio de tabaco. Controle tudo com alguns cliques, desde o inventário até as vendas, de forma eficiente e intuitiva.
      </>
    ),
  },
  {
    title: 'Foco naquilo que é o essencial',
    description: (
      <>
        Queremos uma interface simples com tudo o que necessita de modo a que possa gerir tudo através de um clique!
      </>
    ),
  },
  {
    title: 'Gestão Eficiente',
    description: (
      <>
        Economize tempo e maximize resultados. A nossa aplicação ajuda a gerir o seu negócio com precisão, para que consiga se focar no que realmente importa - crescer e expandir no competitivo mercado de tabacarias.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
