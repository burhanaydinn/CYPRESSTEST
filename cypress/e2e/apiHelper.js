class ApiHelper {

    orderData(dataId,petId,quantity){
        const order = {
            id: dataId,
            petId: petId,
            quantity: quantity,
            shipDate: new Date().toISOString(),
            status: 'placed',
            complete: true
        };
        return order;
    }

    header(){
        return {
            'Content-Type': 'application/json',
            'accept':'application/json'
        };
    }

    petData(petId,petName,status){
        const pet = {
            "id": petId,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": petName,
            "photoUrls": [
                "string"
            ],
            "tags": [
            {
                "id": 0,
                "name": "string"
            }
            ],
            "status": status
        }
        return pet;
    }
}

export default ApiHelper;