function renderTop(){
  console.log('running render top');
  let rawTxt = '';
  if(STORE.editAdd !== null){
    console.log('edit add');
    $('#js-std-top').addClass('hidden');
    $('#add-edit-top').removeClass('hidden');
  }
  else{
    console.log('std');
    $('#add-edit-top').addClass('hidden');
    $('#js-std-top').removeClass('hidden');
  }

  setButtonStates();

}

function setButtonStates(){
  console.log('running setButtonStates');
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

}
