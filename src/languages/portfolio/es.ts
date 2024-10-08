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
            'Hasta 2022, utilizando Scala como lenguaje principal, colaboré con compañeros de equipo para resolver errores e implementar nuevas funcionalidades.',
          verbose:
            'Jemstep era una empresa fintech con sede en Sudáfrica y EE.UU., que ayudaba a los clientes a hacer crecer su patrimonio invirtiendo su dinero en función de sus objetivos.',
          verbose2: [
            'Ayudé y colaboré junto con un sólido equipo de desarrollo de Bonzzu en la solución de errores e implementación de nuevas características.',
            'Estuve involucrado en la mejora de una funcionalidad que permitía la creación/actualización de inversiones de objetivos junto con un usuario conjunto, extrayendo y configurando sus datos para la inversión.',
            'Ayudé a implementar una nueva funcionalidad que permitía a los clientes crear y mejorar sus inversiones basadas en las asignaciones recomendadas proporcionadas por el banco, en este caso, Citibank.',
            'Colaboré en una mejora propuesta por Citibank, un cliente de Jemptep, para resolver algunos problemas de seguridad donde se exponían datos sensibles en la aplicación web, tanto en el HTML como en algunos archivos de Javascript.',
            'Lideré la implementación de una mejora para la autenticación entre la aplicación principal y Docusign, un servicio utilizado para manejar/almacenar la documentación de inversiones y acuerdos de confidencialidad con el banco. El objetivo de esta mejora era mejorar la autenticación con DocuSign, ya que anteriormente se realizaba utilizando usuario/contraseña, pero según la nueva documentación de DocuSign, se requería una nueva autenticación basada en JWT.',
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
            'Desde noviembre a diciembre, colaboré en el sitio web ya existente, corrigiendo errores menores.',
          verbose:
            'Bonzzu es una empresa de tecnología que proporciona múltiples ingenieros a empresas para ayudar a construir/mantener aplicaciones basadas en software en todo el mundo.',
          verbose2: [
            'Ayudé en la solución de algunos errores, mejorando algunos componentes de React y estilos CSS.',
            'Realicé cambios en el c%C3%B3digo CSS para actualizar el estilo.',
            'Exploré el widget de Greenhouse para agregarlo al sitio web y publicar ofertas de trabajo.',
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
            'Desde enero hasta agosto colaboré en la implementación del blog propio para Bonzzu Inc.',
          verbose:
            'Bonzzu es una empresa de tecnología que proporciona múltiples ingenieros a empresas para ayudar a construir/mantener aplicaciones basadas en software en todo el mundo.',
          verbose2: [
            'Junto con otros dos compañeros de equipo implementamos un sitio de blog desde cero para que el equipo de contenido de Bonzzu pudiera publicar artículos para el público.',
            'Para facilitar la forma en que se implementan los estilos y hacerlos más mantenibles en el futuro, utilizamos el framework TailwindCSS y también el enfoque de módulos CSS, de modo que las clases CSS solo estén disponibles en el componente donde las invocamos.',
            'Para gestionar cómo se publicaban los artículos, utilizamos Contentful, de esa manera, todos los artículos podían ser creados, actualizados y ocultos sin necesidad de la aplicación, y el equipo de contenido de Bonzzu podía publicar fácilmente los artículos en el sitio del blog.',
            'Toda la aplicación web fue construida utilizando Javascript como lenguaje principal de programación.',
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
            'Desde agosto hasta diciembre, participé, junto con un compañero, en la implementación de la aplicación principal desde cero.',
          verbose:
            'Positon es una empresa que ofrece una aplicación programática de fusiones y adquisiciones (M&A) impulsada por IA para ayudar a startups a lograr sus objetivos.',
          verbose2: [
            'Participé en la primera implementación de toda la aplicación junto con un compañero de Bonzzu.',
            'Colaboré en definir toda la base de datos según los requisitos del cliente.',
            'Colaboré en definir las conexiones a la base de datos y las consultas utilizando GraphQL para consumir datos en la aplicación.',
            'La aplicación web fue implementada utilizando Next.js con Typescript como lenguaje principal.',
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
            'Colaboré corrigiendo errores, realicé varias mejoras e implementé una nueva plataforma para transacciones de criptomonedas fuera de línea en el proyecto que se me asignó.',
          verbose:
            'Blockdaemon, según su sitio web, es el proveedor líder para apoyar el creciente mercado de servicios blockchain.',
          verbose2: [
            'Trabajé solucionando errores e implementando nuevas funcionalidades en un proyecto específico de la empresa.',
            'Trabajé en la migración de todos los componentes de la interfaz de usuario hechos con Material-UI (con licencia de pago) a Mantine (sin necesidad de licencia de pago).',
            'Lideré la implementación de una aplicación web offline, para ayudar a los usuarios a realizar transferencias de criptomonedas sin utilizar la aplicación web principal.',
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
            'Junto con dos compañeros, estamos trabajando en la implementación de varias aplicaciones e implementé el CI/CD del repositorio yo mismo.',
          verbose:
            'RCX Sports es una empresa con sede en EE.UU. que se dedica a los deportes juveniles proporcionando el equipo necesario para los jugadores.',
          verbose2: [
            'Colaborando en la implementación de una aplicación web completa para gestionar la creación de ligas, temporadas y muchas otras cosas relacionadas con deportes juveniles.',
            'Colaborando en la implementación de una aplicación web pública donde los usuarios puedan visualizar las próximas temporadas y las fechas en que se llevarán a cabo los partidos.',
            'Implementación y construcción el CI/CD en las pipelines de Bitbucket para todas nuestras aplicaciones existentes.',
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
          from: new Date('2021-12-12'),
          to: new Date(),
          url: 'https://passvault.manup.dev',
          roles: ['Frontend', 'Backend', 'Devops'],
          description:
            'Para resolver un problema personal, desarrollé una aplicación móvil/web para crear contraseñas seguras y almacenarlas en la nube (Firebase).',
          verbose:
            'Como desafío personal, me aventuré en la implementación de una aplicación móvil/web para crear contraseñas seguras y almacenarlas en la nube.',
          verbose2: [
            'Utilicé Expo como marco de trabajo de React-Native para implementar fácilmente la aplicación y mantener una sola base de código para desplegar tanto en la web como en Android.',
            'Utilizando Typescript, creé componentes bien tipados para manejar de manera segura la información proveniente de la base de datos Firestore de Firebase.',
            'Para los despliegues a la web y Play Store, implementé los flujos de trabajo necesarios en Github Actions, de modo que cada vez que hago un push/merge, los cambios se entregan automáticamente.',
            'Creé un servidor personalizado en Node.js utilizando funciones Lambda de AWS como puntos de acceso para cifrar adecuadamente nuevas o existentes contraseñas, de modo que no se almacenen contraseñas en texto plano en la base de datos.',
            'La aplicación admite usuarios autenticados y no autenticados. Los usuarios autenticados pueden crear/editar/eliminar contraseñas. Los usuarios no autenticados solo pueden crear contraseñas y guardarlas en el portapapeles; nada se almacenará en la base de datos.',
            'La aplicación está disponible para instalación en Play Store buscando por mperezy:passvault. También está disponible para la web alojada en Github Pages.',
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
            '¡Solo por diversión! Hice una aplicación de escritorio para cargar la aplicación web de Google Drive y gestionar los archivos/carpetas subidos a la nube.',
          verbose:
            'Hice una aplicación de escritorio para Ubuntu (basada en Debian), Windows y macOS para cargar la URL de la aplicación web de Google Drive.',
          verbose2: [
            'Usé el framework Electron Forge.',
            'Esta aplicación fue hecha para uso personal, no se ha publicado.',
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
            'Como desafío personal, creé una aplicación web para que un usuario autenticado, dependiendo de los roles asignados, pueda consumir (o no) ciertos recursos y realizar (o no) ciertas acciones.',
          verbose:
            'Basado en una conversación con un compañero de equipo, ¿es realmente difícil implementar una aplicación web que soporte roles de usuario, y que según el rol asignado, se bloquee/oculte cualquier contenido o acción?',
          verbose2: [
            'Basado en mi experiencia en Blockdaemon, la implementación de reglas basadas en roles fue fácil de implementar.',
            'Utilicé Auth0 para agregar un sistema de autenticación donde los usuarios puedan iniciar sesión.',
            'Como primera implementación, los roles se almacenan en una base de datos MongoDB dentro de un contenedor Docker.',
            'La aplicación no se ha desplegado (aún), pero el código fuente puede ser visitado con fines educativos.',
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
          description: 'Este mismo website!',
          verbose:
            'Siempre quise tener mi propio dominio y comenzar a lanzar proyectos personales al mundo, solo para demostrarme a mí mismo que puedo hacerlo, y así ha sido. Todo este sitio web es público para todas las personas alrededor del mundo.',
          verbose2: [
            'Dada mi experiencia haciendo aplicaciones React en trabajos profesionales, decidí hacer este sitio web usando Vite, ya que es solo una SPA estática (Aplicación de Página Única) y no hay necesidad de tener SSR (Renderizado en el Servidor).',
            'Una vez que obtuve mi dominio .dev solo necesitaba publicar este sitio web, así que decidí usar Github Pages para alojarlo.',
            'Utilizando Github Actions, se construye el sitio web y se despliega a Github Pages, luego, en la configuración interna, configuré mi propio dominio para servir el sitio en él.',
            'Para manejar la selección de idioma, utilicé un gestor de estado atómico llamado Jotai. Podría haber usado directamente el Local Storage del navegador, pero ¿por qué no usar Jotai?',
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
