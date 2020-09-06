import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import Notifications from '../../components/Notifications';

import {
  __headerWrap,
  __profilePic,
  __headerActions,
} from './__styles'

const HeaderWrap = createComponent(__headerWrap);
const ProfilePic = createComponent(__profilePic);
const HeaderActions = createComponent(__headerActions);

class Header extends Component<Props> {

  render() {
    return (
      <HeaderWrap>
        Header
        <HeaderActions>
          <Notifications notificationList={['Notification 1', 'Notification 2']} style={{marginRight: '5px'}}/>
          <ProfilePic>
            <img src="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" alt="Avatar"/>
          </ProfilePic>
        </HeaderActions>
      </HeaderWrap>
    )
  }
}

export default Header;
