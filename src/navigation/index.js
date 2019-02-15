import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Search from "../components/Search";
import History from "../components/History";
import Building from "../components/Building";

const BuildingStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: () => ({
      title: "Lamp Control"
    })
  },
  Building
});

const HistoryStack = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: () => ({
      title: "Lamp Control"
    })
  },
  Building
});

const TabNavigator = createBottomTabNavigator({
  Search: BuildingStack,
  History: HistoryStack,
});

export default createAppContainer(TabNavigator);
