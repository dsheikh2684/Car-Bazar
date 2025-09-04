module.exports=(fn)=>{
    return (req,res,next)=>{
        console.log("wA is called");
        fn(req,res,next).catch(next);
    }
}