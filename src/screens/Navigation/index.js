import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Home';

export default StackNavigator({
    Home: { screen: HomeScreen },
}, {
        headerMode: 'none'
    });
