import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

type ComponentProps = {
  title?: string;
  share?: boolean;
  onNavBack?: () => void;
  onBackHome?: () => void;
}

type ComponentState = {}

type IProps = ComponentProps & ComponentState;

interface Navbar {
  props: IProps;
}

const { statusBarHeight } = Taro.getSystemInfoSync();
const info = Taro.getMenuButtonBoundingClientRect();
console.log(info, Taro.getSystemInfoSync());

function Navbar({ title, share, onNavBack, onBackHome, style }) {
  return (
    <View className='nav-wrap' style={{ paddingTop: `${statusBarHeight}px`, ...style }}>
      <View className='nav-title'>{title}</View>
    </View>
  )
}

Navbar.defaultProps = {
  title: '',
  share: false,
  style: {},
  onNavBack: () => {},
  onBackHome: () => {},
}

export default Navbar
