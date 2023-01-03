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

const stripOutAbove20 = (elId: any, input: any) => {
	if((elId === 'number-of-players' || 'number-of-players2') && (Number(input) > 20)) {
		return 20
	}

	return input
}

const formatOriginal = (elId: any, original: any) => {
	const f = Intl.NumberFormat("en-us", {
		currency: "USD",
		style: "currency",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})

	const p = Intl.NumberFormat("en-us", {
		style: "percent",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})

	switch (true) {
		case /loot-split-amount/.test(elId):
			return f.format(Number(original))

		case /each-players-split/.test(elId):
			return f.format(Number(original))

		case /percentage-buyout/.test(elId):
			return p.format(Number(original) / 100)

		case /playerSplit/.test(elId):
			return f.format(Number(original))

		default:
			return original
	}
}

const formatAndSaveInput = (inputString: string, elId: string) => {
	let original = inputString.replace(/\D+/gm, '')

	// don't want jokers comin in and breaking the page, party size can't be above 20 in game anyways
	if(elId === 'number-of-players' || elId === 'number-of-players2'){
		original = stripOutAbove20(elId, original)
	}

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