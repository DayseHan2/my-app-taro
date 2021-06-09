import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Category {
  state: StateType,
  props: propType
}

type StateType = {
  [key: string]: any
};

type propType = {
  [key: string]: any
}
class Category extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='category'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

export default Category
