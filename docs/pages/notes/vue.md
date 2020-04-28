---
sidebar: auto
sidebarDepth: 2
displayAllHeaders: true
---
## Vue问题集

### img文件流转blob[Vue]

新建 `imgBlob.js` 文件

```js
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const auditUrl = `${process.env.SYS_API}/hd-united-store-wechat/api/`
function DownloadFile(obj) {
  return new Promise((resolve, reject) => {
    axios.get(obj.url, {
      method: obj.method || 'get',
      responseType: obj.responseType || 'blob',
      headers: {
        'Application-Code': 'E_0013',
        'Authorization': `bearer ${store.getters.token}`
      }
    }).then((res) => {
      if (!obj.responseType || obj.responseType === 'blob') {
        if (res && res.data && res.data.size) {
          const dataInfo = res.data
          let reader = new window.FileReader()
          reader.readAsArrayBuffer(dataInfo)
          reader.onload = function(e) {
            const result = e.target.result
            const contentType = dataInfo.type
            const blob = new Blob([result], { type: contentType })
            const url = window.URL.createObjectURL(blob)
            resolve && resolve(url)
          }
        }
      }
      if (obj.responseType === 'arraybuffer') {
        console.log(66, res)
        const blob = new Blob([res.data], { type: res.headers['content-type'] })
        const url = window.URL.createObjectURL(blob)
        resolve && resolve(url)
      }
    }).catch((err) => {
      console.log(err)
      Message({
        message: err.message,
        type: 'error',
        duration: 3 * 1000
      })
      reject && reject(err)
    })
  })
}
export function downImg(url) {
  return DownloadFile({
    url: `${auditUrl}${url}`,
    method: 'get',
    responseType: 'arraybuffer'
  })
}
```

1. vue直接调用接口使用

```js
import {downImg} from '@/api/imgBlob'
downImg(url).then(res => {
  console.log(res) ///res就是返回的图片url
})
```

2. 直接使用指令
新建`directive.js`

```js
import Vue from 'vue'
import {downImg} from '@/api/shundiantong/imgBlob'
const install = (Vue) => {
  Vue.directive('imgbloburl', {
    bind: function(el, binding) {
      downImg(binding.value).then(res => {
        el.src = res
      })
    }
  })
}
export default install
```

`mian.js`文件增加

```js
import imgbloburl from './utils/directive'
Vue.use(imgbloburl)
<!-- vue界面使用 imgurl为图片临时目录 -->
<img v-imgbloburl="imgurl">
```
