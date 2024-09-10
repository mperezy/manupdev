/* eslint-disable max-len */

const portfolio: Portfolio = {
  professional: [
    {
      year: 2018,
      work: [
        {
          title: 'Jemstep',
          url: 'https://invesco.com',
          roles: ['Fullstack Dev'],
          description:
            'Until 2022, by using Scala as main language I collaborated with team mates to solve bugs and implementing new features.',
          verbose:
            'Jemstep was a fintech company based in South Africa and the U.S. to help customers grow their wealth by investing their money based on goals.',
          verbose2: [
            'First helping and collaborating with Bonzzu team mates in the fixing of bugs and implementing new features.',
            'I was involved in a feature improvement that allowed the creation/update of goal investments along with a joint user pulling out and setting their data to the investment.',
            'I helped to implement a new feature that allowed the clients to create and improve their investments based on recommended allocations by the bank, in this case, Citibank.',
            "I helped in an improvement proposed by a Jemptep's client, Citibank, to solve some security issues where some sensitive data were exposed in the web app across the whole HTML and in some Javascript files.",
            "I leaded the implementation of an improvement on the connection from the app to Docusign, this service is used to handle investment documentation and confidentiality agreements with the bank. The goal of this improvement was to implement the way how the app will send documents to DocuSign, previously this connection was made only with a user and password authentication, but given DocuSign's new documentation, a new authentication based on JWT was required.",
          ],
          technologiesUsed: [
            'Play Framework',
            'Scala',
            'Javascript',
            'jQuery',
            'Backbone.js',
            'React.js',
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
          title: "Bonzzu's Website",
          url: 'https://bonzzu.com',
          roles: ['Frontend'],
          description:
            'Since November to December I collaborated in the already existing website by fixing minor bugs.',
          verbose:
            'Bonzzu is a tech company which provides multiple tech engineers to companies to help build/maintain their software based applications around the world.',
          verbose2: [
            'Collaborated in the fix of minor bugs.',
            'Made changes in the CSS code to update styling.',
            'Explore the Greenhouse widget to add it in the website to publish job openings.',
          ],
          technologiesUsed: ['Javascript', 'React.js', 'Bitbucket'],
        },
      ],
    },
    {
      year: 2022,
      work: [
        {
          title: "Bonzzu's Blog",
          url: 'https://bonzzu.com/blog',
          roles: ['Frontend'],
          description:
            'Since January to August I collaborated in the implementation of own blog site for Bonzzu Inc.',
          verbose:
            'Bonzzu is a tech company which provides multiple tech engineers to companies to help build/maintain their software based applications around the world.',
          verbose2: [
            'Alongside with other two team-mates we implemented a blog site from scratch so the Content Team of Bonzzu can publish posts for the public.',
            'The entire web application was built by using Javascript as main programming language.',
          ],
          technologiesUsed: [
            'Javascript',
            'React.js',
            'Next.js',
            'TailwindCSS',
            'Bitbucket',
          ],
        },
        {
          title: 'Positon',
          url: 'https://positon.ai',
          roles: ['Fullstack Dev'],
          description:
            'Since August to December I was involved, alongside with a team mate, in the implementation of the main application from scratch.',
          verbose:
            'Positon is a company that offers a programmatic M&A (Mergers and Acquisitions) application powered by AI to boost startups to achieve their goals.',
          verbose2: [
            'I was involved at the first implementation of the entire application alongside with a team mate from Bonzzu.',
            'I collaborated to define the entire DB based on the client requirements.',
            'I collaborated to define the DB connections and DB queries using GraphQL to consume data into the the app.',
            'The webapp was implemented by using Next.js with Typescript as main language.',
          ],
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
          url: 'https://blockdaemon.com/wallet/institutional-wallet',
          roles: ['Frontend'],
          description:
            'I collaborated by fixing bugs, made several improvements and implemented a whole new platform for offline crypto transactions in the project I was assigned.',
          verbose:
            'Blockdaemon, from their website, is the leading provider to support the growing market for blockchain services.',
          verbose2: [
            'Assisting to fix bugs and implement new features in their Wallet project.',
            'Worked in a UI migration by moving all UI components made using Material-UI (License paid) to Mantine (No license paid required).',
            'Collaborated in an offline web app (Cold Storage) implementation, to help users to make crypto transfers without the use of the main web app.',
          ],
          technologiesUsed: [
            'Auth0',
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
          url: 'https://go.playrcx.com',
          roles: ['Frontend', 'Devops'],
          description:
            "Alongside with two team mates, we are working in the implementation of bunch of applications and, implemented the repo's CI/CD myself.",
          verbose:
            'RCX Sports is a company based on the U.S. involved on youth sports by enhancing and provider required equipment for their sport players.',
          verbose2: [
            'Collaborating in the implementation of an entire web application to handle the creation of leagues, seasons and many other stuff related of youth sports.',
            'Collaborating in the implementation of an entire public web application where users can visualize upcoming seasons and dates when matches will occur.',
            'Implement and built the CI/CD on Bitbucket pipelines for or all the applications my team collaborate for.',
          ],
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
          url: 'https://passvault.manup.dev',
          roles: ['Frontend', 'Backend', 'Devops'],
          description:
            'In order to solve a personal problem, I developed a mobile/web application to create safe and secure passwords and store them in the cloud (Firebase)',
          verbose:
            'As a personal challenge I adventure myself in the implementation of a mobile/web application to create secure password and store them in the cloud.',
          verbose2: [
            'Using Expo as React-Native framework to easily implement the application in order to maintain one code base and deploy for web and Android.',
            "By using Typescript, creating well typed components to safely treat the information coming from Firebase's Firestore database",
            'For deployments to the web and Play Store, I implement the required workflows for Github Actions so whenever I push/merge changes they can be automatically delivered.',
            'Created a custom Node.js server by using AWS Lambda functions as endpoints to properly encrypt new or existing passwords so no plain text as passwords are stored in the database.',
            'The app supports authenticated or not authenticated users. For authenticated users, they can create/edit/delete passwords. For non authenticated users, they can only create passwords and save them in the clipboard, nothing will be stored on database.',
            'The application is available for install on Play Store searching by mperezy:passvault. Also it is available for web hosted by using Github Pages.',
          ],
          technologiesUsed: [
            'Typescript',
            'React Native',
            'Redux Toolkit',
            'Electron.js',
            'Expo',
            'Firebase',
            'AWS Lambda',
            'Node.js',
            'Github',
          ],
        },
      ],
    },
    {
      year: 2023,
      work: [
        {
          title: 'Google Drive Client',
          url: '#',
          roles: ['Frontend', 'Backend'],
          description:
            'Just for fun! I made a desktop application to load the Google Drive web app to manage the files/folders uploaded to the Cloud.',
          verbose:
            'I made a desktop application for Ubuntu (Debian based), Windows and macOS to load the Google Drive web app URL.',
          verbose2: [
            'Used the framework Electron Forge.',
            'This application was meant for personal use, not published.',
          ],
          technologiesUsed: ['Typescript', 'Electron.js', 'Node.js', 'Github'],
        },
      ],
    },
    {
      year: 2024,
      work: [
        {
          title: 'Next Role Based App',
          url: 'https://github.com/mperezy/next-app-role-based',
          roles: ['Frontend', 'Backend', 'Devops'],
          description:
            'As a personal challenge I created a web application so an authenticated user, depending of the roles assigned, this user can consume (or not) certain resources and make (or not) actions.',
          verbose:
            'Based on a conversation with a team mate, it is too hard to implement a web application that support user roles so, based on role assigned block/hide any content or action?',
          verbose2: [
            'Based on my experience on Blockdaemon, the implementation of rules based on roles was easy to implement.',
            'Used Auth0 to add an authentication layout so user can login on it.',
            'As a first implementation, the roles are stored in a dockerized MongoDB.',
            'The application was not deployed (yet), but the code base can be visited to educational purpose.',
          ],
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
