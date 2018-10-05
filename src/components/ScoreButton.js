/*
 * ScoreButton.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

// actions
import { incrementPosts, decrementPosts } from '../actions/posts'

class ScoreButton extends Component {
  state = {
    newVote: null,
  }
  increment = () => {
    const {
      idPost, vote, dispatch, displayPosts,
    } = this.props
    dispatch(incrementPosts(vote, idPost, displayPosts))
  }
  decrement = () => {
    const {
      idPost, vote, dispatch, displayPosts,
    } = this.props
    dispatch(decrementPosts(vote, idPost, displayPosts))
  }
  render() {
    const {
      idPost, vote, dispatch, displayPosts,
    } = this.props
    const { newVote } = this.state
    return (
      <div>
        <Button.Group>
          <Button icon="plus" onClick={this.increment} positive />
          <Button.Or text={vote} />
          <Button icon="minus" negative onClick={this.decrement} />
        </Button.Group>
      </div>
    )
  }
}
function mapStateToProps({ state }, props) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(ScoreButton)

