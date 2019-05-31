import Taro from '@tarojs/taro'

import { getHomeDataFn } from '../services/api'

export default {
  namespace: 'home',

  state: {
    homeInfo: {},
  },

  effects: {
    *getHomeData(_, { call, put }) {
      const response = yield call(getHomeDataFn);
      console.log(response);
      if (response) {
        const [banner, movie, tv, comic, variety] = [[],[],[],[],[]];
        response.forEach(item => {
          switch (item.listType) {
            case 'solling':
              banner.push(item);
              break;
            case 'movie':
              movie.push(item);
              break;
            case 'tv':
              tv.push(item);
              break;
            case 'comic':
              comic.push(item);
              break;
            case 'variety':
            default:
              variety.push(item);
              break;
          }
        });
        const data = {
          solling: {
            name: '轮播图',
            list: banner
          },
          movie: {
            name: '电影',
            list: movie
          },
          tv: {
            name: '电视剧',
            list: tv
          },
          comic: {
            name: '动漫',
            list: comic
          },
          variety: {
            name: '娱乐',
            list: variety
          },
        }
        yield put({
          type: 'changeData',
          payload: {
            name: 'homeInfo',
            value: data,
          }
        })
      } else {
        Taro.showToast({
          title: '查询失败',
          icon: 'none'
        });
      }
    }
  },

  reducers: {
    changeData(state, { payload }) {
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      }
    }
  },
};
