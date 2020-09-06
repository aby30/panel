import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChartBar, faWallet, faUsers, faBolt, faMailBulk, faBook, faCogs } from '@fortawesome/free-solid-svg-icons';
import logo from '../../components/common/icons/netflix-logo.png';

import {
  __drawerWrap,
  __logo,
  __navList,
  __navListItem,
} from './__styles'

const DrawerWrap = createComponent(__drawerWrap);
const Logo = createComponent(__logo);
const NavList = createComponent(__navList);
const NavListItem = createComponent(__navListItem);

class SideNavDrawer extends Component<Props> {

  render() {
    return (
      <DrawerWrap>
        {/* <div>
          This is SideNavDrawer
        </div> */}
        <Logo>
          <img src={logo} />
        </Logo>
        <NavList>
          <NavListItem>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faChartBar} />
              Dashboard
            </Link>
          </NavListItem>
          <NavListItem active={true}>
            <Link to="/payments">
              <FontAwesomeIcon icon={faWallet} />
              Payments
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faUsers} />
              Members
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/payments">
              <FontAwesomeIcon icon={faBolt} />
              Plans
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faMailBulk} />
              Send SMS
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/payments">
              <FontAwesomeIcon icon={faCogs} />
              Personal Training
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faBook} />
              Reports
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/payments">
              <FontAwesomeIcon icon={faCogs} />
              Settings
            </Link>
          </NavListItem>

        </NavList>
      </DrawerWrap>
    )
  }
}

export default SideNavDrawer;
