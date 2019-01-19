# vue-toast

移动端Vue toast插件

## Introduction

移动端Vue toast插件，使用vw实现移动端适配。

## Useage

## Params


```
```name     type		default     description
```content  string		            内容
```time  	number		2000        持续显示时间(毫秒)
```type	    string	        	    是否显示Loding：'loading'
```mask	    bool	    false	    是否显示遮罩: true, false
```onShow	function		        显示时的回调
```onHide	function		        隐藏时的回调


import VueToast    from 'vue-toast-mobile-plugin'

//and register the plugin on vue.

Vue.use(VueToast)


// 组件中使用

this.$toast.show({
          txt: '提示',
          onShow() {
            console.log('show');
          },
          onHide() {
            console.log('hide');
          }
        })

or

this.$toast.show({
          type: 'loading',
          mask: true,
          time: 9000,
          txt: '正在加载.....'
        })

or

关闭toast： this.$toast.hide()

```