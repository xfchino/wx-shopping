const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1";
export const request=function(params){
    //基本url
    wx.showLoading({
      title: '加载中',
  })
    return new Promise((resolve,reject)=>{
        wx.request({
            // 解构不需要给默认值
            ...params,
          url: baseUrl+params.url,
          //成功
          success(res){
            resolve(res.data)
          },
          //失败
          fail(err){
              reject(err)
          },
          complete(){
            wx.hideLoading();
          }
        })
    })
}