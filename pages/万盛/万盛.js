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
            phoneNumber: "0510-82129333"
        });
    },
    address: function() {
        wx.getLocation({
            type: "gcj02",
            success: function(n) {
                console.log(n.latitude), console.log(n.longitude), wx.openLocation({
                    latitude: 31.5631985,
                    longitude: 120.4022023,
                    scale: 28,
                    name: "无锡万盛专营店",
                    address: "地址：无锡市新吴区金城东路290号东方汽车城新城A9座"
                });
            }
        });
    }
});