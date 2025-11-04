export default defineAppConfig({
  global: {
    picture: {
      src: '/jan-petry.webp',
      alt: 'My profile picture'
    },
    meetingLink: 'mailto:mail@janpetry.de',
    email: 'mail@janpetry.de',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Made with <3 by Jan Petry • © ${new Date().getFullYear()}`, // is this ok so?
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/vCATB66Dqr',
      'target': '_blank',
      'aria-label': 'Me on Discord'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/japetry/',
      'target': '_blank',
      'aria-label': 'Me on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/omgitsjan',
      'target': '_blank',
      'aria-label': 'Me on GitHub'
    }]
  }
})
