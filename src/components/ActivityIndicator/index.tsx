import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { hexToRgb } from '../../utils/utils'
import './index'

function ActivityIndicator({ size, color }) {
  const rgb = hexToRgb(color);
  return (
    <View className='content' style={{ width: size, height: size, borderColor: `rgba(${rgb}, 0.2)`, borderTopColor: color  }} />
  )
}

export default ActivityIndicator
