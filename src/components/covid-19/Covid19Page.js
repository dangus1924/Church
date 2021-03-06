import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './Covid19Page.css'

class Covid19Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner backgroundColor="#ff5a34" titleColour="white" title="Back to Church"/>
        <div className="ml-3 mr-3">
          <iframe title="back-to-church" width="100%" height="315" src="https://www.youtube.com/embed/LIpYOqCt374" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ml-3 mr-3 mt-3">
          <iframe title="walkthrough" width="100%" height="315" src="https://www.youtube.com/embed/KsdmVh7Lzww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Page>
    )
  }

}

export default Covid19Page;
