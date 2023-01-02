import React, { useState } from 'react';
import {Input, Button, Select} from 'antd'
import {formatAndSaveInput, formatOriginal} from "../../../util";
import copyIcon from './../../../assets/copy-icon.png'
import checkMarkIcon from './../../../assets/black-check-mark.png'


const LootSplitCalculatorPartial = () => {

	const [lootSplitStartingAmount, setLootSplitStartingAmount] = useState<string>()
	const [numberOfPlayersAmount, setNumberOfPlayersAmount] = useState<string>()
	const [percentageBuyout, setPercentageBuyout] = useState<string>()
	const [buyoutSplit, setBuyoutSplit] = useState(false)
	const [playersSplits, setPlayersSplits] = useState({})

	const generatePlayersSplitsObject = (numberOfPlayersAmount: any) => {
		let playersSplitsObject: any = [{
			key: 'hello!'
		}]

		for(let i = 0; i < Number(numberOfPlayersAmount); i++){
			if(playersSplitsObject[i] === undefined){
				playersSplitsObject.push({key: `${i+1}`})
			}else{
				playersSplitsObject[i] = playersSplitsObject[i]
			}
		}

		return playersSplitsObject
	}

	// putting this here instead of using a useState as it ran in to a race condition when doing math and re-rendering
	const playersSplit = String(Math.floor((Number(lootSplitStartingAmount) * (Number(percentageBuyout) / 100)) / Number(numberOfPlayersAmount)))

	const saveInput = (elId: string, numberToSave: string) => {
		switch (elId) {
			case 'loot-split-amount2':
				setLootSplitStartingAmount(numberToSave)
				break;
			case 'number-of-players2':
				setNumberOfPlayersAmount(numberToSave)
				setPlayersSplits(generatePlayersSplitsObject(numberToSave))
				break;
			case 'percentage-buyout2':
				setPercentageBuyout(numberToSave)
				break;
		}
	}

	const showThenHideCheckMark = (checkMarkNum: string) => {
		const setZIndex = (zIndex: string) => document.getElementById(`checkMarkIcon${checkMarkNum}`)!.style.zIndex = zIndex

		setZIndex('100')

		setTimeout(() => {
			setZIndex('-100')
		}, 2000)
	}

	const copyToClipboard = (checkMarkNum: string) => {
		showThenHideCheckMark(checkMarkNum)

		navigator.clipboard.writeText(formatOriginal('each-players-split2', playersSplit))
	}

	const renderInput = (record: any) => {
		const elId = `${(record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')}2`

		if(record.key === '4') {
			return (
				<Button onClick={() => setBuyoutSplit(!buyoutSplit)}>{buyoutSplit ? 'Switch To By Loot' : 'Switch To Buyout'}</Button>
			)
		}

		if(record.key === '6') {
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
			title: 'Partial Splits'
		},
		{
			key: '6',
			title: ''
		},
	]

	console.log('data -->', {
		lootTotal2: lootSplitStartingAmount,
		numberOfPlayers2: numberOfPlayersAmount,
		playersSplit: playersSplit,
		playersSplitObject: playersSplits
	})

	return (
		<div id={'lootSplitCalculator'}>
			{dataSource.map((record) => {

				if(record.title === 'Percentage Buyout' && !buyoutSplit) {
					return null
				}

				if(record.key === '6' && (numberOfPlayersAmount === undefined)) {
					return null
				}

				if(record.title === 'Partial Splits') {
					const splitRows = []
					for(let i = 0; i < Number(numberOfPlayersAmount); i++) {
						splitRows.push(
							<div id={`splitRow${i+1}`} key={i} className="split-row loot-split-row margin-left margin-right">
								<div className="split-row-pair-wrapper">
									<Input
										id={`playerName${i+1}`}
										placeholder={`Player #${i+1}`}
									/>
								</div>

								<div className="split-row-pair-wrapper">
									<Select
										id={`playerName${i+1}`}
										placeholder={'Split'}
										options={[
											{
												value: '25',
												label: '25%'
											},
											{
												value: '50',
												label: '50%'
											},
											{
												value: '75',
												label: '75%'
											},
											{
												value: '100',
												label: '100%'
											},
										]}
									/>
								</div>

								<div className="split-row-pair-wrapper">
									<div className="split-input-wrapper">
											<Input
												id={`playerSplit${i+1}`}
												placeholder={`Player #${i+1}'s Split`}
												disabled={true}
											/>

											<button id="copyIconButton3">
												<img id="copyIcon3" src={copyIcon} onClick={() => copyToClipboard(`${i+3}`)}/>
											</button>

											<img id={`checkMarkIcon${i+3}`} className="checkMarkIcon" src={checkMarkIcon}/>
									</div>

								</div>
							</div>
						)
					}

					if(splitRows.length < 1) {
						return (
							<div className="split-row loot-split-row margin-left margin-right mt-5 mb-5">
								<p>Please use the <span className="gold">Number of Players</span> above 👆🏻 to begin calculating player splits</p>
							</div>
						)
					}

					return (
						<>
							{splitRows}
						</>
					)
				}

				return (
					<div key={record.key}
							 id={(record.key != '4' && record.key != '6') ? `${(record.title).toLowerCase().replaceAll(' ', '-').replaceAll("'", '')}-wrapper2` : 'calculate-button-wrapper'}
							 className="loot-split-row margin-left margin-right">
						<p>{record.title}</p>

						<div className="inputWrapper">
							{renderInput(record)}

							{record.title === "Each Player's Split" && (
								<>
									<button id="copyIconButton2">
										<img id="copyIcon2" src={copyIcon} onClick={() => copyToClipboard('2')}/>
									</button>

									<img id="checkMarkIcon2" src={checkMarkIcon}/>
								</>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default LootSplitCalculatorPartial