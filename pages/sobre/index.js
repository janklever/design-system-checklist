import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./about.module.css";

const AboutText = () => {
  return (
    <p className={s.text}>
      Olá, nós somos{" "}
      <a
        className={s.link}
        href="https://twitter.com/ardakaracizmeli"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arda Karacizmeli
      </a>
      ,{" "}
      <a
        className={s.link}
        href="https://twitter.com/blvdmitry"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dmitry Belyaev
      </a> e {" "}
      <a
        className={s.link}
        href="https://www.linkedin.com/in/stevenbaguley/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Steven Baguley
      </a>
      .
      <br />
      <br />
      Trabalhamos em sistemas de design há muito tempo. E identificamos as semelhanças que todos compartilham. Este site é uma coleção de práticas recomendadas para ajudá-lo a criar sistemas de design abrangentes e robustos onde quer que você trabalhe.
      <br />
      <br />
      Nossas categorias podem não se parecer exatamente com o sistema que você planejou (ou já tem). Mas isso não pretende ser uma lista definitiva de itens para cada sistema de design. É um conjunto de diretrizes para você acompanhar tudo o que deseja verificar para fornecer uma experiência de usuário sólida.
       <br />
       <br />
       Tudo o que você vê aqui é de código aberto. Se você gostaria de ver conteúdo adicional neste site ou se você tiver comentários, por favor{" "}
      <a
        className={s.link}
        href="https://github.com/ardakaracizmeli/design-system-checklist"
        target="_blank"
        rel="noopener noreferrer"
      >
        contribua
      </a>
      .
       <br />
       <br />
       Adaptação para o português por{" "}
      <a
        className={s.link}
        href="https://janklever.work"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jan Klever
      </a>
      .
    </p>
  );
};

const AboutRoute = ({ tCore }) => {
  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero title={tCore.about} subtitle={<AboutText />} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const tCore = (await import(`../../src/translations/${locale}/core`)).default;

  return {
    props: { tCore },
  };
}

export default AboutRoute;
