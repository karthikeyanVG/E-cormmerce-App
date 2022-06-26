import React from 'react';

import LottieView from 'lottie-react-native'
function AppActivityIndicator({visible=false}) {
if (!visible) 
return null;

  return (
   <LottieView source={require('../../assets/animation/79952-successful.json')}


 autoPlay
 loop> 

</LottieView>




 
  );
}


export default AppActivityIndicator;