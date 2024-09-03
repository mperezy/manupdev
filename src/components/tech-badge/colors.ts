type BadgeColors = {
  background: string;
  textColor?: string;
  borderColor?: string;
};

const colors: Record<Tech, BadgeColors> = {
  Auth0: {
    background: '#EB5424B3',
  },

  'AWS Lambda': {
    background: '#E78E45CC',
  },

  'Backbone.js': {
    background: '#0071B5B3',
  },

  'Bash scripting': {
    background: '',
  },

  Bitbucket: {
    background: '#205081',
  },

  'Chakra-UI': {
    background: '#76cad4',
    textColor: '#464646',
  },

  Cypress: {
    background: '#38ef7dB3',
    textColor: '#464646',
  },

  Docker: {
    background: '#0DB7ED',
  },

  Docusign: {
    background: '#E42815B3',
  },

  Expo: {
    background: '#FFF',
    textColor: '#464646',
    borderColor: '#000',
  },

  Express: {
    background: '#FFF',
    textColor: '#464646',
    borderColor: '#000',
  },

  Firebase: {
    background: '#F5820DE6',
  },

  Github: {
    background: '#FFF',
    textColor: '#464646',
    borderColor: '#000',
  },

  Gitlab: {
    background: '#FCA326B3',
    textColor: '#464646',
  },

  GraphQL: {
    background: '#E1009866',
  },

  jQuery: {
    background: '#7ACEF4B3',
    textColor: '#464646',
  },

  Mantine: {
    background: '#339AF0B3',
  },

  MongoDB: {
    background: '#6BA849B2',
  },

  'Next.js': {
    background: '#FFF',
    textColor: '#464646',
    borderColor: '#000',
  },

  'Node.js': {
    background: '#6CC24A',
  },

  'Play Framework': {
    background: '#A5DB5CB2',
    textColor: '#464646',
  },

  'React.js': {
    background: '#0A97B0CC',
  },

  'React Native': {
    background: '#0A97B0CC',
  },

  'Redux Toolkit': {
    background: '#652DC3A5',
  },

  Scala: {
    background: '#D91111B2',
  },

  Selenium: {
    background: '',
  },

  'Shell scripting': {
    background: '',
  },

  'SQL Server': {
    background: '#FFF',
    textColor: '#464646',
    borderColor: '#000',
  },

  Typescript: {
    background: '#3178C6B3',
  },

  Vite: {
    background: '#FFA800B3',
    textColor: '#464646',
  },
};

export default colors;
