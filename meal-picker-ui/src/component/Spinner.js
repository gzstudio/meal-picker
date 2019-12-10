import React from 'react'
import styled from 'styled-components'
import './Spinner.css'


const StyledSpinnerWrapper = styled.div`
    display: block;
    position: relative;
    box-sizing: content-box;
    width: calc(var(--wheel-size) + 2 * var(--wheel-border-size));
    height: calc(var(--wheel-size) + 2 * var(--wheel-border-size));
    padding: 3px;
    margin: auto;
    background-color: var(--neutral-color);
    border: solid var(--wheel-color) 3px;
    border-radius: 50%;
    user-select: none;
`

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedItem: null,
        };
        this.selectItem = this.selectItem.bind(this);
      }
    
      selectItem() {
        if (this.state.selectedItem === null) {
          const selectedItem = Math.floor(Math.random() * this.props.items.length);
          if (this.props.onSelectItem) {
            this.props.onSelectItem(selectedItem);
          }
          this.setState({ selectedItem });
        } else {
          this.setState({ selectedItem: null });
          setTimeout(this.selectItem, 500);
        }
      }
    
      render() {
        const { selectedItem } = this.state;
        const { items } = this.props;
    
        const wheelVars = {
          '--nb-item': items.length,
          '--selected-item': selectedItem,
        };
        const spinning = selectedItem !== null ? 'spinning' : '';
    
        return (
          <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
              {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      }
}


export default Spinner;