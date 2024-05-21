import jwt from 'jsonwebtoken'
export const verifyToken = async(req, res, next)=>{
    try{
        if(!req.headers.authorization){
            return res.status(401, 'Unauthorized');
        }
        const token = req.headers.authorization.split(' ')[1];
        if(!token) return res.status(401, 'Unauthorized');
        const decode = jwt.verify(token, process.env.JWT)
        req.user = decode
        next();
    }catch(err){ console.log(err) }
}