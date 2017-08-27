const STORE = {
  itemList: 
  [ {name: "apples", price: 1.19, checked: false},
    {name: "oranges", price: 1.79, checked: false},
    {name: "milk", price: 2.49, checked: true},
    {name: "bread", price: 1.29, checked: false}
  ],
  editAdd: null,       // null, 'add', or item no being edited
  searchTxt: null,      // null or search text
  fMode: 'all',     // 'all', 'ch', or 'unCh'
  sMode: null         // null, 'hiLo', 'loHi', 'alpha', 'revAlpha'
};

// ** GET ID
function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest('.js-item-index-element')
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);
}

// ***** ADD ITEM SUBMIT HANDLER
function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

// ** ADD ITEM
function addItemToShoppingList(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.itemList.push({name: itemName, checked: false});
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
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
