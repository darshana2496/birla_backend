async function deleteRecordById(id,schemaName) {
    try{
        console.log(id,schemaName,'delete');
        let isDeleted =await schemaName.destroy({
            where: {
              id: id
            }
        });
     
        return true;
    }
    catch(e){
        return false;
    }
}
module.exports = deleteRecordById  
