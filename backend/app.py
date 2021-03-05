import json

from flask import request

from conf import create_app, database
from conf.models import Dogs

app = create_app()
app.run(debug=True, port=5000,host='0.0.0.0')

@app.route('/', methods=['GET'])
def fetch():
    dogs = database.get_all(Dogs)
    all_dogs = []
    for dog in dogs:
        new_dog = {
            "id": dog.id,
            "name": dog.name,
            "price": dog.price,
            "breed": dog.breed
        }

        all_dogs.append(new_dog)
    return json.dumps(all_dogs), 200

@app.route('/dog/<dog_id>', methods=['GET'])
def fetch_single(dog_id):
    dog = database.get_single(Dogs, id=dog_id)
    if (dog is not None):
        new_dog = {
            "id": dog.id,
            "name": dog.name,
            "price": dog.price,
            "breed": dog.breed
        }
        return json.dumps(new_dog), 200
    else:
        return {}, 404
    

@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    name = data['name']
    price = data['price']
    breed = data['breed']

    database.add_instance(Dogs, name=name, price=price, breed=breed)
    return json.dumps(data), 200


@app.route('/remove/<dog_id>', methods=['DELETE'])
def remove(dog_id):
    database.delete_instance(Dogs, id=dog_id)
    return json.dumps("Deleted"), 200


@app.route('/edit/<dog_id>', methods=['PUT'])
def edit(dog_id):
    data = request.get_json()
    new_price = data['price']
    database.edit_instance(Dogs, id=dog_id, price=new_price)
    return json.dumps("Edited"), 200