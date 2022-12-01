Page({
    data: {
        miao: 3,
        time: ""
    },
    onLoad: function(a) {
        var t = this;
        this.time = setInterval(function() {
            t.setData({
                miao: t.data.miao - 1
            }), 0 == t.data.miao && (clearInterval(this.time), wx.navigateTo({
                url: "/pages/主页/主页"
            }));
        }, 1e3);
    }
});