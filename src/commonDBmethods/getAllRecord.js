async function getAllRecord(schemaName){
    try {
        
        let data = await schemaName.findAll();
    
        return data;
    } catch (error) {
        return error;
    }
}
module.exports = getAllRecord;  