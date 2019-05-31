import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';

function Loading({style, size, text, textColor, themeColor}) {
  return (
    <View className='content'>
      <ActivityIndicator color={themeColor} size={size} />
      <Text style={[styles.loadtext, {color: textColor}]}>{text}</Text>
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
