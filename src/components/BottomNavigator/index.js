import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TabItem from '../TabItem';

const BottomNavigator = ({state, descriptors, navigation}) => {

    const FocusedOptions = descriptors[state.routes[state.index].key].options;

    if (FocusedOptions.tabBarVisible === false){
        return null;
    }

    return (
        <View style={styles.container}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
                <TabItem
                    key={index}
                    label={label}
                    isFocused={isFocused}
                    onPress={onPress}
                    onLongPress={onLongPress}
                />
            );
          })}
        </View>
      );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FFFFfF',
        justifyContent: 'space-between',
        paddingHorizontal: 55,
        paddingHorizontal: 14
    }
})