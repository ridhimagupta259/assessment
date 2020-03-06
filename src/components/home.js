import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Image,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/888/f85f8f5f-f06a-4b9e-9fb4-7ba889aaafdcthumb-2x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/653/77315a9f-4605-4cef-9578-3d979a179b971x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/992/ae464454-b7ef-4098-b591-0ca9bddc460cthumb-2x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/936/00ff326c-6c49-4b2a-9157-4c9775943f3cthumb-2x.jpg',
        },
      ],
      plans: [
        {
          head: 'BASIC',
          line: 'Zoylo Basic Health Checkup',
          line2: '59 tests included',
          value1: '₹1750',
          value2: '₹699',
          name: 'ZOYLO LABS',
          name2: 'BOOK NOW',
        },
        {
          head: 'BASIC',
          line: 'Zoylo Vital Bone Care',
          line2: '2 tests included',
          value1: '₹1800',
          value2: '₹710',
          name: 'ZOYLO LABS',
          name2: 'BOOK NOW',
        },
        {
          head: 'BASIC',
          line: ' Basic Health Checkup',
          line2: '3 tests included',
          value1: '₹1600',
          value2: '₹700',
          name: 'ZOYLO LABS',
          name2: 'BOOK NOW',
        },
      ],
    };
  }

  render() {
    const {arr, plans} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'lightgrey'}}>
        
        <ScrollView>
          <View style={{flex: 0.2, backgroundColor: 'white'}}>
            <FlatList
              horizontal
              data={arr}
              renderItem={({item}) => {
                return (
                  <View style={[styles.container, {height: 150}]}>
                    <Image source={{uri: item.image}} style={styles.img} />
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.med}>
            <View style={styles.box}>
              <Image
                style={{width: 50, height: 50, marginBottom: 10}}
                source={require('../assets/capsule.png')}
              />
              <Text style={{fontSize: 10}}>Medicines</Text>
            </View>
            <View style={styles.box}>
              <Image
                style={{width: 50, height: 50, marginBottom: 10}}
                source={require('../assets/microscope.png')}
              />
              <Text style={{fontSize: 10}}>Test & Packages</Text>
            </View>
            <View style={styles.box}>
              <Image
                style={{width: 50, height: 50, marginBottom: 10, marginTop: 5}}
                source={require('../assets/computer.png')}
              />
              <Text style={{fontSize: 10}}>Online Consultation</Text>
            </View>
          </View>
          <View style={styles.section3}>
            <View style={{flex: 0.2, margin: 10}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                source={require('../assets/stetho.png')}
              />
              <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 10}}>
                Doctor
              </Text>
              <Text style={{fontSize: 10}}>Appointment</Text>
            </View>
            <View style={{flex: 0.2, margin: 10}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                source={require('../assets/towel.png')}
              />
              <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 10}}>
                Wellness
              </Text>
              <Text style={{fontSize: 10, alignSelf: 'center'}}>Packages</Text>
            </View>
            <View style={{flex: 0.2, margin: 10}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                source={require('../assets/ask.png')}
              />
              <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 10}}>
                Ask
              </Text>
              <Text style={{fontSize: 10, alignSelf: 'center'}}>Zoy</Text>
            </View>
            <View style={{flex: 0.2, margin: 10}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                source={require('../assets/home.png')}
              />
              <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 10}}>
                Home
              </Text>
              <Text style={{alignSelf: 'center', fontSize: 10}}>
                Healthcare
              </Text>
            </View>
            <View style={{flex: 0.2, margin: 10}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                source={require('../assets/package.png')}
              />
              <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 10}}>
                Hospital
              </Text>
              <Text style={{fontSize: 10, alignSelf: 'center'}}>Packages</Text>
            </View>
          </View>
          <View style={styles.txt}>
            <Text>Diagnostic Packages by Zoylo Labs</Text>
            <Text>View All</Text>
          </View>
          <View style={styles.container}>
            <FlatList
              horizontal
              data={plans}
              renderItem={({item}) => {
                return (
                  <View style={styles.newcontainer}>
                    <View style={{flex: 0.5, backgroundColor: 'pink'}}>
                      <View
                        style={{
                          flex: 1,
                          marginTop: 8,
                          marginLeft: 8,
                        }}>
                        <Text
                          style={{
                            backgroundColor: '#fff',
                            height: 15,
                            width: 60,
                          }}>
                          {item.head}
                        </Text>
                      </View>
                      <View style={{flex: 1, marginTop: 15}}>
                        <Text style={{fontWeight: '500'}}>{item.line}</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text>{item.line2}</Text>
                      </View>
                    </View>
                    <View
                      style={{flex: 0.5, backgroundColor: '#fff', margin: 10}}>
                      <View style={{flex: 1}}>
                        <Text style={{color: 'green', opacity: 0.5}}>
                          {item.value1}
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            color: 'green',
                            fontSize: 20,
                            fontWeight: '700',
                          }}>
                          {item.value2}
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text
                          style={{
                            opacity: 0.2,
                            fontSize: 20,
                            fontWeight: '500',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={{height: 20, width: 90}}>
                        <Text
                          style={{
                            color: 'orange',
                            fontWeight: '500',
                            fontSize: 15,
                          }}>
                          {item.name2}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    shadowColor: '#999999',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 1,
    //backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: '#ccc',
  },
  img: {
    height: 100,
    width: 200,
    borderRadius: 5,
  },
  med: {
    flex: 2,
    backgroundColor: '#ccc',
    margin: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    flex: 2,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    //justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#999999',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  section3: {
    flex: 0.15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    flex: 20,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 10,
  },
  newcontainer: {
    height: 300,
    width: 150,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#999999',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 1,
  },
});

export default Home;
