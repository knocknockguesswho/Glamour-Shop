import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconShop,
  IconBag,
  IconProfile,
  IconHomeActive,
  IconShopActive,
  IconBagActive,
  IconProfileActive,
} from '../../../assets/icon';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Shop') {
      return active ? <IconShopActive /> : <IconShop />;
    }
    if (title === 'Bag') {
      return active ? <IconBagActive /> : <IconBag />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 10,
    color: active ? '#DB3022' : '#9B9B9B',
    marginTop: 5,
  }),
});
