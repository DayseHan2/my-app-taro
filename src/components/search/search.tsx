import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import './search.scss'

interface Search {
  state: StateType,
  props: propType
}

type StateType = {
  [key: string]: any
};

type propType = {
  [key: string]: any
}

class Search extends Component {
  constructor (props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.state = {
      value: '',
      placText: props.placText || '请输入'
    }
  }

  componentWillMount () {
  }
  
  componentDidMount () {
  }

  componentWillUnmount () { 
  }

  onChangeValue (val) {
    this.setState({
      value: val
    })
    return val
  }

  onSearch () {
    console.log(this.state.value);
    this.props.onSearch(this.state.value);
  }

  render () {
    return (
      <View className='search'>
        <AtInput
          onChange={this.onChangeValue}
          className='search-ipt'
          name='value'
          title=''
          type='text'
          placeholder={this.state.placText}
          value={this.state.value}
        />
        <AtButton 
          className='search-btn'
          type='primary'
          size='small'
          onClick={this.onSearch}
        >搜索</AtButton>
      </View>
    )
  }
}

export default Search
