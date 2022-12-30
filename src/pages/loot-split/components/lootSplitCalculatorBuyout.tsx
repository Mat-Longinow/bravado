import React, { useState } from 'react';
import { Input, Button } from 'antd'
import {formatAndSaveInput, formatOriginal} from "../../../util";
import copyIcon from './../../../assets/copy-icon.png'
import checkMarkIcon from './../../../assets/black-check-mark.png'


const LootSplitCalculatorBuyout = () => {

	const [lootSplitStartingAmount, setLootSplitStartingAmount] = useState<string>()
	const [numberOfPlayersAmount, setNumberOfPlayersAmount] = useState<string>()
	const [percentageBuyout, setPercentageBuyout] = useState<string>()

	// putting this here instead of using a useState as it ran in to a race condition when doing math and re-rendering
	const playersSplit = String(Math.floor((Number(lootSplitStartingAmount) * (Number(percentageBuyout) / 100)) / Number(numberOfPlayersAmount)))

	const saveInput = (elId: string, numberToSave: string) => {
		switch (elId) {
			case 'loot-split-amount2':
				setLootSplitStartingAmount(numberToSave)
				break;
			case 'number-of-players2':
				setNumberOfPlayersAmount(numberToSave)
				break;
			case 'percentage-buyout2':
				setPercentageBuyout(numberToSave)
				break;
		}
	}

	const showThenHideCheckMark = () => {
		const setZIndex = (zIndex: string) => document.getElementById('checkMarkIcon2')!.style.zIndex = zIndex

		setZIndex('100')

		setTimeout(() => {
			setZIndex('-100')
		}, 2000)
	}

	const copyToClipboard = () => {
		showThenHideCheckMark()

		navigator.clipboard.writeText(formatOriginal('each-players-split2', playersSplit))
	}

	const renderInput = (record: any) => {
		const elId = `${(record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')}2`

		if(record.key === '4') {
			return (
				<Button id="calculateButton"
					onClick={async () => {
						formatAndSaveInput(playersSplit, 'each-players-split2')
					}}
				>Calculate</Button>
			)
		}

		return <Input
			id={elId}
			onInput={(e) => {
				const formattedInput = formatAndSaveInput(e.currentTarget.value, elId)
				saveInput(elId, formattedInput.original)
			}}
			defaultValue={''}
			disabled={elId === 'each-players-split2' ? true : false}
			/>
	}

	const dataSource = [
		{
			key: '1',
			title: 'Loot Split Amount'
		},
		{
			key: '2',
			title: 'Number of Players'
		},
		{
			key: '3',
			title: 'Percentage Buyout'
		},
		{
			key: '4',
			title: ''
		},
		{
			key: '5',
			title: "Each Player's Split"
		}
	]

	console.log('data -->', {
		lootTotal2: lootSplitStartingAmount,
		numberOfPlayers2: numberOfPlayersAmount,
		playersSplit: playersSplit
	})

	return (
		<div id={'lootSplitCalculator'}>
			{dataSource.map((record) => (
				<div key={record.key} id={record.key != '4' ? `${(record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')}-wrapper2`: 'calculate-button-wrapper'} className="loot-split-row margin-left margin-right">
					<p>{record.title}</p>

					<div className="inputWrapper">
						{renderInput(record)}

						{record.title === "Each Player's Split" && (
							<>
								<button id="copyIconButton2">
									<img id="copyIcon2" src={copyIcon} onClick={() => copyToClipboard()} />
								</button>

								<img id="checkMarkIcon2" src={checkMarkIcon} />
							</>
						)}
					</div>
				</div>
			))}
		</div>
	)
}

export default LootSplitCalculatorBuyout