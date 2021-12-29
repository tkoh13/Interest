import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DropDownButton from "../dropdown/DropDownButton";
import { BsTrash } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

class PinDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // user: null,
        board: null,
    }
  }

  componentDidMount() {
    //   const { users, boards, content, currentUser } = this.props
    //   fetchSaves(currentUser.id);
    // this.setState({ user: users[content.creator_id], board: boards[0].id });
  }

  componentDidUpdate(prevProps, prevState) {
    const { boards } = this.props
    if (!boards) return null
    if (prevProps.content !== this.props.content) {
        this.setState({ board: boards[0].id });
        // this.setState({ user: users[content.creator_id], board: boards[0].id });
    }
  }

  renderSaveActions() {
    const { saves, content, boards, currentUser, openModal, createSave } =
      this.props;
    // debugger
    // const _boardTitle = boards.filter(board => board.id === _save.board_id)
    if (!saves) return null 
    if (saves.filter((save) => save.pin_id === content.id).length) {
      return (
        <div className="save-actions" onClick={() => this.handleUnSave()}>
          {`Remove from ${
            boards.filter(
              (board) =>
                board.id ===
                saves.filter((save) => save.pin_id === content.id)[0].board_id
            )[0].title
          } board`}
          <div className="icon-container">
            <BsTrash />
          </div>
        </div>
      );
    } else if (boards.length) {
    //   debugger
      return (
        <div className="save-actions">
            {boards[0].title} <DropDownButton type="boardSave-pd" boards={boards} pin={content} actions={{ boards, currentUser, openModal, createSave }}/>
          {/* {boards.filter((b) => b.id === this.state.board)[0].title} */}
          <button id="login-button" onClick={() => this.handleSave()}>
            Save
          </button>
        </div>
      );
    } else {
      return (
        <div className="save-actions" onClick={() => openModal("createBoard")}>
          Create a board
          <div className="icon-container">
            <BsPlusLg />
          </div>
        </div>
      );
    }
  }

  handleUnSave() {
    const { deleteSave, saves, content } = this.props;
    const save = saves.filter((save) => save.content_id === content.id)[0];
    deleteSave(save.id);
  }

  handleSave() {
    const { createSave, content, boards } = this.props;
    // console.log(boards[0].id)
    // console.log(content.id)
    const save = {
      board_id: this.state.board,
      // board_id: boards[0].id,
      pin_id: content.id,
    };
    createSave(save);
  }

  render() {
    const { id, creator_id, title, photoUrl } = this.props.content;

    return (
      <div className={`pd pin-${this.props.size}`}>
          <div className="pd-action-container">
            <div className="pd-action-head">
              {this.renderSaveActions()}
              {/* <div className="save-pin">Save</div> */}
            </div>
        <Link to={`/pins/${id}`} className="pin-url">

            <div className="pd-action-footer">
              <div className="destination">
                {/* <div className="pd-icon-container">
                  <img src={window.arrowUpRight} alt="destination" className="pd-icon"/>
                </div>
                <div className="pd-icon-container">
                  <img src={window.share} alt="share" className="pd-icon" />
                </div>
                <div className="pd-icon-container">
                  <img src={window.ellipse} alt="more" className="pd-icon" />
                </div> */}
              </div>
            </div>
        </Link>
          </div>
        <div className="pd-image">
          <img src={photoUrl} alt={title} />
        </div>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPin } from '../../actions/pin_actions';
import { fetchSaves, createSave, deleteSave } from "../../actions/save_actions";

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchSaves: (userId) => dispatch(fetchSaves(userId)),
    createSave: (save) => dispatch(createSave(save)),
    deleteSave: (saveId) => dispatch(deleteSave(saveId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDisplay);
