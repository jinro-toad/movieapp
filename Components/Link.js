import React from 'react';
import {TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: row;
  align-items:center;
  margin-bottom: 5px;
`

const Text = styled.Text`
  color : white;
  font-weight: 600;
  margin-left: 10px;
`

const Link = ({onPress, text, icon}) => (
    <TouchableOpacity onPress={onPress}>
        <Container>
            <FontAwesome name={icon} color={'white'} size={22} />
            <Text>{text}</Text>
        </Container>
    </TouchableOpacity>
)


Link.propTypes = {

};

export default Link;
