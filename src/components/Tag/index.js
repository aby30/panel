import React from 'react';
import { createComponent } from 'react-fela';
import Icon from '../../components/Icon';
import Fb from '../common/icons/fb.svg';
import moneyPlant from '../common/icons/moneyPlant.svg';

import {
  __tagWrapper,
} from './__styles'

const TagWrapper = createComponent(__tagWrapper);

class Tag extends React.Component {
  render() {

    const { tagText = "default text", tagColor = "red" } = this.props
    return (
      <TagWrapper tagColor={tagColor}>
        {tagText}
      </TagWrapper>
    )
  }
}



export default Tag;
