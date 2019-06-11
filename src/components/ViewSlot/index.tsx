import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import systemInfo from '../../utils/systemInfo'
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

// const { statusBarHeight, system } = Taro.getSystemInfoSync();
// let titleBarHeight = 44;
// if (system.toLowerCase().indexOf('android') !== -1) {
//   titleBarHeight = 48;
// }

class ViewSlot extends Taro.Component {
  static defaultProps = {
    className: '',
    style: {},
    children: '',
  }

  render() {
    const cls = classNames('content', this.props.className);
    const { statusBarHeight, titleBarHeight } = systemInfo;
    return (
      <View className={cls} style={{ paddingTop: `${statusBarHeight + titleBarHeight}px`, ...this.props.style }}>
        {this.props.children}
      </View>
    )
  }

}


export default ViewSlot
