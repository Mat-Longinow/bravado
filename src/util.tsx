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

const formatOriginal = (elId: any, original: any) => {
	const f = Intl.NumberFormat("en-us", {
		currency: "USD",
		style: "currency",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})

	switch (elId) {
		case 'loot-split-amount':
			return f.format(Number(original))

		case 'loot-split-amount2':
			return f.format(Number(original))

		case 'each-players-split':
			return f.format(Number(original))

		case 'each-players-split2':
			return f.format(Number(original))

		default:
			return original
	}
}

const formatAndSaveInput = (inputString: string, elId: string) => {
	const original = inputString.replace(/\D+/gm, '')

	const formattedInput = formatOriginal(elId, original)

	console.log('inside the formatAndUpdate 👋🏻 --> ', {
		elId: elId,
		original: original,
		formattedInput: formattedInput
	})

	// @ts-ignore // hate doing this here, but there was a deep and nasty rabbit trail of TS bugs that led to this being the simplest solution
	document.getElementById(elId)!.value = formatOriginal(elId, original)

	return {
		original: original,
		formattedNumber: formattedInput
	}
}

export {
	setCurrentNavLink,
	formatOriginal,
	formatAndSaveInput
}