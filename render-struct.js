function renderTop(){
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
        <button type="button" class="btnSave" id="btnFiltChkd">Checked</button>
        <button type="button" class="btnSave" id="btnFiltUnChkd">UnChecked</button>
        <button type="button" class="btnSave" id="noFilter">no Filter</button>
      </div>
      <div class="formSect" id="js-sect-sort">
        <h3>Sort Items</h3>
        <button type="button" class="btnSave" id="btnSrtLoHi">Sort lo->hi</button>
        <button type="button" class="btnSave" id="btnSrtHiLo">Sort hi->lo</button>
        <button type="button" class="btnSave" id="btnSrtAsc">Sort a->z</button>
        <button type="button" class="btnSave" id="btnSrtDesc">Sort z->a</button>
        <button type="button" class="btnSave" id="btnSrtClear">no Sort</button>
      </div>`
  }

  $('#js-std-top').html(rawTxt);

}

