import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import request from '../../utils/request'
import ApiUrl from '../../api/index'

export default class My extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getUserData() {
    request({
      url: ApiUrl.my,
      method: 'POST',
    }).then(res =>{
      console.log('my===', res);
      if (res.data) {

      }
    }).catch(err =>{
      console.log(err);
      
    })
  }

  render () {
    return (
      <View className='my'>
        <View className="my-icon">
          {/* <Image :src="this.simgUrl"></Image> */}
          <Text>Hello world!</Text>
        </View>
      </View>
    )
  }
}
