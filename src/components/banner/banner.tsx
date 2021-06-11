import { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './banner.scss'

interface Banner {
  state: StateType,
  props: propType
}

type StateType = {
  [key: string]: any
};

type propType = {
  [key: string]: any
}
class Banner extends Component {
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
  }

  componentDidMount () {
  }

  componentWillUnmount () { 
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
          autoplay
        >
          {
            this.state.imgList.map( (item, idx) => {
              return (
                <SwiperItem key={idx}>
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

export default Banner
