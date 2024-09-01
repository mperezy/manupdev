/* eslint-disable max-len  */

type Work = {
  year: number;
  work: {
    title: string;
    roles: ('Frontend' | 'Backend' | 'Fullstack Dev' | 'Devops')[];
    description: string;
    verbose: string;
    technologiesUsed: string[];
  }[];
};

type Portfolio = Record<'professional' | 'personal', Work[]>;

const portfolio: Portfolio = {
  professional: [
    {
      year: 2018,
      work: [
        {
          title: 'Jemstep',
          roles: ['Fullstack Dev'],
          description:
            'By using Scala as main language I collaborated with team mates to solve bugs and implementing new features.',
          verbose: `Jemstep is a Fintech company based in South Africa and the U.S. to help customers grow their wealth by investing their money based on goals.
- First helping and collaborating with some Bonzzu partners in the fixing of bugs and implementing new features.
- I was involved in a feature improvement that allowed the creation/update of goal investments along with a joint user pulling out and setting their data to the investment.
- I helped to implement a new feature that allowed the clients to create and improve their investments based on recommended allocations by the bank, in this case, Citibank.
- I helped in an improvement proposed by a Jemptep's client, Citibank, to solve some security issues where some sensitive data were exposed in the web app across the whole HTML and in some Javascript files.
- I leaded the implementation of an improvement on the connection from the app to Docusign, this service is used to handle investment documentation and confidentiality agreements with the bank. The goal of this improvement was to implement the way how the app will send documents to DocuSign, previously this connection was made only with a user and password authentication, but given DocuSign's new documentation, a new authentication based on JWT was required.`,
          technologiesUsed: [
            'Play Framework',
            'Scala',
            'jQuery',
            'Backbonejs',
            'Cypress',
            'Selenium',
            'MongoDB',
            'Docker',
            'Docusign',
            'Github',
          ],
        },
      ],
    },
    {
      year: 2021,
      work: [
        {
          title: 'Positon',
          roles: ['Fullstack Dev'],
          description:
            'I was involved, alongside with a team mate, in the implementation of the main application from scratch.',
          verbose: '',
          technologiesUsed: [
            'Typescript',
            'React.js',
            'Next.js',
            'Node.js',
            'Express',
            'GraphQL',
            'SQL Server',
            'Github',
          ],
        },
      ],
    },
    {
      year: 2023,
      work: [
        {
          title: 'Blockdaemon',
          roles: ['Frontend'],
          description:
            'I collaborated by fixing bugs, made several improvements and implemented a whole new platform for offline crypto transactions in the project I was assigned.',
          verbose: `
- Assisting to fix bugs and implement new features in a focused project inside Blockdaemon company.
- Worked in a UI migration by moving all UI components made with Material-UI (License paid) to Mantine (No license paid required).
- Collaborated in an offline web app implementation, to help users to make crypto transfers without the use of the main web app.
- Techonologies used: Vite, ReactJs, Cypress, pnpm, GitLab`,
          technologiesUsed: [
            'Typescript',
            'React.js',
            'Vite',
            'Cypress',
            'Mantine',
            'Gitlab',
          ],
        },
      ],
    },
    {
      year: 2024,
      work: [
        {
          title: 'RCX Sports',
          roles: ['Frontend', 'Devops'],
          description:
            "Alongside with two team mates, we are working in the implementation of bunch of applications and, implemented the repo's CI/CD myself.",
          verbose: '',
          technologiesUsed: [
            'Typescript',
            'React.js',
            'Node.js',
            'Express',
            'Chakra-UI',
            'Shell scripting',
            'Bitbucket',
          ],
        },
      ],
    },
  ],
  personal: [
    {
      year: 2021,
      work: [
        {
          title: 'Passvault',
          roles: ['Frontend', 'Backend', 'Devops'],
          description:
            'In order to fix a personal problem, I developed a mobile/web application to create safe and secure passwords and store them in the cloud (Firebase)',
          verbose: '',
          technologiesUsed: [
            'Typescript',
            'React Native',
            'Redux Toolkit',
            'Expo',
            'Firebase',
            'AWS Lambda',
            'Github',
          ],
        },
      ],
    },
    {
      year: 2024,
      work: [
        {
          title: 'Next Role Based App',
          roles: ['Frontend', 'Backend', 'Devops'],
          description:
            'As a personal challenge I created a web application so an authenticated user, depending of the roles assigned, this user can consume (or not) certain resources and make (or not) actions.',
          verbose: '',
          technologiesUsed: [
            'Typescript',
            'Next.js',
            'Auth0',
            'Node.js',
            'Express',
            'MongoDB',
            'Docker',
            'Github',
          ],
        },
      ],
    },
  ],
};

export default portfolio;
