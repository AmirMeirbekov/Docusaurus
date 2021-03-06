/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The MarkdownBlock component is used to parse markdown and render to HTML.
 */

const React = require('react');
const Remarkable = require('./Remarkable');

class MarkdownBlock extends React.Component {
  render() {
    return <Remarkable source={this.props.children} />;
  }
}

module.exports = MarkdownBlock;
