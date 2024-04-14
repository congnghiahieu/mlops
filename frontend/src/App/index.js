import { useRoutes } from 'react-router-dom';
import routes from 'src/routes';

const App = () => {
	const appRoutes = useRoutes(routes);
	return appRoutes;
};

export default App;
