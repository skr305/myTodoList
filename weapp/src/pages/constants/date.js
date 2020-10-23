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




//把时间戳转化为日期(不带时间的如20201005转化为2020-10-5)
export function toFormatDate(date) {
    let year = date.substr(0,4)
    let month = date.substr(4,2)
    let day = date.substr(6,2)

    return year + "-" + month + "-" + day
}



export function date() {
    let dateStr = (new Date()).getFullYear() + "" +
    (((new Date()).getMonth() + 1 < 10) ? ("0" + ((new Date()).getMonth() + 1)) : ((new Date()).getMonth() + 1))  + (((new Date()).getDate() < 10) ? ("0" + (new Date()).getDate()) : (new Date()).getDate())
   return dateStr
}