import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './goodsList.scss'
import request from "../../utils/request"

export default class Banner extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ListData: []
    }
  }

  componentWillMount () {
    this.getList();
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  componentWillUnmount () { 
    console.log('componentWillUnmount');
  }

  componentDidShow () {
    console.log('componentDidShow');
  }

  componentDidHide () { 
    console.log('componentDidHide');
  }

  getList () {
    const data = request({
      url: 'https://api.virapi.com/vir_github1be479fgc18h9/demo/goodsList',
    });
    console.log(data);
  }

  render () {
    return (
      <View className='banner'>
        {
            this.state.ListData.map( item => {
              return (
                <View key={item.id}>
                  <Image className='swiper-item-img' src={item} ></Image>
                  <Text>{item.title}</Text>
                </View>
              )
            })
          }
      </View>
    )
  }
}
