import React from 'react';
import Footer from "../../components/Footer1"
import { Row, Col, Tabs } from 'antd'
import Divider from "../home/components/Divider";
import './css/lootSplit.css'
import Nav from "../../components/Nav";
import LootSplitCalculatorByLoot from "./components/lootSplitCalculatorByLoot";
import LootSplitCalculatorBuyout from "./components/lootSplitCalculatorBuyout";

const LootSplit = () => {
	return(
		<div>
			<Nav />

			<Divider dividerSize="large" />

			<Row id="lootSplit">
				<Col
					id="lootSplitWrapper"
					span={18}
					className="margin-left margin-right"
				>
					<div className="blank-space"> </div>

					<h1 id="lootSplitTitle">
						<span className="underline">Loot Split Calculator</span>
					</h1>

					<div className="charterRow">
						<p>
							 Ahh... loot splits. The place where all your hard work pays off. No need for a spreadsheet or doing long division in your head. We currently have two calculators for you:
						</p>
					</div>

					<div className="charterRow">
						<p>
							<span className="underline">By Loot</span> is for when you are splitting the loot itself evenly amongst your party members.
						</p>
					</div>

					<div className="charterRow">
						<p>
							<span className="underline">Buyout</span> is when one person buys the loot split at a % of the total and pay people a cut from that %
						</p>
					</div>

					<div className="charterRow">
						<p>
							Check them out below 👇🏻
						</p>
					</div>

					<div className="blank-space"> </div>

					<div className="charterRow">
						<Tabs
							defaultActiveKey="1"
							centered
						>
							<Tabs.TabPane tab="By Loot" key="tab1">
								<div className="blank-space"> </div>

								<LootSplitCalculatorByLoot />
							</Tabs.TabPane>

							<Tabs.TabPane tab="Buyout" key="tab2">
								<div className="blank-space"> </div>

								<LootSplitCalculatorBuyout />
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