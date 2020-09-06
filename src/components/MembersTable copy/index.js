import React from 'react';
import { createComponent } from 'react-fela';
import Icon from '../../components/Icon';
import Tag from '../../components/Tag';
import Fb from '../common/icons/fb.svg';
import moneyPlant from '../common/icons/moneyPlant.svg';

import {
  __membersTableWrapper,
  __membersTableInner,
  __membersTableTitles,
  __membersTableTitlesCol,
  __membersTableRowWrap,
  __membersTableRowWrapInner,
  __membersRowImg,
  __membersRowDetail,
  __membersRowExpandBtn,
  __membersTableAccordion,
  __membersTableAccordionTitle,
  __membersTableAccordionHeaderWrap,
  __membersTableAccordionHeader,
  __membersTableAccordionRow,
  __membersTableAccordionRowItem,
} from './__styles'

const MembersTableWrapper = createComponent(__membersTableWrapper);
const MembersTableInner = createComponent(__membersTableInner);
const MembersTableTitles = createComponent(__membersTableTitles);
const MembersTableTitlesCol1 = createComponent(__membersTableTitlesCol);
const MembersTableTitlesCol2 = createComponent(__membersTableTitlesCol);
const MembersTableTitlesCol3 = createComponent(__membersTableTitlesCol);
const MembersTableRowWrap = createComponent(__membersTableRowWrap);
const MembersTableRowWrapInner = createComponent(__membersTableRowWrapInner);
const MembersRowImg = createComponent(__membersRowImg);
const MembersRowDetail1 = createComponent(__membersRowDetail);
const MembersRowDetail2 = createComponent(__membersRowDetail);
const MembersRowDetail3 = createComponent(__membersRowDetail);
const MembersRowDetailAction = createComponent(__membersRowDetail);
const MembersRowExpandBtn = createComponent(__membersRowExpandBtn);
const MembersTableAccordion = createComponent(__membersTableAccordion);
const MembersTableAccordionTitle = createComponent(__membersTableAccordionTitle);
const MembersTableAccordionHeaderWrap = createComponent(__membersTableAccordionHeaderWrap);
const MembersTableAccordionHeader = createComponent(__membersTableAccordionHeader);
const MembersTableAccordionRow = createComponent(__membersTableAccordionRow);
const MembersTableAccordionRowItem = createComponent(__membersTableAccordionRowItem);

const MembersTable = ({
  titleCol1 = 'Name',
  titleCol2 = 'Phone',
  titleCol3 = 'Subscription',
  memberName,
  memberContact,
  subscriptionDetails,
}) => (
  <MembersTableWrapper>
    <MembersTableInner>

      <MembersTableTitles>
        <MembersTableTitlesCol1>
          {titleCol1}
        </MembersTableTitlesCol1>
        <MembersTableTitlesCol2>
          {titleCol2}
        </MembersTableTitlesCol2>
        <MembersTableTitlesCol3>
          {titleCol3}
        </MembersTableTitlesCol3>
      </MembersTableTitles>

      <MembersTableRowWrap>
        <MembersTableRowWrapInner>
          <MembersRowImg>
            <img src="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" alt="Avatar"/>
          </MembersRowImg>

          <MembersRowDetail1>
            {memberName}
          </MembersRowDetail1>

          <MembersRowDetail2>
          {memberContact}
          </MembersRowDetail2>

          <MembersRowDetail3>
            <Tag tagText={`${subscriptionDetails.type}: ${subscriptionDetails.duration}`} tagColor="yellow"/>
          </MembersRowDetail3>

          <MembersRowDetailAction>
            {subscriptionDetails.actions}
          </MembersRowDetailAction>

          <MembersRowExpandBtn>
            +
          </MembersRowExpandBtn>
        </MembersTableRowWrapInner>

        <MembersTableAccordion>
          <MembersTableAccordionTitle>
            Membership Details
          </MembersTableAccordionTitle>

          <MembersTableAccordionHeaderWrap>
            <MembersTableAccordionHeader>
              Subscription
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              Plan Period
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              End Date
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              Score
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              Trainer
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              Classes
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              Status
            </MembersTableAccordionHeader>
            <MembersTableAccordionHeader>
              Actions
            </MembersTableAccordionHeader>
          </MembersTableAccordionHeaderWrap>

          <MembersTableAccordionRow>
            <MembersTableAccordionRowItem>
              {subscriptionDetails.type}
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              {subscriptionDetails.duration}
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              {subscriptionDetails.endDate}
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              {subscriptionDetails.score}
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              {subscriptionDetails.trainerName}
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              {`${subscriptionDetails.attendance}/${subscriptionDetails.classLimit}`}
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              <Tag tagText="active" tagColor="green"/>
            </MembersTableAccordionRowItem>
            <MembersTableAccordionRowItem>
              {subscriptionDetails.actions}
            </MembersTableAccordionRowItem>
          </MembersTableAccordionRow>

        </MembersTableAccordion>

      </MembersTableRowWrap>


    </MembersTableInner>

  </MembersTableWrapper>
);

export default MembersTable;
