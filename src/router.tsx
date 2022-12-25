import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/home/index'
import GuildCharter from "./pages/guild-charter";


const AppRouter = () => {
	return (
		<Router>
			<Switch>
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