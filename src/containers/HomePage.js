import React from 'react';
import Dummy from '../components/Dummy';
import RenderList from '../components/RenderList';
import {getData} from '../store/actions/actionIndex';
import { connect } from 'react-redux'

import { Container, Header, ListItem, Left,Body, Right, Thumbnail, Text, Button, Icon, Title, Footer, FooterTab} from 'native-base';



class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state={
      message:'',
      requestObj:{},
      responseList:[]
    }
  }

  componentDidMount(){
    this.props.onGetData();
  }

  componentWillReceiveProps(nextProps){
    console.log("will rec", nextProps)
    if(nextProps.completeData){
      let obj = nextProps.completeData;
      this.setState({
        message: obj.message,
        requestObj: obj.request,
        responseList: obj.response
      })
    }
  }

  refreshContent = () => {
    this.props.onGetData();
  }

  render() {

    console.log("homepage", this.state.responseList)

    return (
       

        <Container>
          <Header>
            <Left>
              <Button transparent
              onPress={this.refreshContent}
              >
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Spot the Ship</Title>
            </Body>
            <Right />
            </Header>

            <RenderList 
            listData={this.state.responseList}
            /> 

            <Footer>
            <FooterTab>
              <Button full  onPress={this.refreshContent}>
                <Text>Refresh</Text>
              </Button>
            </FooterTab>
          </Footer>

        </Container>
     
    );
  }
}

const mapStateToProps = state => {

  return {
    completeData:state.root.CompleteData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onGetData: () => dispatch(getData())
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (HomePage);