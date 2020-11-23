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

export {
  msgBoxYesorNo,
  msgBoxNo
};
