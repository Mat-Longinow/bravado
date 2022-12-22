import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/home/index'


const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path={`/`}>
					<Home />
				</Route>
			</Switch>
		</Router>

	)
}

export default AppRouter