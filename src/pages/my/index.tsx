import { useState, useEffect, useCallback } from 'react'
import { useDidShow } from '@tarojs/taro' 
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import request from '../../utils/request'
import apiUrl from '../../api/index'


export default function My() {
  // getUserData();
  const [userData, setState] = useState({url: '', userName: '测试用户', routerLink: [] });
  const setStateFn = useCallback(data =>{
    setState(data);
  }, [])

  useDidShow(() =>{
  })

  function getUserData() {
    request({
      url: apiUrl.my,
      method: 'POST'
    }).then(res =>{
      console.log('my===', res)
      if (res.data) {
        setStateFn({
          url: res.data.url,
          userName: res.data.userName,
          routerLink: res.data.routerLink
        })
      }
    }).catch(err =>{
      console.log(err);
    })
  }



  return (
    <View className='my'>
      <View className="my-icon">
        <Image src={userData.url}></Image>
        <Text>{userData.userName}</Text>
      </View>

      <View className="router-link">
        {
          userData.routerLink.map(item =>{
            return (
              <View
                onClick={() =>{
                  this.navigateTo({
                    url: item.url
                  })
                }}
                >{item.text}</View>
            )
          })
        }
      </View>
    </View>
  )
}