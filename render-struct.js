// Routines to control presentation of forms and buttons

// Select between standard and temp edit/save top
function renderTop(){
  // console.log('running render top');
  let rawTxt = '';
  if(STORE.editAdd !== null){
    $('#js-std-top').addClass('hidden');
    $('#add-edit-top').removeClass('hidden');
  }
  else{
    $('#add-edit-top').addClass('hidden');
    $('#js-std-top').removeClass('hidden');
  }

  setButtonStates();
}

// Set button appearance based on context
function setButtonStates(){
  // console.log('running setButtonStates');
  $('.btnFilt, .btnSort').removeClass('button-on');
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

  if(STORE.searchTxt!==null){
    $('#js-sect-search .btnSave').addClass('button-on');
  }
  else{
    $('#js-sect-search .btnSave').removeClass('button-on'); 
  }

}
