import Vue from 'vue';
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import nameMap from "./name"

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    // 方法:提供给外部访问
                    chinaMap: function (id,data) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);

                        var option = {
                            // 提示框
                            // 提示框
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true, // 鼠标是否允许滑入悬浮框中
                                formatter(data) {
                                    console.log(data);
                                    return `<a href='/#/city/${ data.name }' style='color:#fff'>省:${data.name}<br/>病例:${ data.value }个</a>`
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 匹配数据
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#fff"
                                    },
                                    {
                                        min: 1,
                                        max: 10,
                                        color: "#fdfdcf"
                                    },
                                    {
                                        min: 10,
                                        max: 100,
                                        color: "#fe9e83"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#e55a4e"
                                    },
                                    {
                                        min: 1000,
                                        max: 10000000,
                                        color: "#4f070d"
                                    },
                                ]
                            }],
                            series: [{
                                name: "中国地图",
                                type: "map", // 选择类型为地图
                                map: "china", // 中国地图
                                roam: false, // 是否允许缩放
                                zoom: 1.2, // 放大比例
                                label: { // 配置文本
                                    normal: {
                                        show: true, // 是否允许地图显示文字
                                        textStyle: { // 配置字体样式
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    // 地图的区域颜色，线和区块的颜色
                                    normal: {
                                        areaColor: "rgba(0,255,236,0)",
                                        borderColor: "rgba(0,0,0,0.2)"
                                    },
                                    // 区域颜色与阴影
                                    emphasis: {
                                        areaColor: "rgba(255,180,0,0.8)",
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0
                                    }
                                },
                                // data:[
                                //     { name:"内蒙古",value:130},
                                //     { name:"新疆",value:12},
                                //     { name:"西藏",value:8},
                                //     { name:"青海",value:0},
                                // ]
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                    worldMap: function (id,data) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);

                        var option = {
                            // 提示框
                            // 提示框
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true, // 鼠标是否允许滑入悬浮框中
                                formatter(data) {
                                    console.log(data);
                                    return data.name+"<br>病例："+data.value
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 匹配数据
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#fff"
                                    },
                                    {
                                        min: 1,
                                        max: 1000,
                                        color: "#fdfdcf"
                                    },
                                    {
                                        min: 1000,
                                        max: 100000,
                                        color: "#fe9e83"
                                    },
                                    {
                                        min: 100000,
                                        max: 10000000,
                                        color: "#e55a4e"
                                    },
                                    {
                                        min: 10000000,
                                        max: 100000000,
                                        color: "#4f070d"
                                    },
                                ]
                            }],
                            series: [{
                                name: "世界地图",
                                type: "map", // 选择类型为地图
                                map: "world", // 世界地图
                                roam: true, // 是否允许缩放
                                zoom: 1.2, // 放大比例
                                label: { // 配置文本
                                    normal: {
                                        show: false, // 是否允许地图显示文字
                                        textStyle: { // 配置字体样式
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap:nameMap,
                                itemStyle: {
                                    // 地图的区域颜色，线和区块的颜色
                                    normal: {
                                        areaColor: "rgba(0,255,236,0)",
                                        borderColor: "rgba(0,0,0,0.2)"
                                    },
                                    // 区域颜色与阴影
                                    emphasis: {
                                        areaColor: "rgba(255,180,0,0.8)",
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                    cityMap: function (id,data,cityName) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);

                        var option = {
                            // 提示框
                            // 提示框
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true, // 鼠标是否允许滑入悬浮框中
                                formatter(data) {
                                    console.log(data);
                                    return `<a href='/#/city/${ data.name }' style='color:#fff'>省:${data.name}<br/>病例:${ data.value }个</a>`
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 匹配数据
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#fff"
                                    },
                                    {
                                        min: 1,
                                        max: 10,
                                        color: "#fdfdcf"
                                    },
                                    {
                                        min: 10,
                                        max: 100,
                                        color: "#fe9e83"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#e55a4e"
                                    },
                                    {
                                        min: 1000,
                                        max: 10000000,
                                        color: "#4f070d"
                                    },
                                ]
                            }],
                            series: [{
                                name: "省市地图",
                                type: "map", // 选择类型为地图
                                map: cityName, // 中国地图
                                roam: false, // 是否允许缩放
                                zoom: 1.2, // 放大比例
                                label: { // 配置文本
                                    normal: {
                                        show: true, // 是否允许地图显示文字
                                        textStyle: { // 配置字体样式
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    // 地图的区域颜色，线和区块的颜色
                                    normal: {
                                        areaColor: "rgba(0,255,236,0)",
                                        borderColor: "rgba(0,0,0,0.2)"
                                    },
                                    // 区域颜色与阴影
                                    emphasis: {
                                        areaColor: "rgba(255,180,0,0.8)",
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                }
            }
        }
    })
}

export default install