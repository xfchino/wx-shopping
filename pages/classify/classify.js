// pages/classify/classify.js
import {request} from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoris:[],
    // 选中id
    activeId:0,
    goodsList:[]
  },
  //切换分类
  changeCategory(event){
    this.setData({
      activeId:event.mark.id,
      //根据点击的id获取到下面的childer
      goodsList:this.data.categoris.find(item=>item.cat_id==event.mark.id).children
    })
    console.log(this.data.goodsList);
  },
  //分类菜单请求
  async getCategories(){
    const res=await request({url:'/categories'});
    if(res.meta.status==200){
        this.setData({
          categoris:res.message,
          activeId:res.message[0].cat_id,
          goodsList:res.message[0].children
        });
        console.log(this.data.goodsList);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCategories();
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