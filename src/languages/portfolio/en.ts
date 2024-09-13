/* eslint-disable max-len */

const portfolio: Portfolio = {
  professional: [
    {
      year: 2018,
      work: [
        {
          title: 'Jemstep',
          from: new Date('2018-03-12'),
          to: new Date('2022-07-30'),
          url: 'https://invesco.com',
          roles: ['Fullstack Dev'],
          description:
            'Until 2022, by using Scala as main language I collaborated with team mates to solve bugs and implementing new features.',
          verbose:
            'Jemstep was a fintech company based in South Africa and the U.S. to help customers grow their wealth by investing their money based on goals.',
          verbose2: [
            'Helped and collaborated alongside with a solid dev team from Bonzzu by fixing bugs and implementing new features.',
            'I was involved in improving a feature that allowed the creation/update of goal investments along with a joint user pulling out and setting their data to the investment.',
            'I helped to implement a new feature that allowed the clients to create and improve their investments based on recommended allocations provided by the bank, in this case, Citibank.',
            'I helped in an improvement proposed by Citibank, a Jemptep client, to solve some security issues where some sensitive data were exposed in the web app across the whole HTML and some Javascript files.',
            "I led an improvement implementation for the authentication between the main app and Docusign, this service was used to handle/store investment documentation and confidentiality agreements with the bank. The goal of this improvement was to improve the authentication to DocuSign since it was previously made using a user/password because according to DocuSign's new documentation, a new authentication based on JWT was required.",
          ],
          technologiesUsed: [
            'Play Framework',
            'Scala',
            'Javascript',
            'ESLint',
            'Prettier',
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
          from: new Date('2020-11-01'),
          to: new Date('2020-12-30'),
          url: 'https://bonzzu.com',
          roles: ['Frontend'],
          description:
            'Since November to December I collaborated in the already existing website by fixing minor bugs.',
          verbose:
            'Bonzzu is a tech company which provides multiple tech engineers to companies to help build/maintain their software based applications around the world.',
          verbose2: [
            'I helped by fixing some bugs, by improving some React components and CSS styles.',
            'Made changes in the CSS code to update styling.',
            'Explored the Greenhouse widget to add it in the website to publish job openings.',
          ],
          technologiesUsed: [
            'Javascript',
            'ESLint',
            'Prettier',
            'React.js',
            'Bitbucket',
          ],
        },
      ],
    },
    {
      year: 2022,
      work: [
        {
          title: "Bonzzu's Blog",
          from: new Date('2022-01-1'),
          to: new Date('2022-07-30'),
          url: 'https://bonzzu.com/blog',
          roles: ['Frontend'],
          description:
            'Since January to August I collaborated in the implementation of own blog site for Bonzzu Inc.',
          verbose:
            'Bonzzu is a tech company which provides multiple tech engineers to companies to help build/maintain their software based applications around the world.',
          verbose2: [
            'Alongside with other two teammates we implemented a blog site from scratch so the Content Team of Bonzzu can publish posts for the public.',
            'To make easier the way how the styles are implemented and make them more maintainable in the future, we used the TailwindCSS framework and also used the CSS modules approach so the CSS classes can be available only in the component where we invoke them.',
            "In order to handle how the posts were published we used Contentful, in that way, all the posts could be created, updated, and hidden without the app, and also Bonzzu's Content Team could easily publish the posts for the Blog site.",
            'The entire web application was built by using Javascript as main programming language.',
          ],
          technologiesUsed: [
            'Javascript',
            'ESLint',
            'Prettier',
            'React.js',
            'Next.js',
            'TailwindCSS',
            'Bitbucket',
          ],
        },
        {
          title: 'Positon',
          from: new Date('2022-08-1'),
          to: new Date('2022-12-30'),
          url: 'https://positon.ai',
          roles: ['Fullstack Dev'],
          description:
            'Since August to December I was involved, alongside with a team mate, in the implementation of the main application from scratch.',
          verbose:
            'Positon is a company that offers a programmatic M&A (Mergers and Acquisitions) application powered by AI to boost startups to achieve their goals.',
          verbose2: [
            'I was involved at the first implementation of the entire application alongside with a teammate from Bonzzu.',
            'I collaborated to define the entire DB based on the client requirements.',
            'I collaborated to define the DB connections and DB queries using GraphQL to consume data into the the app.',
            'The webapp was implemented by using Next.js with Typescript as main language.',
          ],
          technologiesUsed: [
            'Typescript',
            'ESLint',
            'Prettier',
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
          from: new Date('2023-06-12'),
          to: new Date('2024-01-30'),
          url: 'https://blockdaemon.com/wallet/institutional-wallet',
          roles: ['Frontend'],
          description:
            'I collaborated by fixing bugs, made several improvements and implemented a whole new platform for offline crypto transactions in the project I was assigned.',
          verbose:
            'Blockdaemon, from their website, is the leading provider to support the growing market for blockchain services.',
          verbose2: [
            'Worked by fixing bugs and implementing new features in a focused project from the company',
            'Worked on the migration of all UI components made with Material-UI (License paid) to Mantine (No license paid required).',
            'Led the implementation of an offline web app, to help users to make crypto transfers without usage of the main web app.',
          ],
          technologiesUsed: [
            'Typescript',
            'ESLint',
            'Prettier',
            'Auth0',
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
          from: new Date('2023-09-1'),
          to: new Date(),
          url: 'https://go.playrcx.com',
          roles: ['Frontend', 'Devops'],
          description:
            "Alongside with two team mates, we are working in the implementation of bunch of applications and, implemented the repo's CI/CD myself.",
          verbose:
            'RCX Sports is a company based on the U.S. involved on youth sports by enhancing and provider required equipment for their sport players.',
          verbose2: [
            'Collaborating in the implementation of an entire web application to handle the creation of leagues, seasons and many other stuff related of youth sports.',
            'Collaborating in the implementation of a public web application where users can visualize upcoming seasons and dates when matches will occur.',
            'Implement and built the CI/CD on Bitbucket pipelines for or all our existing applications. ',
          ],
          technologiesUsed: [
            'Typescript',
            'ESLint',
            'Prettier',
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
          from: new Date('2021-12-12'),
          to: new Date(),
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
            'ESLint',
            'Prettier',
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
          from: new Date('2023-08-1'),
          to: new Date(),
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
          technologiesUsed: [
            'Typescript',
            'ESLint',
            'Prettier',
            'Electron.js',
            'Node.js',
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
          from: new Date('2024-07-1'),
          to: new Date(),
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
            'ESLint',
            'Prettier',
            'Next.js',
            'Auth0',
            'Node.js',
            'Express',
            'MongoDB',
            'Docker',
            'Github',
          ],
        },
        {
          title: 'manup.dev',
          from: new Date('2024-08-25'),
          to: new Date(),
          url: 'https://manup.dev',
          roles: ['Frontend', 'Devops'],
          description: 'This website!',
          verbose:
            'I always wanted to have my own domain and start launching personal projects to the world just to prove myself that I can do it and so it is. This entire website is public for all the people around the world.',
          verbose2: [
            'Since my experience by doing React applications on professional jobs I decided to make this website by using Vite since this is just a static SPA (Single Page Application) and there is no need to have SSR (Server Side Rendering).',
            'Once I got my on .dev domain just needed to make this website to be published so I decided to use Github Pages in order to host this website.',
            'By using Github Actions, it builds the website and deploys it into Github Pages, then in the internal config I set my own domain in order to serve the website on it.',
            "In order to handle the language selection I used an atomic state management named Jotai, I could only use directly the browser's Local Storage but why not use Jotai ?",
          ],
          technologiesUsed: [
            'Typescript',
            'ESLint',
            'Prettier',
            'React.js',
            'Mantine',
            'Vite',
            'Github',
          ],
        },
      ],
    },
  ],
};

export default portfolio;
