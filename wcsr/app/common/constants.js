/**
 * Created by ljunb on 16/5/26.
 */
import {Dimensions, PixelRatio} from 'react-native';

const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePR: 1 / PixelRatio.get()
};

export default {
    window: window,
}