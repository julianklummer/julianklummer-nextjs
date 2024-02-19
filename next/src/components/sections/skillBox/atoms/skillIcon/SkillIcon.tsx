import Accessiblity from "../../../../../../public/icons/skillList/accessibility.svg";
import Affinity from "../../../../../../public/icons/skillList/affinity.svg";
import AtomicDesign from "../../../../../../public/icons/skillList/atomic-design.svg";
import Babel from "../../../../../../public/icons/skillList/babel.svg";
import Bootstrap from "../../../../../../public/icons/skillList/bootstrap.svg";
import Css from "../../../../../../public/icons/skillList/css.svg";
import Cypress from "../../../../../../public/icons/skillList/cypress.svg";
import DesignThinking from "../../../../../../public/icons/skillList/design-thinking.svg";
import Docker from "../../../../../../public/icons/skillList/docker.svg";
import Drupal from "../../../../../../public/icons/skillList/drupal.svg";
import Eslint from "../../../../../../public/icons/skillList/eslint.svg";
import Excel from "../../../../../../public/icons/skillList/excel.svg";
import FluidDesign from "../../../../../../public/icons/skillList/fluid-design.svg";
import Fp from "../../../../../../public/icons/skillList/fp.svg";
import Git from "../../../../../../public/icons/skillList/git.svg";
import Graphql from "../../../../../../public/icons/skillList/graphql.svg";
import Gulp from "../../../../../../public/icons/skillList/gulp.svg";
import Html from "../../../../../../public/icons/skillList/html.svg";
import Javascript from "../../../../../../public/icons/skillList/javascript.svg";
import Jest from "../../../../../../public/icons/skillList/jest.svg";
import Logic from "../../../../../../public/icons/skillList/logic.svg";
import Markdown from "../../../../../../public/icons/skillList/markdown.svg";
import Mui from "../../../../../../public/icons/skillList/mui.svg";
import Nextjs from "../../../../../../public/icons/skillList/nextjs.svg";
import Nodejs from "../../../../../../public/icons/skillList/nodejs.svg";
import Oop from "../../../../../../public/icons/skillList/oop.svg";
import Php from "../../../../../../public/icons/skillList/php.svg";
import Powerpoint from "../../../../../../public/icons/skillList/powerpoint.svg";
import Prettier from "../../../../../../public/icons/skillList/prettier.svg";
import Python from "../../../../../../public/icons/skillList/python.svg";
import ReactIcon from "../../../../../../public/icons/skillList/react.svg";
import ResponsiveDesign from "../../../../../../public/icons/skillList/responsive-design.svg";
import Sass from "../../../../../../public/icons/skillList/sass.svg";
import Scrum from "../../../../../../public/icons/skillList/scrum.svg";
import Security from "../../../../../../public/icons/skillList/security.svg";
import Seo from "../../../../../../public/icons/skillList/seo.svg";
import SourceCode from "../../../../../../public/icons/skillList/source-code.svg";
import Sql from "../../../../../../public/icons/skillList/sql.svg";
import Strapi from "../../../../../../public/icons/skillList/strapi.svg";
import Stylelint from "../../../../../../public/icons/skillList/stylelint.svg";
import Tdd from "../../../../../../public/icons/skillList/tdd.svg";
import Typescript from "../../../../../../public/icons/skillList/typescript.svg";
import Webpack from "../../../../../../public/icons/skillList/webpack.svg";
import Word from "../../../../../../public/icons/skillList/word.svg";

interface Props {
  name: string;
}

export const SkillIcon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "accessibility":
      return <Accessiblity />;
    case "affinity":
      return <Affinity />;
    case "atomic-design":
      return <AtomicDesign />;
    case "babel":
      return <Babel />;
    case "bootstrap":
      return <Bootstrap />;
    case "css":
      return <Css />;
    case "drupal":
      return <Drupal />;
    case "eslint":
      return <Eslint />;
    case "excel":
      return <Excel />;
    case "fluid-design":
      return <FluidDesign />;
    case "git":
      return <Git />;
    case "graphql":
      return <Graphql />;
    case "gulp":
      return <Gulp />;
    case "html":
      return <Html />;
    case "javascript":
      return <Javascript />;
    case "jest":
      return <Jest />;
    case "logic":
      return <Logic />;
    case "markdown":
      return <Markdown />;
    case "mui":
      return <Mui />;
    case "nextjs":
      return <Nextjs />;
    case "nodejs":
      return <Nodejs />;
    case "php":
      return <Php />;
    case "powerpoint":
      return <Powerpoint />;
    case "python":
      return <Python />;
    case "react":
      return <ReactIcon />;
    case "responsive-design":
      return <ResponsiveDesign />;
    case "sass":
      return <Sass />;
    case "security":
      return <Security />;
    case "seo":
      return <Seo />;
    case "sql":
      return <Sql />;
    case "typescript":
      return <Typescript />;
    case "webpack":
      return <Webpack />;
    case "word":
      return <Word />;
    case "scrum":
      return <Scrum />;
    case "fp":
      return <Fp />;
    case "oop":
      return <Oop />;
    case "tdd":
      return <Tdd />;
    case "cypress":
      return <Cypress />;
    case "design-thinking":
      return <DesignThinking />;
    case "strapi":
      return <Strapi />;
    case "prettier":
      return <Prettier />;
    case "stylelint":
      return <Stylelint />;
    case "docker":
      return <Docker />;
    default:
      return <SourceCode />;
  }
};
