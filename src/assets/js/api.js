import { MessageBox, Message } from "element-ui";

function msgBoxYesorNo(sucsessmsg, errmsg) {
  MessageBox.confirm('test1', "Confirm", {
    confirmButtonText: 'test2',
    cancelButtonText: 'test3',
  }).then( async () => {
    console.log('성공')
  }).catch(() => {
    Message({
      type: 'info',
      message: errmsg,
      duration: 1500,
      center: true,
    });          
  });
}
function msgBoxNo(errmsg) {
    Message({
      type: 'info',
      message: errmsg,
      duration: 1500,
      center: true,
    });          
}

function routerReplace(url){

  this.$router.replace(url).catch(error => {
    if(error.name != "NavigationDuplicated" ){
      throw error;
    }
  });
}


/* input 3자리마다 콤마 */
function numberComma(x) {
  x = x.replace(/[^0-9]/g,'');   // 입력값이 숫자가 아니면 공백
  x = x.replace(/,/g,'');          // ,값 공백처리
  $("#money").val(x.replace(/\B(?=(\d{3})+(?!\d))/g, ",")); // 정규식을 이용해서 3자리 마다 , 추가 
}

export {
  msgBoxYesorNo,
  msgBoxNo,
  numberComma,
  routerReplace
};
