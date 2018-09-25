import React, { Component } from 'react';
import SideMenu, {Item} from 'react-sidemenu';
import './side-bar2.css'

export default class SideBar2 extends Component {

    render(){
        const items = [
          {divider: true, label: 'Main navigation', value: 'main-nav'},
          {label: 'item 1', value: 'item1', icon: 'fa-search',
          children: [
            {label: 'item 1.1', value: 'item1.1', icon: 'fa-snapchat',
            children: [
              {label: 'item 1.1.1', value: 'item1.1.1', icon: 'fa-anchor'},
              {label: 'item 1.1.2', value: 'item1.1.2', icon: 'fa-bar-chart'}]},
            {label: 'item 1.2', value: 'item1.2'}]},
          {label: 'item 2', value: 'item2', icon: 'fa-automobile',
          children: [
            {label: 'item 2.1', value: 'item2.1',
            children: [
              {label: 'item 2.1.1', value: 'item2.1.1'},
              {label: 'item 2.1.2', value: 'item2.1.2'}]},
            {label: 'item 2.2', value: 'item2.2'}]},
          {divider: true, label: 'Motors', value: 'motors-nav'},
          {label: 'item 3', value: 'item3', icon: 'fa-beer'}
        ];

        return (<SideMenu items={items} />);
        /*
        return (
          <SideMenu>
            <Item divider={true} label="Segment 1" value="segment1"/>
            <Item label="Item 1" icon="fa-search">
                <Item label="Item 1.1" value="item1.1" icon="fa-snapchat">
                    <Item label="Item 1.1.1" value="item1.1.1" icon="fa-anchor"/>
                    <Item label="Item 1.1.2" value="item1.1.2" icon="fa-bar-chart"/>
                </Item>
                <Item label="Item 1.2" value="item1.2"/>
            </Item>
            <Item label="Item 2" value="item2" icon="fa-automobile">
                <Item label="Item 2.1" value="item2.1.1">
                    <Item label="Item 2.1.1" value="item2.1.1"/>
                    <Item label="Item 2.1.2" value="item2.1.2"/>
                </Item>
                <Item label="Item 2.2" value="item2.2"/>
            </Item>
            <Item divider={true} label="Segment 2" value="segment2"/>
            <Item label="Item 3" value="item3" icon="fa-beer"/>
        </SideMenu>
        );
        */
    }
}
