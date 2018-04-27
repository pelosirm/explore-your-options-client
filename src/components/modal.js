import React from 'react';
import PropTypes from 'prop-types';
import CollegeDetails from './college-detail'

class Modal extends React.Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    const block = {
      display : 'block'
    }
    console.log(this.props.query)
    return (
        <div className="modal" style={block}>
          {this.props.children}
          <div className ="modal-content">
              <span className="close" onClick={this.props.onClose}>&times;</span>
                  <div className="row career-column modal-fill">
                  <CollegeDetails modal={true} query={this.props.query}/>
                  <div className="footer">
                  <button onClick={this.props.onClose}>
                    Close
                  </button>
              </div>
          </div>
          </div>
        </div>

    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  query : PropTypes.object,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;