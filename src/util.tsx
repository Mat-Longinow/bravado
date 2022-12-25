const routesSearch = (key: string) => {
	switch (key) {
		case 'home':
			return '/'

		case 'guildCharter':
			return '/guild-charter'
	}
}

export {
	routesSearch
}