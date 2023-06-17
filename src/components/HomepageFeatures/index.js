import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ Collection',
    Svg: require('@site/static/img/10119973341678815049.svg').default,
    description: (
      <>
        KERISSE is a technical documentation site. You'll find information on decentralized identity, verifiable credentials, and related technologies: KERI, ACDC and more.
      </>
    ),
  },
  {
    title: '⚡ Search Engine',
    Svg: require('@site/static/img/1626701221679047824.svg')
      .default,
    description: <>KERISSE is a sophisticated search engine. It searches this documentation site, AND other relevant sites, like Gleif.org, important blogposts in the field and more.</>,
  },
  {
    title: '⚡ Chatbot',
    Svg: require('@site/static/img/5553419701679821143.svg')
      .default,
    description: <>You can also have a conversation with KERISSE via our chatbot.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="margin-top--lg text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="margin-top--lg text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="homepage--heading">Personal learning environment and consensus building with others.</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
