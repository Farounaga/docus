import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import heroAnimation from './Hacker.json';
import Lottie from 'lottie-react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // Original homepage layout commented out:
  /*
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
  */
  return (
    <Layout>
      <header className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.heroText}>
            <h1>Bienvenue</h1>
            <p>Voici mon portfolio développé avec Docusaurus</p>
            <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/blog">
              Voir le blog
            </Link>

            <Link
              className="button button--primary button--lg"
              to="/docs/presentation/introduction">
              Présentation
            </Link>
          </div>
          </div>

          <div className={styles.heroAnimWrapper}>
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              className={styles.heroAnim}
            />
          </div>

        </div>
      </header>
    </Layout>
  );
}
