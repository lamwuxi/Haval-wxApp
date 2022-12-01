Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    tel: function() {
        wx.makePhoneCall({
            phoneNumber: "4009615506"
        });
    },
    address: function() {
        wx.getLocation({
            type: "gcj02",
            success: function(n) {
                console.log(n.latitude), console.log(n.longitude), wx.openLocation({
                    latitude: 31.6064802,
                    longitude: 120.2176617,
                    scale: 28,
                    name: "无锡世盛专营店",
                    address: "地址：无锡市惠山区钱桥街道盛岸西路588"
                });
            }
        });
    }
});