import { Provider } from 'mobx-react';
import store from './src/stores';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <Provider {...store}>
                <AppContainer/>
            </Provider>
        )
    }
}