import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon, Input } from 'antd';
const { TextArea } = Input;

const style = {
  pollIcon: {
    fontSize : '45px',
    marginTop: '50%',
    color: '#4264aa',
    cursor: 'pointer'
  },
  inputBox: {
    marginTop: '5%'
  }
};

class CreateNewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

 handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }   
 

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Icon type="file-add" onClick={this.showModal} style={style.pollIcon}/>
        <Modal
          visible={visible}
          title="Your Project Idea"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>
          ]}
        >
        <Input placeholder="Project Title" style={style.inputBox}/>
        <TextArea placeholder="Description" autosize={{ minRows: 2, maxRows: 6 }} style={style.inputBox}/>
        <TextArea placeholder="Technologies" autosize={{ minRows: 2, maxRows: 6 }} style={style.inputBox}/>
        <Input placeholder="Estimated Time Period" style={style.inputBox}/>
        </Modal>
      </div>
    )
  }
}

CreateNewPoll.propTypes = {};

export default CreateNewPoll;
