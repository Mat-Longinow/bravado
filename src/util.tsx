const getCurrentNavLinkId = () => {
	switch (window.location.pathname) {
		case '/':
			return 'home'
		case '/guild-charter':
			return 'guildCharter'
		case '/loot-split':
			return 'lootSplit'
	}
}

const setCurrentNavLink = () => {
	const id: any = getCurrentNavLinkId()

	console.log(`the id is ${id} and the pathname is ${window.location.pathname}`,)

	document.getElementById(id)?.classList.add('menu-item-selected')
}

export {
	setCurrentNavLink
}