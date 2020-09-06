import React from 'react';
import { createComponent } from 'react-fela';
import Icon from '../../components/Icon';
import Fb from '../common/icons/fb.svg';
import moneyPlant from '../common/icons/moneyPlant.svg';

import {
  __cardWrapper,
  __title,
  __figure,
  __growth,
} from './__styles'

const InfoCardWrapper = createComponent(__cardWrapper);
const Title = createComponent(__title);
const Figure = createComponent(__figure);
const Growth = createComponent(__growth);

const InfoCard = ({
  title,
  figure,
  growth,
  growthStatus = 'positive'
}) => (
  <InfoCardWrapper>
    <Title>
      {title}
    </Title>
    <Figure>
      {figure}
    </Figure>
    <Growth growthStatus={growthStatus}>
      {growthStatus === 'negative' && <Icon glyph={growthStatus === 'negative' ? Fb : moneyPlant} />}
      {growth}
    </Growth>
  </InfoCardWrapper>
);

export default InfoCard;
