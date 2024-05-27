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
	name: "Yuriy",
	openInNewTab: true,
	twelveHourFormat: false,
	title: "Dashboard",

	// Theme
	theme: "latte-mocha",
	imageBackground: true,
	imageUrl: "./assets/background.jpg", // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

	// Greetings
	greetingMorning: "Good morning!",
	greetingAfternoon: "Good afternoon,",
	greetingEvening: "Good evening,",
	greetingNight: "Go to Sleep!",

	// Layout
	bentoLayout: "bento", // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: "005dfa6f655e32f1ceca39115347bab6", // Write here your API Key
	weatherIcons: "White", // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: "C", // 'F', 'C'
	language: "en", // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: "43.723",
	defaultLongitude: "10.402",

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: "18:30",
	hourDarkThemeInactive: "07:00",

	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
	changeThemeByLocation: false,

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: "1",
			name: "Github",
			icon: "github",
			link: "https://github.com/",
		},
		{
			id: "2",
			name: "Mail",
			icon: "mailbox",
			link: "https://mail.google.com/",
		},
		{
			id: "5",
			name: "Calendar",
			icon: "calendar",
			link: "https://calendar.google.com/calendar/r",
		},
		{
			id: "3",
			name: "Notion",
			icon: "album",
			link: "https://www.notion.so/dropbit/Main-Board-481c96ee740945d4b6c291f89f8b5d67",
		},
		{
			id: "4",
			name: "Outlook",
			icon: "mails",
			link: "https://outlook.office.com/mail/",
		},
		{
			id: "6",
			name: "Amazon",
			icon: "shopping-bag",
			link: "https://amazon.it/",
		},
	],

	secondButtonsContainer: [
		{
			id: "1",
			name: "Music",
			icon: "headphones",
			link: "https://open.spotify.com",
		},
		{
			id: "2",
			name: "twitter",
			icon: "twitter",
			link: "https://twitter.com/",
		},
		{
			id: "3",
			name: "bot",
			icon: "bot",
			link: "https://discord.com/app",
		},
		{
			id: "4",
			name: "Amazon",
			icon: "shopping-bag",
			link: "https://amazon.com/",
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: "binary",
			id: "1",
			links: [
				{
					name: "SvelteKit Doc",
					link: "https://kit.svelte.dev/docs/introduction",
				},
				{
					name: "Rust Book",
					link: "https://doc.rust-lang.org/book/",
				},
				{
					name: "Go Doc",
					link: "https://pkg.go.dev/std",
				},
				{
					name: "C++ Doc",
					link: "https://cplusplus.com/reference/",
				},
			],
		},
		{
			icon: "coffee",
			id: "2",
			links: [
				{
					name: "AnimeWorld",
					link: "https://www.animeworld.tv/",
				},
				{
					name: "YT Playlist",
					link: "https://www.youtube.com/feed/playlists",
				},
				{
					name: "Twitch",
					link: "https://www.twitch.tv/directory/following",
				},
				{
					name: "X",
					link: "https://x.com/home",
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: "binary",
			id: "1",
			links: [
				{
					name: "Spotify",
					link: "https://www.spotify.com",
				},
				{
					name: "Reddit",
					link: "https://www.reddit.com",
				},
				{
					name: "Hashnode",
					link: "https://www.hashnode.com",
				},
				{
					name: "Pocket",
					link: "https://www.pocket.com",
				},
			],
		},
		{
			icon: "github",
			id: "2",
			links: [
				{
					name: "Front",
					link: "https://www.reddit.com/r/Frontend/",
				},
				{
					name: "Rust",
					link: "https://www.reddit.com/r/rust/",
				},
				{
					name: "Go",
					link: "https://www.reddit.com/r/golang/",
				},
				{
					name: "Repos",
					link: "https://github.com/migueravila",
				},
			],
		},
	],
};
