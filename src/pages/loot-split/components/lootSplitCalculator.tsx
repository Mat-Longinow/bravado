import React, { useState } from 'react';
import { Input, Button } from 'antd'
import { formatAndSaveInput } from "../../../util";


const LootSplitCalculator = () => {

	const [lootSplitStartingAmount, setLootSplitStartingAmount] = useState<string>()
	const [numberOfPlayersAmount, setNumberOfPlayersAmount] = useState<string>()

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

	const renderInput = (record: any) => {
		const elId = (record.title).toLowerCase().replaceAll(' ', '-')

		if(record.key === '3') {
			return (
				<Button id="calculateButton">Calculate</Button>
			)
		}

		return <Input
			id={elId}
			onInput={(e) => {
				const formattedInput = formatAndSaveInput(e.currentTarget.value, elId)
				saveInput(elId, formattedInput.original)
			}}
			defaultValue={''}
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
				<div id={record.key != '3' ? `${(record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')}-wrapper`: 'calculate-button-wrapper'} className="loot-split-row margin-left margin-right">
					<p>{record.title}</p>

					{renderInput(record)}
				</div>
			))}
		</div>
	)
}

export default LootSplitCalculator