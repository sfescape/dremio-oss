/*
 * Copyright (C) 2017 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, PropTypes } from 'react';

import { formBody } from 'uiTheme/radium/forms';

export default class FormBody extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    dataQa: PropTypes.string
  };
  render() {
    return (<div style={{...formBody, ...this.props.style}} data-qa={this.props.dataQa}>
      {this.props.children}
    </div>);
  }
}