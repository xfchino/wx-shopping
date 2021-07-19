// components/floor/floor.js
Component({
    lifetimes:{
        attached(){
            this.setData();
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        floor:Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        setData(){
            console.log(this.properties);
        }
    }
})
