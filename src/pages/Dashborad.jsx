import React from 'react'
import NumberPicker from 'react-mobile-picker';
// import { TabContent , TabPane , NavLink , NavItem , Nav } from 'reactstrap'
import { Container, Header, Button, Label, Input, Tab ,Card } from 'semantic-ui-react'

import '../css/DashBorad.scss'

export default class Dashborad extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mock:{
                type:[
                    {
                        key:'2',
                        icon:'fas fa-caret-square-up',
                        text:'2 ตัวบน',
                        border: '6px solid Navy',
                    },
                    {
                        key:'2',
                        icon:'fas fa-caret-square-down',
                        text:'2 ตัวล่าง',
                        border: '6px solid LightSeaGreen',
                    },
                    {
                        key:'3',
                        icon:'fas fa-caret-square-up',
                        text:'3 ตัวบน',
                        border: '6px solid Gold',
                    },
                    {
                        key:'3',
                        icon:'fas fa-caret-square-down',
                        text:'3 ตัวล่าง',
                        border: '6px solid Crimson',
                    },
                ]
            },
            valueGroups: {
                thirdDigit: '0',
                secondDigit: '0',
                firstDigit: '0',
            }, 
            optionGroups: {
                thirdDigit: ['0','1', '2', '3', '4','5', '6', '7', '8', '9'],
                secondDigit: ['0','1', '2', '3', '4','5', '6', '7', '8', '9'],
                firstDigit: ['0','1', '2', '3', '4','5', '6', '7', '8', '9']
            }
        }
    }

    genTypeBtn = (obj) =>{
        return(
            obj !== undefined
            ?
            obj.map((item,idx)=>{
                return(
                    <Button type="button" className="btn cusbtn" style={{zIndex:1}} onClick={(e)=>{console.log(e.target.value)}} value={idx} key={idx}>
                        <div className='unselectable' style={{zIndex:0}}>
                            <span className='keyText'>{item.key}</span><i className={`keyIcon ml-1 ${item.icon}`}/>
                        </div>
                        <Label className='exposition unselectable' style={{zIndex:0}}> {item.text} </Label>
                    </Button>
                    )
                })
            :
                <React.Fragment/>
        )
    }

    handleClickType = () =>{

    }

    handleClick = () =>{

    }

    handleChange = (name, value) => {
        this.setState(({valueGroups}) => ({
            valueGroups: {
            ...valueGroups,
            [name]: value
            }
        }));
        console.log('Show : ',name,value)
    }

    //List Function

    List_add = () =>{

    }

    List_delete = () =>{

    }

    render(){
        return(
            <div className='DashBorad d-flex flex-column h-100'>
                <div className='headerCard d-flex justify-content-center text-bold p-2'>
                    <span className='font-weight-bold' style={{color:'#ffc107'}}>L</span> 
                    <span className='font-weight-bold' style={{color:'#fff'}}>otto</span>
                    <span className='font-weight-bold ml-1' style={{color:'#ffc107'}}>R</span> 
                    <span className='font-weight-bold' style={{color:'#fff'}}>ich</span>
                    <div className='ml-1' style={{color:'#ffc107'}}>
                        <i className="fas fa-crown"/>
                    </div>
                </div>
                {/* Select Type */}
                <div className=''>
                    <Button.Group widths='5'>
                        {this.genTypeBtn(this.state.mock.type)}
                    </Button.Group>
                    {/* <div className="btn-group" role="group">
                        {this.genTypeBtn(this.state.mock.type)}
                    </div> */}
                </div>
                {/* Select Number */}
                <div className='pickerCard d-flex flex-column card mx-3 mt-3 pb-3'>
                    <div className='d-flex mx-3' style={{flex:1}}>
                        {/* <TabContent activeTab={this.state.activeTab}>
                            <TabPane id='Info' className='' tabId=''> */}
                                <NumberPicker
                                    optionGroups={this.state.optionGroups}
                                    valueGroups={this.state.valueGroups}
                                    onChange={this.handleChange}
                                    height={150}
                                    itemHeight={25}
                                /> 
                            {/* </TabPane>
                            <TabPane id='Info' className='' tabId=''> */}
                                {/* <NumberPicker
                                    optionGroups={this.state.optionGroups}
                                    valueGroups={this.state.valueGroups}
                                    onChange={this.handleChange}
                                    height={150}
                                    itemHeight={25}
                                /> */}
                            {/* </TabPane>
                        </TabContent> */}
                    </div>
                    {/* <div className='d-flex align-items-center'>
                        <div style={{flex:0}}>
                            <button type="button" className="btn btn-primary m-2" onClick={this.handleClick}> เพิ่ม </button>
                        </div>
                    </div> */}
                    <div className='d-flex flex-row mr-3'>
                        <div className='d-flex mx-3' style={{flex:1}}>
                            <Input className="text-right w-100" placeholder="กรุณาระบุจำนวนเงิน..."/>
                        </div>
                        <div style={{flex:0}}>
                            <Button type="button" className="" color='blue' onClick={this.handleClick}> เพิ่ม </Button>
                        </div>
                    </div>
                </div>
                {/* Select List */}
                <div className='d-flex flex-column' style={{flex:1}}>
                    <div className='d-flex justify-content-start' style={{flex:0}}>
                        <span className='listText mx-4 my-1'> Order List </span>
                    </div>
                    <div className='selectCard card mx-3 mb-2' style={{flex:1}}>
                        <div className='card-block w-100'>

                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <Button type="button" className="w-100 m-2" color='green' style={{flex:1}} onClick={this.handleClick}> สั่งซื้อ </Button>
                </div>
            </div>
        )
    }
}