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
    this.addAge = this.addAge.bind(this);
    this.state = {
      show: false,
      name: '',
      age: 0,
    }
  }

  componentWillMount () {
    this.setState({
      name: '黎明',
      age: 18
    })
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

  addAge () {
    let _age = this.state.age + 1;
    this.setState({
      age: _age
    })
  }

  render () {
    return (
      <View className='index'>
        <Search></Search>
        <Banner></Banner>
        <GoodsList></GoodsList>
      </View>
    )
  }
}

export default Index
