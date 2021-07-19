import {request} from "../../request/request.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        product:{},
        isCollect:false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log({goods_id: "17927"},options);
        request({url:'/goods/detail',data:options})
        .then(res=>{
            console.log(res);
            if(res.meta.status==200){
                this.setData({
                    product:res.message
                })
                console.log(this.data.product);
            }
        })
    },
    //点击收藏
    collect(){
        let isCollect=false;
        let collect=wx.getStorageSync('collect')||[];
        console.log(collect);
        // 判断是否被收藏过了
        let index=collect.findIndex(item=>item.goods_id==this.data.product.goods_id)
        // 如果不等-1代表被收藏过了
        if(index!=-1){
            collect.splice(index,1);
            wx.showToast({
                title: '取消收藏',
                icon:'success',
                mask:true
              })
              this.setData({isCollect})
        }else{
            //没有被收藏
            collect.push(this.data.product);
            isCollect=true;
            wx.showToast({
              title: '成功收藏',
              icon:'success',
              mask:true
            })        
        }
        wx.setStorageSync('collect', collect);   
        this.setData({isCollect})
    },
    // 加入购物车
    addCart(){
        let cart=wx.getStorageSync('cart')||[];
        // 判断是否加入过了
        let index=cart.findIndex(item=>item.goods_id==this.data.product.goods_id);
        console.log(cart);
        if(index==-1){
            // 没有就加入
            this.data.product.num=1;
            this.data.product.checked=true;
            cart.push(this.data.product);
        }else{
            cart[index].num++;
        }
        // 重新放存放到本地
        wx.setStorageSync('cart', cart);
        wx.showToast({
            title: '加入成功',
            icon:'success',
            mask:true
          }) 
    },
    // 去购物车跳转
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    }
})