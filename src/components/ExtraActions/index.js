import React from 'react';
import { createComponent } from 'react-fela';
import Icon from '../../components/Icon';
import notification from '../common/icons/notification.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  __extraActionsWrapper,
  __extraActionsIcon,
  __extraActionsListWrap,
  __extraActionsList,
  __extraActionsListItem,
} from './__styles'

const ExtraActionsWrapper = createComponent(__extraActionsWrapper);
const ExtraActionsIcon = createComponent(__extraActionsIcon);
const ExtraActionsListWrap = createComponent(__extraActionsListWrap);
const ExtraActionsMainList = createComponent(__extraActionsList);
const ExtraActionsListItem = createComponent(__extraActionsListItem);

const ExtraActions = ({
  ExtraActionsList = ['action 1', 'action 2'],
}) => {
  const ExtraActionsArrCheck = Array.isArray(ExtraActionsList)
  return (
    <ExtraActionsWrapper>
      <ExtraActionsIcon>
        {/*<Icon glyph={notification} color={'#999999'} width={'20px'} height={'20px'} fill={'#999999'}/>*/}
        <FontAwesomeIcon icon={faPlus} />
      </ExtraActionsIcon>
      {ExtraActionsArrCheck && ExtraActionsList.length > 0 && (
        <ExtraActionsListWrap>
          <ExtraActionsMainList>
            {ExtraActionsList.map(
              (ExtraActions, index) => {
                return (
                  <ExtraActionsListItem>{ExtraActions}</ExtraActionsListItem>
                )
              }
            )}
          </ExtraActionsMainList>
        </ExtraActionsListWrap>
      )}
    </ExtraActionsWrapper>
  )
};

export default ExtraActions;
