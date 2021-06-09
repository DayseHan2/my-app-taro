import { Component } from 'react'
import { View } from '@tarojs/components'
import './search.scss'
import { AtButton, AtInput } from 'taro-ui'

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
    this.props.onSearch({ searchVal: this.state.value });
  }

  onChangeValue (val) {
    this.setState({
      value: val
    })
    return val
  }

  render () {
    return (
      <View className='search'>
        <AtInput
          onChange={this.onChangeValue}
          className="search-ipt"
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
