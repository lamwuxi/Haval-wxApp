Page({
    data: {},
    methods: {
        address1: function() {
            wx.getLocation({
                type: "gcj02",
                success: function(n) {
                    console.log(n.latitude), console.log(n.longitude), wx.openLocation({
                        latitude: n.latitude,
                        longitude: n.longitude,
                        scale: 28,
                        name: "要找的地方名字（某某饭店）",
                        address: "地址：要去的地点详细描述"
                    });
                }
            });
        }
    },
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
    }
});