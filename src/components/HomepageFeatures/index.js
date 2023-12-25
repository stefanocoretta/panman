import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Convert between formats',
    Svg: 'none',
    description: (
      <>
        Pandoc allows you to convert text to and from a variety of formants. Among these: Markdown, LaTeX, Microsoft Word, HTML, EPUB, and many more.
      </>
    ),
  },
  {
    title: 'Simplify text authoring',
    Svg: 'none',
    description: (
      <>
        Pandoc's Markdown extends John Gruber’s Markdown with essential writing tools, like cross-references, bibliographies, maths, and a more flexible syntax for tables, just to mention a few.
      </>
    ),
  },
  {
    title: 'Create anything',
    Svg: 'none',
    description: (
      <>
        From a single source document, you can create PDFs, web pages, eBooks, presentation slides, ...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
