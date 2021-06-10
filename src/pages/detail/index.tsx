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
  onLoad(options: any) {
    console.log(options);
    this.setState({
      img: options.img,
      name: options.name
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='detail'>
        <Text className='txt'>{this.state.name}</Text>
        <Image className='img' src={this.state.img} />
        <Button className='btn' onClick={() =>{
          Taro.navigateBack()
          }}>返回</Button>
      </View>
    )
  }
}

export default Detail