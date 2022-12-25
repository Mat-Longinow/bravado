import React from 'react';
import { List } from 'antd'

const RequirementsList = () => {

	const requirementsList = [
		{
			title: '💬  English Speaking'
		},
		{
			title: '🖥️ Discord active (voice chat required 🎙️)'
		},
		{
			title: '👍🏻 Commitment to friendly, respectful & positive communication'
		},
		{
			title: '🧙🏻‍♂️ 18+ age'
		},
		{
			title: '⚔️ 5 Million+ PVP Fame'
		}
	]


	return(
		<>
			<h2>Requirements</h2>

			<div className="charterRow">
				<p>
					Hooked yet? Well, here is a little bit about what we require:
				</p>
			</div>

			<div className="charterRow">
				<List
					itemLayout="horizontal"
					dataSource={requirementsList}
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

export default RequirementsList