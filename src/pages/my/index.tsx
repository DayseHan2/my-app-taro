import { useState, useEffect, useCallback} from 'react'
import Taro, { useDidShow, useReady } from '@tarojs/taro' 
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import request from '../../utils/request'
import apiUrl from '../../api/index'


export default function My() {
  // getUserData();

  console.log('111', 'default');
  const [userData, setState] = useState({imgUrl: '', userName: '测试用户', routerLink: [] });

  useReady(() =>{
    console.log('222','useReady');
    getUserData();
  })
  useDidShow(() =>{
    console.log('333', 'useDidShow');
  })

  function getUserData() {
    request({
      url: apiUrl.my,
      method: 'POST'
    }).then(res =>{
      console.log('my===', res)
      if (res.data) {
        setState({
          imgUrl: res.data.imgUrl,
          userName: res.data.userName,
          routerLink: res.data.routerLink
        })
      }
    }).catch(err =>{
      console.log(err);
    })
  }

  const routerFn = url =>{
    console.log(url);
    Taro.navigateTo({
      url: url,
      fail: function() {
        Taro.switchTab({
          url: url
        })
      }
    })
  }

  return (
    <View className='my'>
      <View className="my-icon">
        <Image src={userData.imgUrl}></Image>
        <Text>{userData.userName}</Text>
      </View>

      <View className="router-link">
        {
          userData.routerLink.map(item =>{
            return (
              <View
                key={item.id}
                onClick={() =>{
                  return routerFn(item.url);
                }}
                >
                <Text>{item.text}</Text>
                <Image src={require('../../images/icon_right.svg')}></Image>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}