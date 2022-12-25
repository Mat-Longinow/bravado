import React from 'react';
import Footer from "../../components/Footer1"
import { Row, Col } from 'antd'
import Divider from "../home/components/Divider";
import './css/guildCharter.css'
import logo from "./../../assets/nav-logo.png"
import RequirementsList from "./components/requirements";
import Offerings from "./components/offerings";
import Policies from "./components/policies";
import Nav from "../../components/Nav";

const GuildCharter = () => {
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
					<div id="logoWrapper">
						<img alt="guild logo" src={logo}/>
					</div>

					<h1 id="charterTitle">
						<span className="underline">Bravado's Guild Charter</span>
					</h1>

					<div className="charterRow">
						<p>
							Welcome to our Guild Charter! We, here at Bravado, are a community of Albion players that value <span className="gold">fun</span>, <span className="gold">positive</span> and <span className="gold">supportive</span>, <span className="gold">engaging community</span> as we play a game we all love.
							Do you like to strike down <span className="strikethrough">noobs</span> other players as you <span className="strikethrough">whisper them uninstall directions</span> loot their bodies
							and ride off into the sunset with the taste of sweet, sweet victory coursing through your veins? ⚔️ 🩸 💰 Then you are definitely in the right place.
						</p>
					</div>

					<div className="charterRow">
						<p>
							I like to think of Bravado as <span className="underline">audacious courage</span>, and that is exactly who we aspire to be as a guild.
						</p>
					</div>

					<div className="charterRow">
						<p>
							We are a <span className="underline">Black Zone focused</span> guild who loves to be <span className="gold">scrappy</span>, <span className="gold">take fights</span> at every turn, <span className="gold">gank</span> often, and generally show others our <span className="gold">prowess</span> in battle.
						</p>
					</div>

					<div className="charterRow">
						<p>
							We are absolutely down to gather, take out some world bosses, play the market, and even push for good rankings as a guild.

							However, our focus is on <span className="gold">PVP activities</span> that make the name Bravado <span className="underline">command respect</span> from the players who engage with us on our home turf and on the battlefield.
						</p>
					</div>

					<div className="blank-space"> </div>

					<RequirementsList />

					<div className="blank-space"> </div>

					<Offerings />

					<div className="blank-space"> </div>

					<Policies />

					<div className="blank-space"> </div>

				</Col>
			</Row>

			<Divider dividerSize="large" />

			<Footer />
		</div>
	)
}

export default GuildCharter