import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import Search from '../../components/search/search'
import Banner from '../../components/banner/banner'
import GoodsList from '../../components/goodsList/goodsList'

interface Index {
  state: StateType,
  props: propType
}

type StateType = {
  [key: string]: any
};

type propType = {
  [key: string]: any
}
class Index extends Component {
  constructor (props: any) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      placeolder: '请输入查询内容'
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

  onSearch(queryParams: object) {
    console.log('查询参数', queryParams);
  }

  render () {
    return (
      <View className='index'>
        <Search placText={this.state.placeolder} onSearch={this.onSearch}></Search>
        <Banner></Banner>
        <GoodsList></GoodsList>
      </View>
    )
  }
}

export default Index
