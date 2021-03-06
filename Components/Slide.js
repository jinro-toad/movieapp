import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Poster from '../Components/Poster'
import {apiImage} from '../Api'
import Vote from '../Components/Vote'
import {trimText} from '../utils'
import {useNavigation} from '@react-navigation/native'


const Container = styled.View`
    width : 100%;
    height : 100%;
`;

const BG = styled.Image`
    width : 100%;
    height : 100%;
    opacity : 0.4;
    position : absolute;
`;

const Content = styled.View`
    flex-direction : row;
    height : 100%;
    align-items : center;
    justify-content : space-around;
`;

const Data = styled.View`
    width : 50%;
    align-items : flex-start;
`;

const Title = styled.Text`
    color : white;
    font-weight : bold;
    font-size : 18px;
    margin-bottom : 10px;
`;
const VoteContainer = styled.Text`
    margin-bottom : 7px;
`;
const OverView = styled.Text`
    color : rgb(220, 220, 220);
    font-size : 14px;
    font-weight : 500;
`;

const Button = styled.View`
    margin-top : 10px;
    background-color : #e74c3c;
    padding : 7px 10px;
    border-radius : 3px;
`;

const ButtonText = styled.Text`
    color : white;
`;

const Slide = ({id, title, backgroundImage, votes, overview, poster, language, adult}) => {

    const navigation = useNavigation()
    
    const goToDetail = () => {
        navigation.navigate('Detail', {
            id,
            title,
            poster,
            overview,
            votes,
            backgroundImage,
            language,
            adult
        })
    }

    return (
        <Container>
            <BG source={{url : apiImage(backgroundImage)}}/>
            <Content>
                <Poster url={poster}></Poster>
                <Data>
                    <Title>{trimText(title, 30)}</Title>
                    <VoteContainer>
                        <Vote votes={votes} />
                    </VoteContainer>
                    <OverView>{trimText(overview, 80)}</OverView>
                    <TouchableOpacity onPress={goToDetail}>
                        <Button>
                            <ButtonText>View Detail</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>   
    )
}
     


Slide.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    backgroundImage : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
    overview : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Slide

