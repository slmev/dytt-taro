import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import './index.less'

type ComponentProps = {
  className?: string;
  style?: object;
  children?: any;
}

type ComponentState = {}

type IProps = ComponentProps & ComponentState;

interface ViewSlot {
  props: IProps;
}

const { statusBarHeight } = Taro.getSystemInfoSync();

class ViewSlot extends Taro.Component {
  static defaultProps = {
    className: '',
    style: {},
    children: '',
  }

  render() {
    const cls = classNames('content', this.props.className);
    return (
      <View className={cls} style={{ paddingTop: `${statusBarHeight + 44}px`, ...this.props.style }}>
        {this.props.children}
      </View>
    )
  }

}


export default ViewSlot
