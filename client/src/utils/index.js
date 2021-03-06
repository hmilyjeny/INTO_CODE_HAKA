import {message} from 'antd';

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response) {
    return response.json()
}
export function handleResponseError(response) {
    var errMsg = formatErrMsg(response.errCode, response.errMsg);
    var error = new Error(errMsg);
    error.response = {status: response.errCode, statusText: errMsg};
    throw error;
}
export function showErrMsg(status, statusText) {
    //TODO:根据status值判断是什么类型的提示信息
    message.error(statusText, 2);
}

// 根据用户输入模式显示提示框
export function showModeMsg(mode, msg) {
    switch (mode) {
        case "success":
            message.success(msg, 2)
            break;
        case "error":
            message.error(msg, 2)
            break;
        case "warning":
            message.warning(msg, 2)
            break;
        case "loading":
            message.loading(msg, 2)
            break;
        default:
            message.info(msg, 2)
            break;
    }
}
export function formatDbDate(argument) {
    return argument.slice(0, 10);
}
function formatErrMsg(errCode, errMsg) {
    switch (errCode) {
        case -1:
            return errMsg;
            break;
        case 40001:
            return '缺少' + errMsg + '参数';
            break;
        case 40002:
            return '该' + errMsg + '已存在';
            break;
        case 40003:
            return '该' + errMsg + '不存在';
            break;
        default:
            return errMsg
    }
}
