import type { ComponentType, SVGProps } from 'react';
import Auth0 from 'components/icons/tech/auth0';
import AwsLambda from 'components/icons/tech/aws-lambda';
import Backbone from 'components/icons/tech/backbone';
import Bash from 'components/icons/tech/bash';
import Bitbucket from 'components/icons/tech/bitbucket';
import Chakra from 'components/icons/tech/chakra';
import Cypress from 'components/icons/tech/cypress';
import Docker from 'components/icons/tech/docker';
import Docusign from 'components/icons/tech/docusign';
import Expo from 'components/icons/tech/expo';
import Express from 'components/icons/tech/express';
import Firebase from 'components/icons/tech/firebase';
import Github from 'components/icons/tech/github';
import Gitlab from 'components/icons/tech/gitlab';
import GraphQL from 'components/icons/tech/graphql';
import Jquery from 'components/icons/tech/jquery';
import Mantine from 'components/icons/tech/mantine';
import MongoDB from 'components/icons/tech/mongodb';
import NextJS from 'components/icons/tech/nextjs';
import NodeJS from 'components/icons/tech/nodejs';
import PlayFramework from 'components/icons/tech/play-framework';
import ReactJS from 'components/icons/tech/reactjs';
import ReduxToolkit from 'components/icons/tech/redux-toolkit';
import Scala from 'components/icons/tech/scala';
import Selenium from 'components/icons/tech/selenium';
import SqlServer from 'components/icons/tech/sql-server';
import Typescript from 'components/icons/tech/typescript';
import Vite from 'components/icons/tech/vite';

const techIcons: Record<Tech, ComponentType<SVGProps<SVGElement>>> = {
  Auth0,
  'AWS Lambda': AwsLambda,
  'Backbone.js': Backbone,
  'Bash scripting': Bash,
  Bitbucket,
  'Chakra-UI': Chakra,
  Cypress,
  Docker,
  Docusign,
  Expo,
  Express,
  Firebase,
  Github,
  Gitlab,
  GraphQL,
  jQuery: Jquery,
  Mantine,
  MongoDB,
  'Next.js': NextJS,
  'Node.js': NodeJS,
  'Play Framework': PlayFramework,
  'React.js': ReactJS,
  'React Native': ReactJS,
  'Redux Toolkit': ReduxToolkit,
  Scala,
  Selenium,
  'Shell scripting': Bash,
  'SQL Server': SqlServer,
  Typescript,
  Vite,
};

type Props = {
  name: Tech;
} & SVGProps<SVGElement>;

export default ({ name, ...svgProps }: Props) => {
  const TechIcon = techIcons[name];

  if (!TechIcon) {
    return null;
  }

  return <TechIcon {...svgProps} />;
};
