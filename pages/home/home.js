// pages/home/home.js
import {request} from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[],
    nav:[],
    floor:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getSwiperList();
      this.getNav();
      this.getfloor()
  },
  //获取轮播图
  async getSwiperList(){
    const res=await request({url:"/home/swiperdata"});
    if(res.meta.status==200){
      this.setData({swiperImg:res.message})
    }
  },
  //获取导航
  async getNav(){
    const res=await request({url:"/home/catitems"});
    if(res.meta.status==200){
      this.setData({nav:res.message})
    }
  },
  //获取楼层
  async getfloor(){
    const res=await request({url:"/home/floordata"});
    if(res.meta.status==200){
      this.setData({floor:res.message})
      console.log(this.data.floor);
    }
  },
  onReachBottom(){
    console.log(111);
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