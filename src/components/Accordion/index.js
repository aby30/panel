import React from 'react';
import { createComponent } from 'react-fela';
import Icon from '../../components/Icon';
import Tag from '../../components/Tag';
import Fb from '../common/icons/fb.svg';
import moneyPlant from '../common/icons/moneyPlant.svg';

import {
__accordionWrap,
  __accordion,
  __accordionTitle,
  __accordionHeaderWrap,
  __accordionHeader,
  __accordionRow,
  __accordionRowItem,
} from './__styles'

const AccordionWrap = createComponent(__accordionWrap);
const Accordion = createComponent(__accordion);
const AccordionTitle = createComponent(__accordionTitle);
const AccordionHeaderWrap = createComponent(__accordionHeaderWrap);
const AccordionHeader = createComponent(__accordionHeader);
const AccordionRow = createComponent(__accordionRow);
const AccordionRowItem = createComponent(__accordionRowItem);

const MembersTable = ({
	data,
	showAccordion = false
}) => (
	<AccordionWrap showAccordion={showAccordion}>
		<Accordion>
			
			<AccordionTitle>
			Membership Details
			</AccordionTitle>

			<AccordionHeaderWrap>
			<AccordionHeader>
				Subscription
			</AccordionHeader>
			<AccordionHeader>
				Plan Period
			</AccordionHeader>
			<AccordionHeader>
				End Date
			</AccordionHeader>
			<AccordionHeader>
				Score
			</AccordionHeader>
			<AccordionHeader>
				Trainer
			</AccordionHeader>
			<AccordionHeader>
				Classes
			</AccordionHeader>
			<AccordionHeader>
				Status
			</AccordionHeader>
			<AccordionHeader>
				Actions
			</AccordionHeader>
			</AccordionHeaderWrap>

			<AccordionRow>
			<AccordionRowItem>
				{data.type}
			</AccordionRowItem>
			<AccordionRowItem>
				{data.duration}
			</AccordionRowItem>
			<AccordionRowItem>
				{data.endDate}
			</AccordionRowItem>
			<AccordionRowItem>
				{data.score}
			</AccordionRowItem>
			<AccordionRowItem>
				{data.trainerName}
			</AccordionRowItem>
			<AccordionRowItem>
				{`${data.attendance}/${data.classLimit}`}
			</AccordionRowItem>
			<AccordionRowItem>
				<Tag tagText="active" tagColor="green"/>
			</AccordionRowItem>
			<AccordionRowItem>
				{data.actions}
			</AccordionRowItem>
			</AccordionRow>

		</Accordion>
	</AccordionWrap>

);

export default MembersTable;
