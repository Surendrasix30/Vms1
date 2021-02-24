// screens/Home.js

import React from 'react';
import { Button, View, Text, StyleSheet, Image} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

// Item array for the dropdown
const items = [
  { id: 1, name: 'Vishnu prabhalan-964599XXXX' },
  { id: 2, name: 'Vinodh K-855320XXXX' },
  { id: 3, name: 'Sreejith S-980961XXXX' },
  { id: 4, name: 'Sarthak Pujari-955623XXXX' },
  { id: 5, name: 'Rohit-811303XXXX' }
];

class Home extends React.Component {
  state = {
    selectedItems: [
      { id: 1, name: 'Vishnu prabhalan-964599XXXX' },
      { id: 2, name: 'Vinodh K-855320XXXX' },
      { id: 3, name: 'Sreejith S-980961XXXX' },
      { id: 4, name: 'Sarthak Pujari-955623XXXX' },
      { id: 5, name: 'Rohit-811303XXXX' }
    ]
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
          <View>
          <Image
            style={{
              resizeMode: "center",
              height: 100,
              width: 200,
              left: 80
            }}
            source={require("../Images/logo.png")}
          />
          </View>
        <Text style={styles.titleText}>
          Employee Contact Number*
        </Text>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          onItemSelect={selectedItems}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: '#222',
          }}
          itemsContainerStyle={{
            maxHeight: '60%',
          }}
          items={items}
          defaultIndex={2}
          placeholder="Select Employee Name and ID "
          resPtValue={false}
          underlineColorAndroid="transparent"
        />
      <View style={styles.Button}></View>
        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate('ProfileDetails')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  headingText: {
    paddingRight: 8,
  },
  Button: {
  padding: 8,
  }
});


export default Home;