// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    usrbtn() {
        //点击允许获取用户信息
        wx.getUserProfile({
            desc: '授权登录',
            success(res) {
                const userInfo = res.userInfo;
                console.log(userInfo);
                //允许获取用户的code
                wx.login({
                    success: (res) => {
                        const code = res.code;
                        //获取用户code,发送请求把信息保存到数据库
                        wx.request({
                            url: 'http://47.98.128.191:3001/users/wxLogin',
                            method: 'POST',
                            data: {
                                code,
                                userInfo,
                                appId: 'wx7effa94e8e6ead7e',
                                appSecret: '84e358f1bf8bd41aeb524a70548c0668'
                            },
                            success(res2) {              
                                //请求成功,然后本地存储token,并把用户信息保存到去全局,跳转会上一个页面                 
                                wx.setStorage({key:'token',data:res2.data.token});
                                getApp().globalData.userInfo=userInfo;
                                wx.navigateBack({delta:1})
                            }
                        })
                    }
                })
            },
            fail(res) {
                console.log(res);
            }
        })
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

    }
})