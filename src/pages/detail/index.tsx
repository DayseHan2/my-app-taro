import { Component } from 'react'
import Taro from '@tarojs/taro' 
import { View, Text, Image, Button} from '@tarojs/components'
import './index.scss'

interface Detail {
  state: StateType,
  props: propType
}

type StateType = {
  [key: string]: any
};

type propType = {
  [key: string]: any
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      name: ''
    }
  }

  // onLoad
  onLoad(options = { img: '', name: '' }) {
    console.log(options);
    this.setState({
      img: options.img,
      name: options.name
    })
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

  render () {
    return (
      <View className='detail'>
        <Text className='txt'>{this.state.name}</Text>
        <Image className='img' src={this.state.img} />
        <Button className='btn' onClick={() =>{
            Taro.navigateBack()
          }}
        >返回</Button>
      </View>
    )
  }
}

export default Detail