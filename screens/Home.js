import { useState } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { Icon, Text } from '@rneui/themed'
import Swiper from 'react-native-swiper'

import { data } from '../quotes'

const TitleText = props => {
  return <Text style={viewStyle.quote}>{props.label}</Text>
}

const Home = () => {
  const [quotes, setQuotes] = useState(data)

  // useEffect(() => {
  //   fetch('https://type.fit/api/quotes')
  //     .then(res => res.json())
  //     .then(data => setQuotes(data))
  // }, [])

  const image = {
    uri: 'https://images.unsplash.com/photo-1503786482448-3351db7b0f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  }

  return (
    <Swiper loop={false} showsPagination={false} index={1}>
      <View style={viewStyle}>
        <TitleText label='About' />
      </View>
      <ImageBackground source={image} resizeMode='cover' style={viewStyle.image}>
        <View style={viewStyle.overlayView} />
        <Swiper horizontal={false} loop={true} showsPagination={false} index={1}>
          {quotes?.map((quote, id) => {
            return (
              <View key={id} style={viewStyle}>
                <Icon name='chevron-up-outline' type='ionicon' color='#517fa4' />
                <View>
                  <Text
               
                    style={viewStyle.quote}>
                    {quote.text}
                  </Text>
                  <Text style={viewStyle.author}>{quote.author} </Text>
                </View>
                <View>
                  <Icon name='chevron-down-outline' type='ionicon' color='#517fa4' />
                </View>
              </View>
            )
          })}
        </Swiper>
      </ImageBackground>
    </Swiper>
  )
}

const viewStyle = StyleSheet.create({
  flex: 1,
  justifyContent: 'space-between',
  marginBottom: 40,
  marginTop: '10%',
  marginHorizontal: 50,
  overlayView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255,254,254, 0.63)',
  },
  image: {
    flex: 1,
    backgroundColor: '#00cc00',
  },
  quote: {
    fontSize: 25,
    color: 'gray',
    marginBottom: '20%'
  },
  author: {
    fontSize: 10,
    color: 'gray',
    textAlign: 'right',
  },
})

export default Home
