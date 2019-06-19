import { Navigation } from 'react-native-navigation';

const startTabs =() =>{
    Navigation.startTabBasedApp({
        tabs: [
          {
            screen: "issSpotter.locationScreen",
            label: "Set Location",
            title: "Set Location"
          },
          {
            screen: "issSpotter.listScreen",
            label: "Display List",
            title: "Display List"
          }
        ]
      });
}

export default startTabs;