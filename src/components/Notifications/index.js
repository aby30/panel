import React from 'react';
import { createComponent } from 'react-fela';
import Icon from '../../components/Icon';
import notification from '../common/icons/notification.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import {
  __notificationsWrapper,
  __notificationsIcon,
  __notificationsListWrap,
  __notificationsList,
  __notificationsListItem,
} from './__styles'

const NotificationsWrapper = createComponent(__notificationsWrapper);
const NotificationsIcon = createComponent(__notificationsIcon);
const NotificationsListWrap = createComponent(__notificationsListWrap);
const NotificationsList = createComponent(__notificationsList);
const NotificationsListItem = createComponent(__notificationsListItem);

const Notifications = ({
  notificationList = ['hi', 'yo'],
}) => {
  const notificationListArrCheck = Array.isArray(notificationList)
  return (
    <NotificationsWrapper>
      <NotificationsIcon>
        {/*<Icon glyph={notification} color={'#999999'} width={'20px'} height={'20px'} fill={'#999999'}/>*/}
        <FontAwesomeIcon icon={faBell} />
      </NotificationsIcon>
      {notificationListArrCheck && notificationList.length > 0 && (
        <NotificationsListWrap>
          <NotificationsList>
            {notificationList.map(
              (notification, index) => {
                return (
                  <NotificationsListItem>{notification}</NotificationsListItem>
                )
              }
            )}
          </NotificationsList>
        </NotificationsListWrap>
      )}
    </NotificationsWrapper>
  )
};

export default Notifications;
