const STORE = {
  itemList: 
  [ {name: "apples", price: 1.19, checked: false},
    {name: "oranges", price: 1.79, checked: false},
    {name: "milk", price: 2.49, checked: true},
    {name: "bread", price: 1.29, checked: false}
  ],
  editAdd: null,      // null, 'add', or item id being edited
  searchTxt: null,    // null or search text
  fMode: 'all',       // 'all', 'ch', or 'unCh'
  sMode: 'alpha'      // 'off', 'hiLo', 'loHi', 'alpha', 'revAlpha'
};

// ** GET ID
function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest('.js-item-index-element')
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);
}

// ***** ADD HANDLER
function handleAddClicked() {
  $('#js-sect-add').on('click', 'button', event => {
    console.log('handleAddClicked ran');
    STORE.editAdd = 'add';
    renderShoppingList();
  });
}  

// ***** ADD/EDIT-SAVE HANDLER
function handleAEClicked() {
  $('#js-sect-aedetail').on('click', 'button', event => {
    if(event.currentTarget.id == 'aeBtnSave'){
      console.log('`handleItemSubmit` ran');
      const itemName = $('[name=ae-item-name]').val();
      const itemPrice = $('[name=ae-item-price]').val();
      applyToShoppingList(itemName, itemPrice);
    }
    $('[name=ae-item-name]').val('');
    $('[name=ae-item-price]').val('');
    STORE.editAdd = null;
    STORE.fMode = 'all';
    STORE.sMode = 'off';
    STORE.searchTxt = null;
    renderShoppingList();
  });
}

// ** ADD ITEM
function applyToShoppingList(itemName, itemPrice) {
  console.log(`Adding "${itemName}" to shopping list`);
  if(STORE.editAdd === 'add'){
    STORE.itemList.push({name: itemName, price: itemPrice, checked: false});}
  else{
    STORE.itemList[STORE.editAdd].name = itemName;
    STORE.itemList[STORE.editAdd].price = itemPrice;
    STORE.itemList[STORE.editAdd].checked = false;
  }
  STORE.editAdd = null;
}

// ***** SEARCH HANDLER
function handleSrchClicked(){
  $('#js-sect-search').on('click', 'button', event => {
    if(event.currentTarget.id == 'btnSrchSearch'){
      STORE.searchTxt = $('[name=search-text-entry]').val();
    }
    else{
      STORE.searchTxt = null;
      $('[name=search-text-entry]').val('')
    }
    console.log('store search: ' + STORE.searchTxt);
    renderShoppingList();
  });
}

// ***** FILTER HANDLER
function handleFiltSelClicked(){
  $('#js-sect-filter').on('click', 'button', event => {
    switch($(event.currentTarget).attr('id')){
      case 'btnFiltChkd':
        STORE.fMode = 'ch';
        break;
      case 'btnFiltUnChkd':
        STORE.fMode = 'unCh'; 
        break;
      case 'noFilter':
        STORE.fMode = 'all';
    };

    renderShoppingList();
  });
}

// ***** SORT HANDLER
function handleSortSelClicked(){
  $('#js-sect-sort').on('click', 'button', event => {
    switch($(event.currentTarget).attr('id')){
      case 'btnSrtLoHi':
        STORE.sMode = 'loHi';
        break;
      case 'btnSrtHiLo':
        STORE.sMode = 'hiLo';
        break;
      case 'btnSrtAsc':
        STORE.sMode = 'alpha';
        break;
      case 'btnSrtDesc':
        STORE.sMode = 'revAlpha';
        break;
      case 'btnSrtClear':
        STORE.sMode = 'off';
    };

    renderShoppingList();
  });
}

// ***** CHECK HANDLER
function handleItemCheckClicked() {
  $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
    console.log('`handleItemCheckClicked` ran');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleCheckedForListItem(itemIndex);
    renderShoppingList();
  });
}

// ** TOGGLE CHECKED
function toggleCheckedForListItem(itemIndex) {
  console.log("Toggling checked property for item at index " + itemIndex);
  STORE.itemList[itemIndex].checked = !STORE.itemList[itemIndex].checked;
}

// ***** EDIT HANDLER
function handleEditItemClicked() {
  $('.js-shopping-list').on('click', `.js-item-edit`, event => {
    console.log('handleEditItemClicked ran');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    STORE.editAdd = itemIndex;
    renderShoppingList();
  });
}

// ***** DELETE HANDLER
function handleDeleteItemClicked() {
  $('.js-shopping-list').on('click', `.js-item-delete`, event => {
  console.log('`handleDeleteItemClicked` ran')
  const itemIndex = getItemIndexFromElement(event.currentTarget);
  delItemFromList(itemIndex);
  renderShoppingList();
  });
}

// ** DELETE ITEM
function delItemFromList(itemIndex){
  console.log('`delItemFromList` ran');
  STORE.itemList.splice(itemIndex,1);
}


function handleShoppingList() {
  renderShoppingList();
  handleAddClicked();
  handleAEClicked();
  handleSrchClicked();
  handleFiltSelClicked();
  handleSortSelClicked();
  handleItemCheckClicked();
  handleEditItemClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
