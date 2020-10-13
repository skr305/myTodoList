export function time() {
    let timeStr = (new Date()).getFullYear() + "" +
    (((new Date()).getMonth() + 1 < 10) ? ("0" + ((new Date()).getMonth() + 1)) : ((new Date()).getMonth() + 1))  + (((new Date()).getDate() < 10) ? ("0" + (new Date()).getDate()) : (new Date()).getDate())
    + (((new Date()).getHours() < 10) ? ("0" + (new Date()).getHours()) : (new Date()).getHours())  +( ((new Date()).getMinutes() < 10) ? ("0" + (new Date()).getMinutes()) : (new Date()).getMinutes())
    + (((new Date()).getSeconds() < 10) ? ("0" + (new Date()).getSeconds()) : (new Date()).getSeconds())
    return timeStr
}




export function date() {
    let dateStr = (new Date()).getFullYear() + "" +
    (((new Date()).getMonth() + 1 < 10) ? ("0" + ((new Date()).getMonth() + 1)) : ((new Date()).getMonth() + 1))  + (((new Date()).getDate() < 10) ? ("0" + (new Date()).getDate()) : (new Date()).getDate())
   return dateStr
}