import React from 'react';
import { List } from 'antd'

const Offerings= () => {

	const offeringsList = [
		{
			title: '😎 No drama, non-toxic casual environment'
		},
		{
			title: '🚫 Never any mandatory CTAs'
		},
		{
			title: '💪🏻 Experienced players to teach you PVE and PVP'
		},
		{
			title: '💬️ English speaking guild'
		},
		{
			title: '🏰️ Black Zone and Roads Hideout'
		}
	]


	return(
		<>
			<h2>Offerings</h2>

			<div className="charterRow">
				<p>
					So then, what will we offer you as a player you ask? Great question, take a gander at this here list of things:
				</p>
			</div>

			<div className="charterRow">
				<List
					itemLayout="horizontal"
					dataSource={offeringsList}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={item.title}
							/>
						</List.Item>
					)}
				/>
			</div>
		</>
	)
}

export default Offerings