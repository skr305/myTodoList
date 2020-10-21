export function time() {
    let timeStr = (new Date()).getFullYear() + "" +
    (((new Date()).getMonth() + 1 < 10) ? ("0" + ((new Date()).getMonth() + 1)) : ((new Date()).getMonth() + 1))  + (((new Date()).getDate() < 10) ? ("0" + (new Date()).getDate()) : (new Date()).getDate())
    + (((new Date()).getHours() < 10) ? ("0" + (new Date()).getHours()) : (new Date()).getHours())  +( ((new Date()).getMinutes() < 10) ? ("0" + (new Date()).getMinutes()) : (new Date()).getMinutes())
    + (((new Date()).getSeconds() < 10) ? ("0" + (new Date()).getSeconds()) : (new Date()).getSeconds())
    return timeStr
}

//用于把格式化的日期转化为时间戳
export function formatDateToTime(date) {

    let dateArr = date.split('-');
    let result = "";
    for(let ele of dateArr) {
        result += ele;
    }

    //小时分钟和秒的后缀 这意味着00:00:00
    result += "000000"
    return result
}


export function date() {
    let dateStr = (new Date()).getFullYear() + "" +
    (((new Date()).getMonth() + 1 < 10) ? ("0" + ((new Date()).getMonth() + 1)) : ((new Date()).getMonth() + 1))  + (((new Date()).getDate() < 10) ? ("0" + (new Date()).getDate()) : (new Date()).getDate())
   return dateStr
}