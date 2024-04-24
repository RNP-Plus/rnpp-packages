import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer';
import {PaperProvider} from "react-native-paper";

export default function Layout() {
    return (
        <PaperProvider>
            <GestureHandlerRootView style={{flex: 1}}>
                <Drawer>
                    <Drawer.Screen
                        name={'index'}
                        options={{
                            title: 'Home'
                        }}/>
                </Drawer>
            </GestureHandlerRootView>
        </PaperProvider>
    );
}
