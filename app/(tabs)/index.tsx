import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from '../../Component/Search';
import Ionicons from '@expo/vector-icons/Ionicons';
import WaveThingy from '../../Component/WaveThingy'

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar searchDeals={(term: string) => console.log(term)} />
        <Ionicons style={styles.icon} name="search" size={24} color="black" />
      </View>

        <WaveThingy/>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,

  },
  searchContainer: {
    display:'flex',
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    // backgroundColor:'pink'

  },
  icon: {
    marginLeft: 10,
  },
});
