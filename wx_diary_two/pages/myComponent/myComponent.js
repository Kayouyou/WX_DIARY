// pages/myComponent/myComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //这里定义属性值 可以在组件内使用
    innerText:{
      type:String,//必填
      value:'default value'
    },
    myProperty: {
      type: String,
      value: '',//可选值 
      observer: '_propertyChanged' //写在method中
    },
    myProperty2:String //简化的定义方式   
  },

  /**
   * 组件的初始数据
   */
  data: {//私有数据
    //这里是组件内部数据
    A:[{
      B:'init data.A[0].B'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //内部方法建议 以 _开头
    //这里是一个自定义方法
    customMethod:function(){

    },
    _propertyChanged:function(newVal, oldVal) {
      console.log(newVal);
    },
    myButtonClicked:function(){
      //更新属性值
      this.setData({
        myProperty:'test'
      })
    },
    _myPrivateMethod:function(){
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData')
      this.applyDataUpdates()
    }
  },
  /**
   * 设置启用多个slots
   */
  options:{
    //启动多slots
    multipleSlots: true
  },
  /**
   * 设置外部样式表
   */
  externalClasses:['my-class']


})
