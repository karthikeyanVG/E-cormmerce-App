// import React from 'react';
// import { View, StyleSheet,Text, Modal } from 'react-native';
// import Progress from 'react-native-progress/Bar';
// import LottieView from 'lottie-react-native';
// function UploadScreen({progress=0,visible=false,onDone}) {
//   return (
//       <Modal visible={visible}>
//     <View style={styles.container}>
//     { progress<1  
//         ?(<Progress  width={100} color='skyblue' progress={progress}  ></Progress>)
// :(<LottieView onAnimationFinish={onDone}
// loop={false}
// autoPlay
// autoSize
// source={require('E:\fullproject\assets\animation\done.json')}
// > 
//  </LottieView>)
// } 
//         {/* <Text>{progress*100}%</Text> */}
//     </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',

//   }
// });

// export default UploadScreen;















import React from 'react';
import { View, StyleSheet, Text,Modal } from 'react-native';
import colors from '../config/colors';
import Progress from 'react-native-progress/Bar'
import LottieView from 'lottie-react-native';
// import Progress from 'react-native-progress/Bar'
function UploadScreen({progress=0,visible=false,onDone}) {
  return (
        <Modal visible={visible}>

      <View style={styles.container}>
      {progress<1
      ?(<Progress color={colors.primary} width={200} progress={progress}></Progress>)
      :(<LottieView onAnimationFinish={onDone} autoPlay loop={false} autoSize source={require('../../assets/animation/done.json')}></LottieView>)}
         {/* <Text> {progress*100}%</Text> */}
    </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
      justifyContent:'center',
      alignItems:'center',
      flex:1,

  }
});

export default UploadScreen;