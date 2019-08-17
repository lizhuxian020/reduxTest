import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import {login} from '../actions/loginActions'

class LoginPage extends React.Component{
    render() {
        const {desc, isSuccess, user} = this.props;
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    !isSuccess ?
                    <Text onPress={_=>{
                        this.props.dispatch(login('321', '123'));
                    }}>{desc}</Text> :
                    <View>
                        <Text>{desc}</Text>
                        <Text>{user && user.userName}</Text>
                    </View>
                }
            </View>
        );
    }
}


export default connect((state)=>{
    return {...state.login}
}, (dispatch)=>({
    dispatch
}))(LoginPage);