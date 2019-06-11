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

const { statusBarHeight, system } = Taro.getSystemInfoSync();
const info = Taro.getMenuButtonBoundingClientRect();
console.log(info, Taro.getSystemInfoSync());

function Navbar({ title, share, onNavBack, onBackHome, style }) {
  let [wrapStyle, titleStyle] = [{}, {}];
  if (system.toLowerCase().indexOf('android') !== -1) {
    wrapStyle = {
      height: '48px',
    };
    titleStyle = {
      lineHeight: '48px',
    };
  }
  return (
    <View className='nav-wrap' style={{ paddingTop: `${statusBarHeight}px`, ...style, ...wrapStyle }}>
      <View className='nav-title' style={titleStyle}>{title}</View>
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
