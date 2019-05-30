import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

type ComponentProps = {
  navbarData: {
    title: string,
    showCapsule: boolean
  },
  height?: number,
  share?: boolean,
  onNavBack?: () => void,
  onBackHome?: () => void,
}

type ComponentState = {}

type IProps = ComponentProps & ComponentState;

interface Navbar {
  props: IProps;
}

const { statusBarHeight } = Taro.getSystemInfoSync();
const info = Taro.getMenuButtonBoundingClientRect();
console.log(info);

class Navbar extends Component {
  static defaultProps = {
    navbarData: {
      title: '',
      showCapsule: false
    }
  }
  render () {
    const { navbarData, height = 0, share, onNavBack = () => {}, onBackHome = () => {} } = this.props;
    const { title, showCapsule } = navbarData;
    return (
      <View className='nav-wrap' style={{ paddingTop: `${statusBarHeight}px`, height: '44px' }}>
        <View className='nav-title' style={{ lineHeight: '44px' }}>{title}</View>
      </View>
    )
  }
}

export default Navbar
