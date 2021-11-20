// devtools中不认识console.log。使用自带的api inspectedWindow 来弄一个它认识的
const interceptScript = document.createElement('script')
interceptScript.src = chrome.runtime.getURL('intercept.js')
document.head.prepend(interceptScript)
