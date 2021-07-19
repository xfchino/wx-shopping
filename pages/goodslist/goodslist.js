import {request} from "../../request/request.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabbarBar:[
            {_id:0,value:'热卖'},
            {_id:1,value:'销售'},
            {_id:2,value:'单价'},
        ],
        activeId:0,
        goodsList:[],
        total:0,
        pagenum:1
    },
    // 触底下拉
    // onReachBottom(){
    //     console.log("触底了");
    //     this.setData({pagenum:this.data.pagenum++});
    //     this.getGoodsList();
    // },
    scrollbottom(){
        this.setData({pagenum:++this.data.pagenum});
        this.getGoodsList();
        if(this.data.total>this.data.goodsList.length){
        //     this.setData({pagenum:++this.data.pagenum});
        // this.getGoodsList();
        }
    },
    //获取商品
    getGoodsList(data){
        request({url:'/goods/search',data:{...data,pagenum:this.data.pagenum}})
        .then(res=>{
            if(res.meta.status==200){
                console.log(res);
                const goodsList=this.data.goodsList;
                goodsList.push(...res.message.goods)
                // this.data.goodsList.push(...res.message.goods)
                this.setData({goodsList})
                
            }
        })
    },
    //tab切换
    changeBar(e){
        this.setData({
            activeId:e.mark.id
        })
    },
    //轮播图切换
    changeSwiper(event){
        this.setData({
            activeId:event.detail.current
        })
    },
    //详情图片点击跳转
    detail(e){
        wx.navigateTo({
          url: '/pages/detail/detail?goods_id='+e.mark.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //根据传入的id进行查找商品
        this.getGoodsList(options);
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
  
})