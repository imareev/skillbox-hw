
import { shallow, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Dropdown } from "../Dropdown";
import React from "react";

configure({ adapter: new Adapter() });

describe('Dropdown',()=>{
    test("should render", ()=>{
        const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>);
        expect(wrapper).toBeDefined();
        
        expect(wrapper.find('div').isEmptyRender()).toBeFalsy();
    });
});
