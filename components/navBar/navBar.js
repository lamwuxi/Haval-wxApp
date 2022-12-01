Component({
    properties: {
        background: {
            type: String,
            value: "rgba(255, 255, 255, 1)"
        },
        color: {
            type: String,
            value: "rgba(0, 0, 0, 1)"
        },
        userIcon: {
            type: String,
            value: ""
        },
        homeIcon: {
            type: String,
            value: ""
        },
        fontSize: {
            type: Number,
            value: 16
        },
        iconHeight: {
            type: Number,
            value: 19
        },
        iconWidth: {
            type: Number,
            value: 58
        }
    },
    attached: function() {
        var t = this;
        t.setNavSize(), t.setStyle();
    },
    data: {},
    methods: {
        setNavSize: function() {
            var t, e = this, a = wx.getSystemInfoSync(), i = a.statusBarHeight;
            t = a.system.indexOf("iOS") > -1 ? 44 : 48, e.setData({
                status: i,
                navHeight: t
            });
        },
        setStyle: function() {
            var t, e, a, i = this;
            t = [ "background:" + i.data.background ].join(";"), e = [ "color:" + i.data.color, "font-size:" + i.data.fontSize + "px" ].join(";"), 
            a = [ "width: " + i.data.iconWidth + "px", "height: " + i.data.iconHeight + "px" ].join(";"), 
            i.setData({
                containerStyle: t,
                textStyle: e,
                iconStyle: a
            });
        },
        user: function() {
            wx.navigateTo({
                url: "/pages/用户/用户"
            }), this.triggerEvent("user", {});
        },
        home: function() {
            wx.redirectTo({
                url: "/pages/主页/主页"
            }), this.triggerEvent("home", {});
        }
    }
});