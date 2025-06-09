"use client"
import {Button,Flex, Col,Row} from 'antd'
import { Fragment,useState } from 'react';





export default function Home() {
const [isVertical,setIsVertical] =useState(false)

const hdlVerticleToggle = () => {
  setIsVertical(!isVertical)
}

  return (
    <Fragment>



<Row justify={"start"} >
  <Button type='primary'>1</Button>
</Row>
<Row justify={"space-around"}>
  <Col  span={8} style={{backgroundColor:"red",padding:"8px"}} >
  
  <Button type='primary'>2</Button>
  </Col>

  <Col span={8} style={{backgroundColor:"blue",padding:"8px"}}>
  <Button type='primary'>3</Button>
  </Col>
</Row>
<Row justify={"space-evenly"}>
  <Button type='primary'>4</Button>
  <Button type='primary'>5</Button>
  <Button type='primary'>6</Button>
</Row>
<Row justify={"space-between"}>
 <Button type='primary'>7</Button>
 <Button type='primary'>8</Button>
 <Button type='primary'>9</Button>
 <Button type='primary'>10</Button>
</Row>
<Row  gutter={[64,8]}>
 <Button type='primary'>11</Button>
 <Button type='primary'>12</Button>
 <Button type='primary'>13</Button>
 <Button type='primary'>14</Button>
 <Button type='primary'>15</Button>
</Row>



    </Fragment>




    
  );
}
