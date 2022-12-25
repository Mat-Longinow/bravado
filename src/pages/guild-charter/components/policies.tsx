import React from 'react';
import { List, Tabs } from 'antd'

const Policies = () => {

	const bravadoRoleRequirements = [
		{
			title: '- 3 active weeks in guild'
		},
		{
			title: '- 1300 IP in T7 gear wearing an approved DPS build'
		},
		{
			title: '- 1300 IP in T7 gear wearing an approved non-DPS build'
		}
	]

	const memberRoles = (
		<>
			<h1 className="mt-5"><span className="gold">Member Roles</span></h1>

			<div className="charterRow mb-5">
				<p>Currently, we have a couple different tiers of players in our community.</p>
			</div>

			<div className="charterRow mb-5">
				<h3><span className="gold">Braveling (New Recruit)</span></h3>

				<p>These are players who are new recruits. Whether they are new to Albion as a whole, or just our community here at Bravado, they are still on their way to being a full fledged Bravado!</p>
			</div>

			<div className="charterRow mb-5">
				<h3><span className="gold">Bravado (Full Member)</span></h3>

				<p>
					These are players who are solidified members of our community that we have built trust with.
					These players have the following requirements:
				</p>

				<List
					itemLayout="horizontal"
					dataSource={bravadoRoleRequirements}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={item.title}
							/>
						</List.Item>
					)}
				/>
			</div>

			<div className="charterRow">
				<h3><span className="gold">Council (Leadership)</span></h3>

				<p>This is your wise, attractive, great-at-everything leadership council that guides the ship called Bravado with precision and care.</p>
				<p>* This is an invite only role</p>
			</div>
		</>
	)

	const referralProgram = (
		<>
			<h1 className="mt-5"><span className="gold">Referral Program</span></h1>

			<div className="charterRow">
				<p>Any player in the guild who recruits another person into the guild and that person subsequently achieves the Bravado role will receive one million silver.
					This bounty can be achieved multiple times with multiple referrals. The bounty will be paid once the new recruit reaches membership status. However,
					the new recruit must reach member status within two months of their recruitment date for the bounty recipient to qualify. (Existing members alts don't count.
					See guild roles for more details on achieving the Bravado role)</p>
			</div>
		</>
	)

	const familyFriendlyComms = (
		<>
			<h1 className="mt-5"><span className="gold">Family Friendly Comms</span></h1>

			<div className="charterRow">
				<p>Here at Bravado we foster a positive and welcoming atmosphere for players to show up, hang out and all have fun together.
					We value treating each other with respect and helping one another out. We have no room for toxicity, egotism, and disrespect.</p>
			</div>

			<div className="charterRow">
				<p>Content must be SFW (safe for work) and we have a zero tolerance stance towards racism, discrimination, and content that degrades - both in chat channels and comms.</p>
			</div>

			<div className="charterRow">
				<p>We focus on friendly communication with each other to keep our tight knit feel alive and well.</p>
			</div>

			<div className="charterRow">
				<p>Let's keep it clean and keep it fun 💪🏻</p>
			</div>
		</>
	)


	return(
		<>
			<h2>Guild Policies</h2>

			<div className="charterRow mb-5">
				<p>
					Below, we will get into some more specifics about our guild policies. Click on the different tabs to see the different policies.
				</p>
			</div>

			<div className="charterRow">
				<Tabs
					defaultActiveKey="1"
				>
					<Tabs.TabPane tab="Member Roles" key="tab1">
						{memberRoles}
					</Tabs.TabPane>

					<Tabs.TabPane tab="Referral Program" key="tab2">
						{referralProgram}
					</Tabs.TabPane>

					<Tabs.TabPane tab="Family Friendly Comms" key="tab3">
						{familyFriendlyComms}
					</Tabs.TabPane>
				</Tabs>
			</div>

		</>
	)
}

export default Policies