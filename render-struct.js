function renderTop(){
  console.log('running render top');
  let rawTxt = '';
  if(STORE.editAdd !== null){
    rawTxt = `
      <div class="formSect" id="js-sect-aedetail">
        <h3>Add Edit Item</h3>
        <label for="shopping-list-entry"></label>
        <input type="text" name="shopping-list-entry" class="js-shopping-list-entry" placeholder="">
        <label for="shopping-list-entry-price">price</label>
        <input type="text" name="shopping-list-entry-price" class="js-shopping-list-entry-price" placeholder="">
        <button type="submit" class="btnSave">Save</button>
        <button type="button" class="btnCancel">Cancel</button>
      </div>`
  }
  else{
    rawTxt = `
      <div class="formSect" id="js-sect-add">
        <h3>Add Item</h3>
        <button type="button">New Item</button>
      </div>
      <div class="formSect" id="js-sect-search"
        <span><h3>Search Items</h3></span>
        <label for="search-text-entry">Search</label>
        <input type="text" name="search-text-entry" class="js-shopping-list-entry" placeholder="">
        <button type="button" class="btnSave">Go search</button>
        <button type="button" class="btnCancel" id="btnSrchCancel">Clear</button>
      </div>
      <div class="formSect" id="js-sect-filter">
        <h3>Filter Items</h3>
        <button type="button" class="btnFilt" id="btnFiltChkd">Checked</button>
        <button type="button" class="btnFilt" id="btnFiltUnChkd">UnChecked</button>
        <button type="button" class="btnFilt" id="noFilter">no Filter</button>
      </div>
      <div class="formSect" id="js-sect-sort">
        <h3>Sort Items</h3>
        <button type="button" class="btnSort" id="btnSrtLoHi">Sort lo->hi</button>
        <button type="button" class="btnSort" id="btnSrtHiLo">Sort hi->lo</button>
        <button type="button" class="btnSort" id="btnSrtAsc">Sort a->z</button>
        <button type="button" class="btnSort" id="btnSrtDesc">Sort z->a</button>
        <button type="button" class="btnSort" id="btnSrtClear">no Sort</button>
      </div>`
  }

  $('#js-std-top').html(rawTxt);
  setButtonStates();

}

function setButtonStates(){
  console.log('running setButtonStates');
  $('.btnFilt, btnSort').removeClass('button-on');
  switch(STORE.fMode){
    case 'ch':
      $('#btnFiltChkd').addClass('button-on');
      break;
    case 'unCh':
      $('#btnFiltUnChkd').addClass('button-on');
      break;
    case 'all':
      $('#noFilter').addClass('button-on');
  }

  switch(STORE.sMode){
    case 'hiLo':
      $('#btnSrtHiLo').addClass('button-on');
      break;
    case 'loHi':
      $('#btnSrtLoHi').addClass('button-on');
      break;
    case 'alpha':
      $('#btnSrtAsc').addClass('button-on');
      break;
    case 'revAlpha':
      $('#btnSrtDesc').addClass('button-on');
      break;
    case 'off':
      $('#btnSrtClear').addClass('button-on');
  }

}
