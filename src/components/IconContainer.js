import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const IconContainer = ({ iconName }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.iconContainer}>
      {iconName === 'arrow-left' 
        ? 
        <Icon name={iconName} color={'white'} size={20} onPress={() => navigation.goBack()} />
        :
        <Icon name={iconName} color={'white'} size={20} />
      }
    </View>
  )
}

export default IconContainer

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0099',
        width: 45,
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white'
    },
})