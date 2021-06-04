import { Component } from 'react'
import { View } from '@tarojs/components'
import './search.scss'
import { AtButton, AtInput } from 'taro-ui'

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
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
      <View className='search'>
        <AtInput
          className="search-ipt"
          name='value'
          title=''
          type='text'
          placeholder='请输入检索内容'
          value={this.state.value}
        />
        <AtButton 
          className='search-btn'
          type='primary'
          size='small'
          onClick={this.onSearch.bind(this)}
          >搜索</AtButton>
      </View>
    )
  }
}
