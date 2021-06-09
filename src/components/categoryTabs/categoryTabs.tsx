import { useState, useEffect, useLayoutEffect, useCallback} from 'react'
import Taro, { useDidShow, useReady } from '@tarojs/taro' 
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './categoryTabs.scss'

function CategoryTabs() {
  const [tabList, setTabList] = useState(
    [
      { title: '测试分类一' },
      { title: '测试分类二' },
      { title: '测试分类三' },
      { title: '测试分类四' },
      { title: '测试分类五' },
      { title: '测试分类六' }
    ]
  )

  const [currentIdx, setCurrent] = useState(0);

  const handleClick = (val: number) => {
    console.log(val);
    setCurrent(val);
  }

  return (
    <View className="category-tabs">
      <AtTabs
        current={currentIdx}
        scroll
        tabList={tabList}
        onClick={handleClick}>
        <AtTabsPane current={currentIdx} index={0}>
          <View style='font-size:18px;text-align:center;height:100px;'>测试分类一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentIdx} index={1}>
          <View style='font-size:18px;text-align:center;height:100px;'>测试分类二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentIdx} index={2}>
          <View style='font-size:18px;text-align:center;height:100px;'>测试分类三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentIdx} index={3}>
          <View style='font-size:18px;text-align:center;height:100px;'>测试分类四的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentIdx} index={4}>
          <View style='font-size:18px;text-align:center;height:100px;'>测试分类五的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentIdx} index={5}>
          <View style='font-size:18px;text-align:center;height:100px;'>测试分类六的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}

export default CategoryTabs