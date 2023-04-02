import styles from "./typoTest.module.scss";

export const TypoTest: React.FC = () => {
  return (
    <div className={styles.typoTest}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        ad.
      </h2>
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        ad.
      </h3>
      <h4>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        ad.
      </h4>
      <h5>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        ad.
      </h5>
      <h6>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        ad.
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque
        vel voluptatem asperiores aliquam maxime beatae, at nobis ullam aut
        doloribus, debitis illum reprehenderit non amet enim ipsum dolorem nisi
        similique! Iste accusamus veritatis consequuntur voluptatibus
        dignissimos repellendus expedita provident? Minus repellat ab similique
        ex consequatur accusantium expedita et aspernatur!
      </p>
    </div>
  );
};
