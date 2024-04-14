import { useRoutes } from 'react-router-dom'
import 'src/App.css'
import routes from 'src/routes/routes'

const App = () => {
    const appRoutes = useRoutes(routes)
    return appRoutes
}

export default App
