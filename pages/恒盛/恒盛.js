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
            phoneNumber: "0510-82137722"
        });
    },
    address: function() {
        wx.getLocation({
            type: "gcj02",
            success: function(n) {
                console.log(n.latitude), console.log(n.longitude), wx.openLocation({
                    latitude: 31.584962,
                    longitude: 120.423386,
                    scale: 28,
                    name: "无锡恒盛专营店",
                    address: "地址：无锡市锡山区先锋中路23-7号先锋汽车城内"
                });
            }
        });
    }
});