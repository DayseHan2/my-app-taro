import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtToast } from 'taro-ui'
import Search from '../../components/search/search'
import Banner from '../../components/banner/banner'
import GoodsList from '../../components/goodsList/goodsList'
import './index.scss'

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
    console.log('constructor');
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      placeolder: '请输入查询内容',
      searchVal: '',
      isOpened: false
    }
  }

  // onLoad
  onLoad() {
    console.log('onLoad');
  }

  componentWillMount () {
    console.log('componentWillMount===渲染虚拟DOM之前');
  }
  
  componentDidMount () {
    console.log('componentDidMount===渲染虚拟DOM之后');
  }

  // onReady
  onReady () {
    console.log('onReady===首次渲染真实DOM之后');
  }

  componentWillUnmount () { 
    console.log('componentWillUnmount');
  }

  // onShow
  componentDidShow () {
    console.log('componentDidShow');
  }

  // onHide
  componentDidHide () { 
    console.log('componentDidHide');
  }

  onSearch(searchVal: string) {
    console.log('查询参数==', searchVal);
    if (searchVal) {
      this.setState({
        searchVal: searchVal,
        isOpened: true
      })
    }
  }

  render () {
    return (
      <View className='index'>
        <Search placText={this.state.placeolder} onSearch={this.onSearch}></Search>
        <Banner />
        <GoodsList />
        <AtToast isOpened={this.state.isOpened} text={this.state.searchVal}></AtToast>
      </View>
    )
  }
}

export default Index
