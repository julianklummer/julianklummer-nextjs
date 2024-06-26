import Accessiblity from "@/icons/skillList/accessibility.svg";
import Affinity from "@/icons/skillList/affinity.svg";
import Angular from "@/icons/skillList/angular.svg";
import AtomicDesign from "@/icons/skillList/atomic-design.svg";
import Babel from "@/icons/skillList/babel.svg";
import Bootstrap from "@/icons/skillList/bootstrap.svg";
import Css from "@/icons/skillList/css.svg";
import Cypress from "@/icons/skillList/cypress.svg";
import DesignThinking from "@/icons/skillList/design-thinking.svg";
import Docker from "@/icons/skillList/docker.svg";
import Drupal from "@/icons/skillList/drupal.svg";
import ElasticSearch from "@/icons/skillList/elastic-search.svg";
import Eslint from "@/icons/skillList/eslint.svg";
import Excel from "@/icons/skillList/excel.svg";
import FluidDesign from "@/icons/skillList/fluid-design.svg";
import Fp from "@/icons/skillList/fp.svg";
import Git from "@/icons/skillList/git.svg";
import Github from "@/icons/skillList/github.svg";
import Gitlab from "@/icons/skillList/gitlab.svg";
import Graphql from "@/icons/skillList/graphql.svg";
import Gulp from "@/icons/skillList/gulp.svg";
import Html from "@/icons/skillList/html.svg";
import Internationalization from "@/icons/skillList/internationalization.svg";
import Javascript from "@/icons/skillList/javascript.svg";
import Jest from "@/icons/skillList/jest.svg";
import Linux from "@/icons/skillList/linux.svg";
import Logic from "@/icons/skillList/logic.svg";
import MacOs from "@/icons/skillList/mac-os.svg";
import Markdown from "@/icons/skillList/markdown.svg";
import Mui from "@/icons/skillList/mui.svg";
import Mysql from "@/icons/skillList/mysql.svg";
import Nextjs from "@/icons/skillList/nextjs.svg";
import Nodejs from "@/icons/skillList/nodejs.svg";
import Oop from "@/icons/skillList/oop.svg";
import Php from "@/icons/skillList/php.svg";
import PhpStorm from "@/icons/skillList/phpstorm.svg";
import Postgresql from "@/icons/skillList/postgresql.svg";
import Powerpoint from "@/icons/skillList/powerpoint.svg";
import Prettier from "@/icons/skillList/prettier.svg";
import Python from "@/icons/skillList/python.svg";
import ReactIcon from "@/icons/skillList/react.svg";
import ResponsiveDesign from "@/icons/skillList/responsive-design.svg";
import Rust from "@/icons/skillList/rust.svg";
import Sass from "@/icons/skillList/sass.svg";
import Scrum from "@/icons/skillList/scrum.svg";
import Security from "@/icons/skillList/security.svg";
import Seo from "@/icons/skillList/seo.svg";
import SourceCode from "@/icons/skillList/source-code.svg";
import Sql from "@/icons/skillList/sql.svg";
import Storybook from "@/icons/skillList/storybook.svg";
import Strapi from "@/icons/skillList/strapi.svg";
import Stylelint from "@/icons/skillList/stylelint.svg";
import Tailwind from "@/icons/skillList/tailwind.svg";
import Tdd from "@/icons/skillList/tdd.svg";
import Typescript from "@/icons/skillList/typescript.svg";
import VisualStudio from "@/icons/skillList/visual-studio.svg";
import Vue from "@/icons/skillList/vue.svg";
import Webpack from "@/icons/skillList/webpack.svg";
import WebStorm from "@/icons/skillList/webstorm.svg";
import Word from "@/icons/skillList/word.svg";

type Props = {
  name: string;
};

export const SkillIcon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "accessibility":
      return <Accessiblity />;
    case "affinity":
      return <Affinity />;
    case "angular":
      return <Angular />;
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
    case "gitlab":
      return <Gitlab />;
    case "mysql":
      return <Mysql />;
    case "postgresql":
      return <Postgresql />;
    case "rust":
      return <Rust />;
    case "tailwind":
      return <Tailwind />;
    case "vue":
      return <Vue />;
    case "elastic-search":
      return <ElasticSearch />;
    case "mac-os":
      return <MacOs />;
    case "visual-studio":
      return <VisualStudio />;
    case "github":
      return <Github />;
    case "storybook":
      return <Storybook />;
    case "webstorm":
      return <WebStorm />;
    case "phpstorm":
      return <PhpStorm />;
    case "linux":
      return <Linux />;
    case "internationalization":
      return <Internationalization />;
    default:
      return <SourceCode />;
  }
};
