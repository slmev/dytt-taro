import Taro, { getSystemInfoSync } from '@tarojs/taro';

interface Return extends getSystemInfoSync.Return {
  titleBarHeight?: number
}
const systemInfo: Return = Taro.getSystemInfoSync();
const { system } = systemInfo;
systemInfo.titleBarHeight = 44;
if (system.toLowerCase().indexOf('android') !== -1) {
  systemInfo.titleBarHeight = 48;
}

export default systemInfo;
