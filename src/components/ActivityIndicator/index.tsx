import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index'

function Loading({size, color}) {
  return (
    <View className='content' style={{ width: size, height: size,  }} />
  )
}

export default Loading
