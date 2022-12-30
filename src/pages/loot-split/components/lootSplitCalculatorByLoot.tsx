import React, { useState } from 'react';
import { Input, Button } from 'antd'
import {formatAndSaveInput, formatOriginal} from "../../../util";
import copyIcon from './../../../assets/copy-icon.png'
import checkMarkIcon from './../../../assets/black-check-mark.png'


const LootSplitCalculatorByLoot = () => {

	const [lootSplitStartingAmount, setLootSplitStartingAmount] = useState<string>()
	const [numberOfPlayersAmount, setNumberOfPlayersAmount] = useState<string>()

	// putting this here instead of using a useState as it ran in to a race condition when doing math and re-rendering
	const playersSplit = String(Math.floor(Number(lootSplitStartingAmount) / Number(numberOfPlayersAmount)))

	const saveInput = (elId: string, numberToSave: string) => {
		switch (elId) {
			case 'loot-split-amount':
				setLootSplitStartingAmount(numberToSave)
				break;
			case 'number-of-players':
				setNumberOfPlayersAmount(numberToSave)
				break;
		}
	}

	const showThenHideCheckMark = () => {
		const setZIndex = (zIndex: string) => document.getElementById('checkMarkIcon')!.style.zIndex = zIndex

		setZIndex('100')

		setTimeout(() => {
			setZIndex('-100')
		}, 2000)
	}

	const copyToClipboard = () => {
		showThenHideCheckMark()

		navigator.clipboard.writeText(formatOriginal('each-players-split', playersSplit))
	}

	const renderInput = (record: any) => {
		const elId = (record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')

		if(record.key === '3') {
			return (
				<Button id="calculateButton"
					onClick={async () => {
						formatAndSaveInput(playersSplit, 'each-players-split')
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
			disabled={elId === 'each-players-split' ? true : false}
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
			title: ''
		},
		{
			key: '4',
			title: "Each Player's Split"
		}
	]

	console.log('data -->', {
		lootTotal2: lootSplitStartingAmount,
		numberOfPlayers2: numberOfPlayersAmount
	})

	return (
		<div id={'lootSplitCalculator'}>
			{dataSource.map((record) => (
				<div key={record.key} id={record.key != '3' ? `${(record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')}-wrapper`: 'calculate-button-wrapper'} className="loot-split-row margin-left margin-right">
					<p>{record.title}</p>

					<div className="inputWrapper">
						{renderInput(record)}

						{record.title === "Each Player's Split" && (
							<>
								<button id="copyIconButton">
									<img id="copyIcon" src={copyIcon} onClick={() => copyToClipboard()} />
								</button>

								<img id="checkMarkIcon" src={checkMarkIcon} />
							</>
						)}
					</div>
				</div>
			))}
		</div>
	)
}

export default LootSplitCalculatorByLoot