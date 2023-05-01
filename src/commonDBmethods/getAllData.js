async function getAllData  (schemaName){
    try {
        let data = await schemaName.find();
        return data;
    } catch (error) {
        return error;
    }
}
module.exports = getAllData;