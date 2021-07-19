// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    allSelect:false,
    totalPrice:0,
    SelectCount:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCart();
  },
  getCart(){
    let cartList=wx.getStorageSync('cart')||[];
    console.log(cartList);
    this.setData({cartList})
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
    this.getCart();
    this.computeCart();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  // 单个选中取反
  check(e){
    const index=e.mark.index;
    const cartList=this.data.cartList;
    cartList[index].checked=! cartList[index].checked;
    this.rest(cartList);
  },
  // 全选
  allchecked(){
    console.log(this.data.allSelect);
    let allSelect=this.data.allSelect;
    const cartList=this.data.cartList;
    //true代表点击前是选中
    if(allSelect){
      cartList.map(item=>item.checked=false);
    }else{
      cartList.map(item=>item.checked=true);
    }
    this.setData({allSelect:!allSelect,cartList});
    // 因为并不会改变缓存中的所以没必要调用rest
    this.computeCart();
  },
  // 加数量
  add(e){
    const index=e.mark.index;
    const cartList=this.data.cartList;
    cartList[index].num++;
    this.rest(cartList);

  },
  // 减数量
  reduce(e){
    const index=e.mark.index;
    const cartList=this.data.cartList;
    cartList[index].num--;
    // 如果商品数量为0是否删除
    if(cartList[index].num==0){
      wx.showModal({
        title:'是否要删除该商品',
        success:(res)=>{
          // 确认删除或取消
          if(res.confirm){
            cartList.splice(index,1);
            this.rest(cartList);
          }else{
            cartList[index].num++;
            this.rest(cartList);
          }
        }
      })
    }
    this.rest(cartList);

  },
  // 重置修改本地缓存以及data中数据
  rest(cartList){
    this.setData({cartList});
    wx.setStorageSync('cart', cartList);
    this.computeCart();

  },
  // 计算总价,全选
  computeCart(){
    let allSelect=false;
    let cartList=this.data.cartList
    const FcartList=cartList.filter(item=>item.checked);
    const SelectCount=FcartList.length;
    // 全选
    if(SelectCount==cartList.length){
       allSelect=true;
    };
    // 总价
    const totalPrice=FcartList.reduce((item,next)=>{
      return item+next.goods_price*next.num;
    },0)
    this.setData({
      SelectCount,totalPrice,allSelect
    })


  }
})