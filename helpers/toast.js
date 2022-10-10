import {DeviceEventEmitter} from 'react-native';
import {SHOW_TOAST_MESSAGE} from '../constants/toast';

/**
 * 
 * @params {message,duration,type,useNativeToast=true}
 */

const toast = {
  info: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'info'});
  },
  success: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'success'});
  },
  danger: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'danger'});
  },
};

export default toast;