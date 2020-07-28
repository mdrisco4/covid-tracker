import React, { useState } from "react";
import styled from "styled-components";

function Dropdown({ title, items = [], multiselect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState();
  const toggle = () => setOpen(!open);


// //   ****************
//   //   function handleOnClick(item) {
//   //     if (!selection.some((current) => current.id === item.id)) {
//   //       if (!multiselect) {
//   //         setSelection([item]);
//   //       } else if (multiselect) {
//   //         setSelection([...selection, item]);
//   //       }
//   //     }

//   // else {
//   //     let selectionAfterRemoval = selection;
//   //     selectionAfterRemoval = selectionAfterRemoval.filter(
//   //         current => current.id != item.id
//   //     );
//   //     setSelection([...selectionAfterRemoval])
//   // }
//   //   }
// //   ****************


  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item]);
      } else if (multiselect) {
        setSelection([...selection, item]);
      }
    }
  }

//   //   ****************
//   // function isItemInSelection(item) {
//   //     if (selection.find(current => current.id === item.id)) {
//   //         return true
//   //     }
//   //     return false
//   // }
// //   ****************



  const TotalCases = styled.div`
    width: 50%;
    text-align: right;
  `;

  const NewCases = styled.div`
    width: 50%;
    text-align: right;
  `;

  const DDWrapper = styled.div`
    border: 1px solid black;
    width: 25%;
    margin-right: auto;
    margin-left: auto;
  `;

  const DDHeader = styled.div`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  `;

  const DDHeaderTitle = styled.div``;

  const DDHeaderTitleBold = styled.p``;

  const DDHeaderActionWrapper = styled.div``;

  const DDHeaderAction = styled.p``;

  const DDList = styled.ul`
    margin-right: auto;
    margin-left: auto;
    padding: 0;
  `;

  const DDListItem = styled.ul`
    padding: 0;
  `;

  const StateButton = styled.button`
    width: 100%;
    background-color: white;
    &:hover {
      background-color: pink;
    }
  `;

  const StateName = styled.span``;

  return (
    <>
      <TotalCases>total cases:</TotalCases>
      <NewCases>new cases:</NewCases>
      <DDWrapper>
        <DDHeader
          tabIndex={0}
          className="dd-header"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <DDHeaderTitle>
            <DDHeaderTitleBold>{title}</DDHeaderTitleBold>
          </DDHeaderTitle>
          <DDHeaderActionWrapper>
            <DDHeaderAction>{open ? "" : ""}</DDHeaderAction>
          </DDHeaderActionWrapper>
        </DDHeader>
        {open && (
          <DDList>
            {items.map((item) => (
              <DDListItem className="dd-list-item" key={item.id}>
                <StateButton type="button" onClick={() => handleOnClick(item)}>
                  <StateName>{item.value}</StateName>
                </StateButton>
              </DDListItem>
            ))}
          </DDList>
        )}
      </DDWrapper>
    </>
  );
}

export default Dropdown;
