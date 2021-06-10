import { useDidShow } from '@tarojs/taro' 
import { View } from '@tarojs/components'
import CategoryTabs from '../../components/categoryTabs/categoryTabs'
import './index.scss'

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