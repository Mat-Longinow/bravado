import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/home/index'
import GuildCharter from "./pages/guild-charter";
import LootSplit from "./pages/loot-split";


const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path={`/loot-split`}>
					<LootSplit />
				</Route>
				<Route path={`/guild-charter`}>
					<GuildCharter />
				</Route>
				<Route path={`/`}>
					<Home />
				</Route>
			</Switch>
		</Router>

	)
}

export default AppRouter