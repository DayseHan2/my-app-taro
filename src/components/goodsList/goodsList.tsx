import { Component } from 'react'
import Taro from '@tarojs/taro' 
import { View, Image, Text } from '@tarojs/components'
import request from '../../utils/request'
import ApiUrl from '../../api/index'
import './GoodsList.scss'

interface GoodsList {
  state: StateType,
  props: propType
}

type StateType = {
  [key: string]: any
};

type propType = {
  [key: string]: any
}

class GoodsList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataList: []
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
    request({
      url: ApiUrl.goodsList,
      method: 'GET'
    }).then(res => {
      console.log('goodsList', res);
      if (res.data) {
        this.setState({
          dataList: res.data
        })
      }
    }).catch(err => {
      console.log(err);
    });
  }

  navDetail(item: object) {
    Taro.navigateTo({
      url: '/pages/detail/index' + `?img=${item.img}&name=${item.name}`
    })
  }

  render () {
    return (
      <View className='goods-list'>
        {
          this.state.dataList.map( (item) => {
            return (
              <View key={item.id} className="item-box" onClick={() =>{
                this.navDetail(item)
                }}>
                <Image className='item-img' src={item.img} mode='top'></Image>
                <Text className="item-text">{item.name}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default GoodsList
