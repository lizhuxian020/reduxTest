import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.baseProps = 'baseProps';
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={{flex: 1}}>
                {this.props.children}
            </View>
        )
    }
}

