import React from 'react';

const SelectCmp = (id, self) => {
  let selectedCmp = document.getElementById(`${id}`);
  let textContent = selectedCmp.firstChild.textContent;
  self.setState({company: textContent});
  let currentCmp = document.getElementById('current-cmp');
  currentCmp.textContent = textContent;
  let selectDialog = document.getElementsByClassName('select-cmp-container')[0];
  selectDialog.style.display = 'none';
}

const List = ({ name, email, self, id }) => {
  return (
    <div onClick={() => {SelectCmp(id, self);}} id={`${id}`} className='list w3-panel w3-border' style={{margin: '10px 0px'}}>
      <li className="w3-large w3-padding-small">{name}</li>
      <label>{email}</label>
    </div>
  );
};

export default List;
