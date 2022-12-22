
# JSAU

Wrapper per gestire le risposte da un API basata su standard jsonapi.

## HowTo

Gets the response from your api and wrap it around `JSAU` object.

```

let response = fetch("");
let jsau = new JSAU(response);

```

## JSAU class

Once you get the `JSAU` object you can interact with the document

```

let jsau = new JSAU(response);

// gets an arbitrary member from the document
let jsonapi  = jsau.member("jsonapi");

gets nested member with dot notation
let related = jsau.member("links.related");

// gets the included member
let included = jsau.included();

```

## DataObject

You can use the `DataObject` object to interact with the data

```

// gets the data member as `DataObject`
let data = jsau.data();

// basic infromations
let type = data.type;
let id = data.id;

// gets an arbitrary member from the document
let attributes  = data.member("attributes");

gets nested member with dot notation
let name = data.member("attributes.name");

// gets a specific relationship
let users = data.relationship("users");

```

## DataArray

Working with `DataArray` object when your request loads a collection of resources

```

// gets the data member as `DataArray`
let data = jsau.data();

// gets the first element as `DataObject`
let first = data.first();

// gets the last element as `DataObject`
let last = data.last();

// gets the next element as `DataObject`
let next = data.next();

```
