import React, { PropTypes } from 'react';
import {Affix, Table, Popconfirm, Button,BackTop,Breadcrumb } from 'antd';
const Products = (props) => {
  return (
    <div className="view-port">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <div id="scrollable-container" style={{ height: 1200,width:300,background:'red'}}>
        <div className="background">
          <br />
          <br />
          <Affix target={() => document.getElementById('scrollable-container')} offsetTop={20}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
          <br />
          <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
            <Button>120px to affix top</Button>
          </Affix>,
        </div>
        <div>
          <BackTop visibilityHeight={600} onClick={()=>alert(1)} />
          Scroll down to see the bottom-right
          <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          button.
        </div>
      </div>
    </div>
  );
};

export default Products;
