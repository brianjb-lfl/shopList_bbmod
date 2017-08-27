// ** GEN ITEM STRING
function generateItemElement(item) {
  let buttonCode = ''

  // turn off buttons when currently editing an item
  if(STORE.editAdd == null || STORE.editAdd == 'add'){
    buttonCode = 
      `<div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-edit js-item-edit">
          <span class="button-label">edit</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>`;
  }
  
  return  `
    <li class="js-item-index-element" data-item-index="${item.index}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">
        ${item.name}:  ${item.price}</span>
        ${buttonCode}
    </li>`;          
}

// ** GEN LIST STRING
function generateShoppingItemsString(shoppingList) {
  // console.log("Generating shopping list element");

  let itemsCopy = [];

  // when user is entering new element, clear display of existing elements
  if(STORE.editAdd === 'add'){
    itemsCopy = [];
    $('#ae-title').text('Add item');
  }
  else{
  // create copy of data with indeces for manipulation in filter, sort, search
  itemsCopy = shoppingList.map(function(item, index) {
    const iObj = {
      index: index,
      name: item.name,
      price: item.price,
      checked: item.checked};
    return iObj;
  });
  }

  // check for search, edit, filter, sort
  if(STORE.editAdd !== null && STORE.editAdd !=='add'){
    // editing item with idx in STORE.editAdd
    itemsCopy = itemsCopy.filter( item => item.index === STORE.editAdd);
    $('[name=ae-item-name]').val(itemsCopy[0].name);
    $('[name=ae-item-price]').val(itemsCopy[0].price);
    $('#ae-title').text('Edit item');
  }
  else{
    // apply search
    if(STORE.searchTxt !== null){
      itemsCopy = itemsCopy.filter( item => 
        item.name.slice(0,STORE.searchTxt.length).toLowerCase() === STORE.searchTxt.toLowerCase()); 
    }

    // apply filter
    if(STORE.fMode !== 'all'){
      itemsCopy = itemsCopy.filter(appSelFilter);
    }

    // apply sort
    if(STORE.sMode !== 'off'){
      appSelSort(itemsCopy);
    }
  }

  // bring it all together
  const items = itemsCopy.map((item) => generateItemElement(item));
  return items.join("");
}

// APPLY FILTER
function appSelFilter(item){
  // applies the filter selected in STORE.fMode
  // possibilities are:  'ch', 'unCh'
  // filter will not be run if fMode is 'all'
  if(STORE.fMode === 'ch'){
    return item.checked;
  }
  else{
    return !item.checked;
  }
}

// APPLY SORT
function appSelSort(arr){
  // applies selected sort in STORE.sMode
  // possibilities are: price: 'hiLo', 'loHi'  or name: 'alpha', 'revAlpha'
  // this function not be called if sMode = 'off'
  switch (STORE.sMode){
    case 'hiLo':
      arr.sort( (a, b) => b.price - a.price);
      break;
    case 'loHi':
      arr.sort( (a, b) => a.price - b.price);      
      break;
    case 'alpha':
      arr.sort( (a, b) => (a.name > b.name) ? 1 : ( (b.name > a.name) ? -1 : 0) );
      break;
    case 'revAlpha':
      arr.sort( (a, b) => (a.name < b.name) ? 1 : ( (b.name < a.name) ? -1 : 0) );
  }
}

// ***** RENDER SHOPPING LIST
function renderShoppingList() {
  // render the shopping list in the DOM
  // console.log('`renderShoppingList` ran');
  renderTop();
  const shoppingListItemsString = generateShoppingItemsString(STORE.itemList);
  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}