import React, { Component } from 'react';
import './SelectBox.css';
import { Link } from '@reach/router';

class SelectBox extends Component {
  state = {
    ...this.props,
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
    // starting selected item
  };
  render() {
    const { items, showItems, selectedItem } = this.state;
    return (
      <>
        <div>
          <div
            className="select-box--box"
            style={{ width: this.state.width || 180 }}
          >
            <div className="select-box--container">
              <div className="select-box--selected-item">
                {selectedItem.value}
              </div>
              <div className="select-box--arrow" onClick={this.openDropDown}>
                <span
                  className={`${
                    showItems
                      ? 'select-box--arrow-up'
                      : 'select-box--arrow-down'
                  }`}
                />
              </div>
              <div
                style={{ display: showItems ? 'block' : 'none' }}
                className="select-box--items"
              >
                {items.map(item => (
                  // console.log(item.value)
                  <Link to={`/topics/${item.value}/articles`} key={item.id}>
                    <div
                      key={item.id}
                      onClick={() => this.selectItem(item)}
                      className={selectedItem === item ? 'seleted' : ''}
                    >
                      {item.value}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <input
          type="hidden"
          name={this.state.name}
          value={this.state.selectedItem.id}
        />
      </>
    );
  }
  openDropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };
  selectItem = item =>
    this.setState({
      selectedItem: item,
      showItems: false
    });
}

export default SelectBox;
