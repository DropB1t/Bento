// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'DropBit',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '005dfa6f655e32f1ceca39115347bab6', // Write here your API Key
  weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '43.723',
  defaultLongitude: '10.402',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://todoist.com/app/today',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/home',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Lo-Fi',
          link: 'https://www.youtube.com/playlist?list=PLOrhCNdJB6bKSze1IyP8f74ZjsuFOy4mO',
        },
        {
          name: 'Trap',
          link: 'https://www.youtube.com/playlist?list=PLOrhCNdJB6bJNTM6W71LOHjOE_Ub_o-Z_',
        },
        {
          name: 'Vibes',
          link: 'https://www.youtube.com/playlist?list=PLOrhCNdJB6bKeWI3WS4RKQYUBj6rBQrT6',
        },
        {
          name: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com',
        },
        {
          name: 'Netflix',
          link: 'https://www.netflix.com/browse',
        },
        {
          name: 'AnimeWorld',
          link: 'https://www.animeworld.tv/',
        },
        {
          name: 'Amazon',
          link: 'https://www.amazon.it/',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
