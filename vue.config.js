module.exports={
    devServer: { //用于配置 webpack-dev-server 的行为
        open: true, 
        host: '0.0.0.0', 
        port: 8080,
        https: false, 
        proxy: null,
        before(app) { //mock 数据
            app.use(function(req,rep,next){//使用中间件
                if(/^\/api/.test(req.path)){
                    if(req.path == '/api/login'||req.header.token){
                        next()
                    }else{
                        res.sendStatus(401)
                    }
                }else{
                    next()
                }
            })
            app.get('/api/login', function (req, res) {
                const{username,password}=req.query;
                if (username=='admin'&&password=='123'){
                    res.json({
                        code:0,
                        token:'bulabula'
                    })
                }else{
                    res.json({
                        code: 1,
                        message: '用户名或密码错误'
                    })
                }
            });
            app.get('/api/logout', function (req, res) {
               
                res.json({
                    code: -1
                })
            });
            app.get('/api/goods', function (req, res) {
                res.json({
                    data: [
                        { id: 1, text: 'apple', price: 100 },
                        { id: 2, text: 'pen', price: 200 }
                    ]
                });
            });
        }
    }
}