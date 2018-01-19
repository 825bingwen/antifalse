// pages/exam/exam.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    layerStus:false,
    report: null,
    wrongs: null
  },
  //返回首页
  backHome:function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  //查看全部题目
  showAll: function () {
    this.setData({
      layerStus: true
    })
  },
  //返回报告
  back: function () {
    this.setData({
      layerStus: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: app.globalData.globalUrl + "/exam",
      data: {
        method: "queryExamWrongAnalysis",
        hId: app.globalData.hId
      },
      success: function (res) {
        wx.hideToast()
        console.log(res.data);
        that.setData({
          report: res.data.report[0],
          wrongs: res.data.wrongs
        });
      },
      fail: function (error) {
        console.log(error);
        that.setData({
          arr_res: '返回异常'
        })
      }
    })
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