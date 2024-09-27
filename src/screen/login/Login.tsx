import { Text, View } from 'react-native'
import React from 'react'
import CommonStyles from '../../common/CommonStyles'
import Icon from '../../common/Icon'
import { useSelector } from 'react-redux'


const Login = ({ navigation }: any) => {
    const user = useSelector((state: any) => state.user);
    return (
        <View style={[CommonStyles.flex_1, CommonStyles.center]}>
            <Text style={CommonStyles.heading_18_black}>HELLO {user.name}</Text>
            <Icon name='smileo' type="AntDesign" style={{ color: 'red' }} size={30} />
        </View>
    )
}

export default Login

