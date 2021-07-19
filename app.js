// app.js
App({
  onLaunch() {
    //用同步获取本地token
    const token=wx.getStorageSync('token');
    console.log(token);
    if(token){
      wx.request({
        url: 'http://47.98.128.191:3001/users/getUserInfo',
        method:'GET',
        header:{
          Authorization:token
        },
        success:res=>{
          console.log(res);
          this.globalData.userInfo=res.data.userInfo;
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
