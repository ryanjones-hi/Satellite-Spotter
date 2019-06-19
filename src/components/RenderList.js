import React from 'react';
import { Container, Header, Content, List, Spinner } from 'native-base';
import { ListItem, Left,Body, Right, Thumbnail, Text, Button, Icon, Title} from 'native-base';
//import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';




const util = require('./Util/CommonUtil');


export default class RenderList extends React.Component {
    constructor(props){
        super(props);

        this.state={
          listData: []
        }
    }

    componentWillReceiveProps(newProps){
    
      if(newProps.listData){
        this.setState({listData: newProps.listData})
      }
    }

    handleRefresh = () => {

      console.log("###### Refresh called")

      this.props.refreshContent();

    }

  render() {

    const {listData} = this.state; 

    if(listData.length == 0){

      return(
        <Container>
          <Content>
            <Spinner color='blue' />
          </Content>
        </Container>
      )
    }

    return (   
      <Container>      
        <Content>
        <List>
              {
                listData.map((item, i) => {
                  
                      return(
                        <ListItem key={i} avatar>
                            <Left>
                            
                                <Thumbnail source={{ uri: 'https://goo.gl/images/VaXBkk' }} />
                            </Left>
                            <Body>
                                <Text>{util.getDay(item.risetime)}</Text>
                                <Text note>Duration: {util.getTime(item.duration)}</Text>
                            </Body>
                            <Right>
                                <Text note>{util.getTimeOfDay(item.risetime)}</Text>
                            </Right>
                        </ListItem>
                      )
                  })
              }
              </List>
    
        </Content>
      </Container>
        
    
    );
  }
}


