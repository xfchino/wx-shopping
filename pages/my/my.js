// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    collectCount:0
  },
  // 注销
  logout(){
    wx.removeStorage({
      key: 'token',
      success:(res)=>{
        this.setData({userInfo:null})
        getApp().globalData.userInfo=null;
      }
    })
  },
  // 获取收藏个数
  getcollectCount(){
    const collectCount=wx.getStorageSync('collect').length;
    this.setData({collectCount})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const {userInfo}=getApp().globalData;
    this.setData({userInfo});
    // 收藏个数
    this.getcollectCount();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})