import React from 'react';
import Footer from "../../components/Footer1"
import { Row, Col, Tabs } from 'antd'
import Divider from "../home/components/Divider";
import './css/lootSplit.css'
import Nav from "../../components/Nav";
import LootSplitCalculator from "./components/lootSplitCalculator";

const LootSplit = () => {
	return(
		<div>
			<Nav />

			<Divider dividerSize="large" />

			<Row id="guildCharter">
				<Col
					id="charterWrapper"
					span={18}
					className="margin-left margin-right"
				>
					<div className="blank-space"> </div>

					<h1 id="charterTitle">
						<span className="underline">Loot Split Calculator</span>
					</h1>

					<div className="charterRow">
						<p>
							 Ahh... loot splits. The place where all your hard work pays off. No need for a spreadsheet or doing long division in your head. Just use our nifty tool below 👇🏻
						</p>
					</div>

					<div className="blank-space"> </div>

					<div className="charterRow">
						<Tabs
							defaultActiveKey="1"
						>
							<Tabs.TabPane tab="By Loot" key="tab1">
								<div className="blank-space"> </div>

								<LootSplitCalculator />
							</Tabs.TabPane>

						</Tabs>
					</div>


					<div className="blank-space"> </div>
				</Col>
			</Row>

			<Divider dividerSize="large" />

			<Footer />
		</div>
	)
}

export default LootSplit