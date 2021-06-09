import { useState, useEffect, useLayoutEffect, useCallback} from 'react'
import Taro, { useDidShow, useReady } from '@tarojs/taro' 
import { View, Text } from '@tarojs/components'
import CategoryTabs from '../../components/categoryTabs/categoryTabs'
import './index.scss'
import request from 'src/utils/request'
import apiUrl from 'src/api/index'

function Category() {
  useDidShow(() =>{

  })

  return (
    <View className='category'>
      <CategoryTabs />
    </View>
  )
}

export default Category