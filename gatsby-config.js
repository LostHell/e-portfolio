module.exports = {
  siteMetadata: {
    siteTitle: 'Enes Karadzhov - Portfolio',
    siteAuthor: 'Enes Karadzhov',
    siteUrl: 'https://enes-karadzhov.netlify.app/',
    siteDescription:
      'Portfolio of Enes Karadzhov. Junior Full stack developer currently based in Berlin, available for challenging job opportunities.',
    siteKeywords:
      'web, developer, portfolio, Enes, Karadzhov, junior, berlin, job',
    siteRobots: 'index,follow,noodp',
    author: {
      githubUsername: 'LostHell',
      phoneBG: '+359877744165',
      phoneDE: '+4915733372137',
      email: 'enes.karadzhov@gmail.com',
    },
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['en', 'bg'],
        // language file path
        defaultLanguage: 'en',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
  ],
};
