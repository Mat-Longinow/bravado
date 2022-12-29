import React, { useState } from 'react';
import { Table, Input } from 'antd'
import { formatAndSaveInput } from "../../../util";

const { Column } = Table;


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

	const columns = [
		{
			dataIndex: 'title',
			key: 'title'
		},
		{
			dataIndex: 'amount',
			key: 'amount',
			render: true
		}
	];

	const renderInput = (record: any) => {
		const elId = (record.title).toLowerCase().replaceAll(' ', '-')

		if(record.key === '3') {
			return (
				<button id="calculateButton">Calculate</button>
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
		lootTotal: lootSplitStartingAmount,
		numberOfPlayers: numberOfPlayersAmount
	})

	return (
		<div id={'lootSplitCalculator'} style={{height: '100%'}}>
			<Table dataSource={dataSource} pagination={false} showHeader={false}>
				{columns.map((column) => {
						const {dataIndex, key, render} = column;

						if(render) {
							return <Column dataIndex={dataIndex} key={key} render={(text, record) => renderInput(record)} align={'left'}/>
						} else {
							return <Column dataIndex={dataIndex} key={key} align={'left'}/>
						}
					})
				}

				<Column />
			</Table>


		</div>
	)
}