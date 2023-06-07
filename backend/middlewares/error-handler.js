const errorHandler=function(err,req,res,next){
  console.log(err);
  return res.status(500).send({message:'Something went wrong'});
}
module.exports={
  errorHandler
}