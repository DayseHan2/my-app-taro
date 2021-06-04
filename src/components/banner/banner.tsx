import { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './banner.scss'

export default class Banner extends Component {
  constructor (props) {
    super(props);
    this.state = {
      imgList: [
        require('../../images/banner1.jpg'),
        require('../../images/banner2.jpg'),
        require('../../images/banner3.jpg'),
      ]
    }
  }

  componentWillMount () {
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

  onSearch () {
    console.log(this.state.value);
  }

  render () {
    return (
      <View className='banner'>
        <Swiper
          className='swiper-box'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay>
          {
            this.state.imgList.map( item => {
              return (
                <SwiperItem>
                  <Image className='swiper-item-img' src={item} ></Image>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
