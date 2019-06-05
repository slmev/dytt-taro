import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Navbar from '../../components/Navbar'
import ViewSlot from '../../components/ViewSlot'
import ActivityIndicator from '../../components/ActivityIndicator'
import png404 from '../../assets/404.png'
import './index.less'

const maps = [
  {
    listType:'solling',
    name:'轮播图',
    isRender:true
  },
  {
    listType:'movie',
    name:'电影',
    icon:'film'
  },
  {
    listType:'tv',
    name:'电视剧',
    icon:'tv'
  },
  {
    listType:'comic',
    name:'动漫',
    icon:'gitlab'
  },
  {
    listType:'variety',
    name:'娱乐',
    icon:'anchor'
  },
]

const mapto = (list, maps) => {
  const data = {};
  list.forEach(d => {
    maps.forEach(el => {
      !data[el.listType] && (data[el.listType] = {
        name: '',
        list: []
      });
      if (el.listType === d.listType) {
        !data[el.listType].name && (data[el.listType].name = el.name);
        data[el.listType].list.push(d);
      }
    })
  })
  return data;
}

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  home: {
    homeInfo: object
  },
  querying: boolean,
}

type PageDispatchProps = {
  getHomeData: () => void;
  changeData: (params) => void;
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ home, loading }) => ({
  home,
  querying: loading.effects['home/getHomeData'],
}), (dispatch) => ({
  getHomeData () {
    dispatch({
      type: 'home/getHomeData',
    })
  },
  changeData ({ name, value }) {
    dispatch({
      type: 'home/changeData',
      payload: { name, value },
    })
  }
}))
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount() {
    this.props.getHomeData();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 图片出现错误
  handleImageError = (index) => {
    const { home } = this.props;
    home.homeInfo.solling.list[index].Cover = png404;
    this.props.changeData({
      name: 'homeInfo',
      value: JSON.parse(JSON.stringify(home.homeInfo)),
    });
  };

  render () {
    const { querying, home } = this.props;
    return (
      <ViewSlot>
        <View className='content'>
          <Navbar title={this.config.navigationBarTitleText} />
          <Swiper autoplay circular>
            {
              home.homeInfo.solling &&
              home.homeInfo.solling.list.map((item, index) => (
                <SwiperItem key={item.id}>
                  <Image className='cover-image' src={item.Cover} onError={this.handleImageError.bind(this, index)} />
                </SwiperItem>
              ))
            }
          </Swiper>
          <View className='index'>
            <ActivityIndicator color="#f00" size={25} />
            <View><Text>Hello, World</Text></View>
          </View>
        </View>
      </ViewSlot>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
