import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default  class testComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Button small primary style={{width:200,height:50,marginTop:10}}>
						<Text>Default Small</Text>
					</Button>
					<Button success style={{width:200,height:50,marginTop:10}}>
						<Text>Success Default</Text>
					</Button>
					<Button rounded large dark full>
						<Text>Dark Large</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
