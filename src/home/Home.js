import React from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Search from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/AntDesign';
// import style from '../../public/home';
const Home = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: require('../../assets/Sushi.png'),
      text: 'Burger',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: require('../../assets/Pizza.png'),
      text: 'Burger',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      image: require('../../assets/Hamburger.png'),
      text: 'Burger',
    },
  ];

  const Item = ({image, text}) => (
    <View style={{marginTop: 25}}>
      <View
        style={{
          backgroundColor: 'pink',
          width: 40,
          height: 40,
          position: 'absolute',
          left: 23,
          borderRadius: 4,
        }}
      />
      <Image
        source={image}
        style={{
          marginHorizontal: 25,
        }}
      />
      <Text style={{textAlign: 'center', fontSize: 12}}>{text}</Text>
    </View>
  );
  return (
    <>
      <View
        style={{
          marginTop: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Menu name="menu" size={25} style={{marginLeft: 8}} />
        <Image
          source={require('../../assets/Ellipse.png')}
          style={{width: 60, height: 60}}
        />
        <Search
          name="search"
          style={{
            position: 'absolute',
            right: 20,
            fontSize: 20,
            fontWeight: 'bold',
            bottom: 23,
            color: 'white',
            elevation: 2,
          }}
        />
      </View>

      <View style={{marginTop: 20, marginLeft: 15}}>
        <Text style={{color: '#EB5757', fontSize: 20}}>Hi, Shayan</Text>
        <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>
          Find your Delicious Food
        </Text>
      </View>
      <SafeAreaView>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({item}) => <Item image={item.image} text={item.text} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

      <Text
        style={{
          marginTop: 60,
          marginBottom: 30,
          marginLeft: 20,
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        Popular
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 10,
            elevation: 7,
          }}>
          <Text
            style={{
              fontSize: 17,
              marginBottom: 5,
              margin: 3,
              fontWeight: 'bold',
            }}>
            Pizza
          </Text>
          <Image
            source={require('../../assets/Pizza1.png')}
            style={{height: 100, width: 100, margin: 5}}
          />
          <Plus
            name="plussquareo"
            size={20}
            style={{
              backgroundColor: 'pink',
              margin: 6,
              fontSize: 20,
              padding: 6,
              elevation: 6,
              borderRadius: 4,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 10,
            elevation: 7,
          }}>
          <Text
            style={{
              fontSize: 17,
              marginBottom: 5,
              margin: 3,
              fontWeight: 'bold',
            }}>
            Pizza
          </Text>
          <Image
            source={require('../../assets/Pizza1.png')}
            style={{height: 100, width: 100, margin: 5}}
          />
          <Plus
            name="plussquareo"
            size={20}
            style={{
              backgroundColor: 'pink',
              margin: 6,
              fontSize: 20,
              padding: 6,
              elevation: 6,
              borderRadius: 4,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Home;
