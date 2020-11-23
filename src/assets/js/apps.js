import axios from "axios";
import querystring from "querystring";
const servlet = {
    _login: "/api/path",


    ajaxLogin: function (params) {
      return request.get(this._login, params);
    },
  

}

const request = {
// GET
  get: (url, params, callback) => {
    axios({
      method: "get",
      headers: { 'Content-Type': 'application/json' },
      url: url,
      params: params,
      paramsSerializer: params => {
        console.log(params,'test')
        return querystring.stringify(params);
      }
    })
      .then(res => {
        if (res.data.error) throw new Error(res.data.error);
        return callback(res.data);
      })
      .catch(e => {
        // console.log(e);
      });
  },
  // POST
  post: async (url, params) => {
    var res = await axios({
      method: "post",
      url: url,
      data: querystring.stringify(params)
    }).catch(e => {
      // console.log(e);
      throw new Error("Internal Error!");
    });
    if (res.data.error) {
      // console.log('post error', res.data.error);
      throw res.data.error;
    }
    return res.data.data;
  },


}
export { servlet, request };