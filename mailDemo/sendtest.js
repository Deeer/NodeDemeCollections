var send = require('./email.js');

var mail = {
    from : 'test <@163.com>',
    subject: 'Active Test',
    to:'@qq.com',
    text: `尊敬的，您好！点击链接即可激活您的
           账号,http://localhost:3000/checkCode为保障您的帐号安全，请在24小时内点击该链接，您也可以将链接复制到浏览器地址栏访问。 若如果您并未尝试修改密码，请忽略本邮件，由此给您带来的不便请谅解。本邮件由系统自动发出，请勿直接回复！` //接收激活请求的链接`
};

send(mail);

