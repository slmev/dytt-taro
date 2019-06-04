import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';

import ActivityIndicator from '../ActivityIndicator';
import './index'

function Loading({ style, size, text, textColor, themeColor }) {
  return (
    <View className='content'>
      <ActivityIndicator color={themeColor} size={size} />
      <Text className='load-text' style={{ color: textColor }}>{text}</Text>
    </View>
  )
}

Loading.defaultProps = {
  style: {},
  text: '正在努力加载中',
  textColor: '#666',
  size: 'large'
}

export default Loading
