import React from 'react';
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Plus from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import InfoCircleIcon from 'react-native-vector-icons/AntDesign';
const Home = () => {
    return <View style={styles.screen1} />;
};

const About = () => {
    return <View style={styles.screen2} />;
};

export default function Footer() {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';

        switch (routeName) {
            case 'Home':
                icon = 'home';
                break;
            case 'About':
                icon = 'infocircleo';  // Corrected icon name
                break;

        }

        return (
            <InfoCircleIcon
                name={icon}
                size={25}
                color={routeName === selectedTab ? 'black' : 'gray'}
            />
        );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <NavigationContainer>
            <CurvedBottomBarExpo.Navigator
                type="DOWN"
                style={styles.bottomBar}
                shadowStyle={styles.shawdow}
                height={55}
                circleWidth={50}
                bgColor="white"
                initialRouteName="title1"
                borderTopLeftRight
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Click Action')}
                        >
                            <Plus name={'plus'} color="gray" size={25} />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBarExpo.Screen
                    name="Home"
                    position="LEFT"
                    component={() => <Home />}
                />
                <CurvedBottomBarExpo.Screen
                    name="About"
                    component={() => <About />}
                    position="RIGHT"
                />
            </CurvedBottomBarExpo.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomBar: {},
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 30,
        height: 30,
    },
    screen1: {
        flex: 1,
        backgroundColor: '#BFEFFF',
    },
    screen2: {
        flex: 1,
        backgroundColor: '#FFEBCD',
    },
});
