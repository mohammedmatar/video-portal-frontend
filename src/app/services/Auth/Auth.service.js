export class AuthService {
  constructor($log, md5, $http, $sessionStorage){
    'ngInject';
    this.$log = $log;
    this.md5  = md5;
    this.$http = $http;
    this.$sessionStorage = $sessionStorage;
  }
  authenticate(user){
    user.password = generateMD5Hash(user.password, this.md5);
    // let authResp;
    return this.$http.post('http://localhost:3000/user/auth', user).then((resp)=>{
      return  resp;
    }, (err)=>{return {code: 500, error: err}});
  }
  isLogin(){ 
    return (this.$sessionStorage.sessionId !== null) ? 'rrrrr' : 'rf';
  }

}
// @params ( text-> string, md5-> 3d party library
// @Generate MD5 hash and return empty string if text is null or undefined
let generateMD5Hash = (text, md5)=> {
  return md5.createHash(text || '');
}
