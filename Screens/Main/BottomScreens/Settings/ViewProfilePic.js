import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import SIZES from '../../../../MyAssets/SIZES';

function ViewProfilePic() {
  return (
    <Image
      style={{
        width: SIZES.HUNDERED_PERCENT,
        height: SIZES.height * 0.7,
      }}
      resizeMode={'cover'}
      source={{uri: useSelector(state => state.user.userInfo.profilePic)}}
    />
  );
}

export default ViewProfilePic;
