import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Easing } from 'react-native-reanimated';

const _color = 'red';
const _size = 100;

const WaveThingy: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                repeatReverse: false,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size / 2,
    backgroundColor: _color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WaveThingy;
