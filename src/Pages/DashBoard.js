import React, { useState } from 'react'
import Card from '../components/ComponentComposition/Card'
import PropsGreet from '../components/propsGreet'
import Counter from '../components/Counter'
import Input from '../components/ComponentComposition/Input'
import CalculationOverview from '../components/ComponentComposition/CalculationOverview'
import MutliCalculationOverview from '../components/ComponentComposition/MutliCalculationOverview'
import Multiplication from '../components/ComponentComposition/Multiplication'

export default function DashBoard() {
  const [inputValue,setInputValue] = useState(0);
 
  return (
    <div style={{padding:10,height:'100%'}}>
      {/* Title */}
      <h1>DashBoard</h1>
      <div style={{display:'flex',padding:10,}}>
        {/* Analytics Card */}
        <Card title={'Analytics Data'}>
          <Counter/>
        </Card>
        {/* User Deatail Card */}
        <Card title={'User Details'}>
          <PropsGreet name={'Foo Rose'} />
        </Card>
      </div>
      <div style={{padding:10}}>
        {/* Other Data card */}
       <Card  title={'Other data'}>
          <h1>Multiplied by two app</h1>
          <Input setInputValue={setInputValue}></Input>
          {/* Component Composition nesting */}
          <CalculationOverview>
            <MutliCalculationOverview>
              <Multiplication inputValue={inputValue}></Multiplication>
            </MutliCalculationOverview>
          </CalculationOverview>
        </Card> 
      </div>
    </div>
  )
}
