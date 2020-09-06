import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import InfoCard from '../../components/InfoCard';
import DrpdwnSelectList from '../../components/DrpdwnSelectList';
import { __dashBoardWrapper, __pageTitle } from '../Dashboard/__styles';
import ExtraActions from '../../components/ExtraActions';

// import {
//
// } from './__styles'

const PaymentsWrapper = createComponent(__dashBoardWrapper);
const PageTitle = createComponent(__pageTitle);

class Dashboard extends Component<Props> {

  render() {
    return (
      <PaymentsWrapper>
        <PageTitle>Payments</PageTitle>
        <DrpdwnSelectList title={'Type'}/>

        <InfoCard title={'Card Title'} figure={'Rs. 50,500'} growth={'35.3%'}/>
        <InfoCard title={'Card Title2'} figure={'Rs. 1,00,500'} growth={'-5.3%'}/>
        <ExtraActions />
      </PaymentsWrapper>
    )
  }

}


export default Dashboard;
