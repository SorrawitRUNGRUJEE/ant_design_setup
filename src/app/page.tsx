"use client"
import {Button,Flex} from 'antd'
import { Fragment,useState } from 'react';





export default function Home() {
const [isVertical,setIsVertical] =useState(false)

const hdlVerticleToggle = () => {
  setIsVertical(!isVertical)
}

  return (
    <Fragment>
<Flex gap={32} vertical >
<Button onClick={hdlVerticleToggle} >toggle direction</Button>

<Flex vertical={isVertical} gap="large" justify='' align='center'>
<Button type='primary'>1</Button>
<Button type='primary'>2</Button>
<Button type='primary'>3</Button>
</Flex>
</Flex>

    </Fragment>




    
  );
}
