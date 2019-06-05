import request from '../utils/request'

// 主页数据
export async function getHomeDataFn() {
  return request({
    url: `${SERVER}/GetHomeData`,
    method: 'GET',
  });
}

/**
 * 获取影片信息
 * @param { Object } params - { Id: value }
 */
export async function getVideoInfoFn(params) {
  return request({
    url: `${SERVER}/GetVideoInfo`,
    method: 'GET',
    data: params,
  });
}

/**
 * 获取类似影片
 * @param { Object } params - { vName: value, CurrentVideoId: value }
 */
export async function getSameVideoFn(params) {
  return request({
    url: `${SERVER}/GetSameVideo`,
    method: 'GET',
    data: params,
  });
}

/**
 * 获取豆瓣影评
 * @param { Object } params - { DBID: value, start: value, count: value,  }
 */
export async function getDouBanInterestsF(params) {
  const { DBID, start, count } = params;
  return request({
    url: `https://frodo.douban.com/api/v2/movie/${DBID}/interests?start=${start}&count=${count}&status=done&order_by=latest&apikey=0b2bdeda43b5688921839c8ecb20399b`,
    method: 'GET',
    headers: {
      "User-Agent": "api-client/1 com.douban.movie"
    }
  });
}

/**
 * 获取影片列表
 * @param { Object } params - { pageSize, pageIndex, Type, Channel, Area, Plot, Year, orderBy }
 */
export async function getPageListFn(params = {
  pageSize: 30,
  pageIndex: 1,
  Type: undefined,
  Channel: '',
  Area: '',
  Plot: '',
  Year: '',
  orderBy: 'updatetime',
}) {
  return request({
    url: `${SERVER}/GetPageList`,
    method: 'GET',
    data: params,
  });
}

/**
 * 搜索查询影片列表
 * @param { Object } params - { pageSize, pageIndex, SearchKey }
 */
export async function getSearchFn(params = {
  pageSize: 30,
  pageIndex: 1,
  SearchKey: undefined,
}) {
  return request({
    url: `${SERVER}/GetPageList`,
    method: 'GET',
    data: params,
  });
}
