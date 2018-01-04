//logs.js
var util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    logs: [],
    arr_res : ""
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: app.globalData.globalUrl + "/aspect/login",
      data: {
      },
      success: function (res) {
        console.log(res);
        console.log(res.data);
        that.setData({
          arr_res: res.data
        });
      },
      fail: function (error) {
        console.log(error);
        that.setData({
          arr_res: '返回异常'
        })
      }
    })
  }
})
