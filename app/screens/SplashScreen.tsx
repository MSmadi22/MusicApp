import React, {useEffect} from 'react';
import { View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { AppColors } from '@app/theme';



export interface props {
    navigation:any;
}


const SplashScreen = ({navigation}:props) => {


    useEffect(() => {
        setTimeout(() =>navigation.replace('App'), 4500);
    }, [])



    return (
        <View style={styles.container}>
            <View style={styles.animation}>
                <LottieView style={styles.animation} autoPlay loop
                    source={require('../components/splashMusic.json')}
                />
            </View>
        </View>
    );
  
};


const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        backgroundColor:AppColors.lightGray,
        alignItems:'center',
        justifyContent:'center',
    },
    animation:{
        width:'90%',
        backgroundColor:AppColors.lightGray,
        alignItems:'center',
        justifyContent:'center',
    }
});


export default SplashScreen;
