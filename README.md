package users:
    property: email, password, List(orders),
    API:
        sign up:(POST)
            url: "/api/user/signup",
            required: 
                email(String), 
                password(String),
            response: The created user object, with status code 201,
                exception: User already exists, code 400,
        login:(POST)
            url: "/api/user/login",
            required: 
                email(String), 
                password(String),
            response: The user object, with status code 201,
                exception: User doesn't exist, code 400,
                    Wrong password, code 401

package books:
    property: id, price, author, stock, featured, image, name, description, List(images), List(conditions),
    API:
        getAllBooks:(GET)
            url: "/api/user/books",
            response: List(Book), code 200
        findBookByName:(POST)
            url: "/api/user/books/searchbyname",
            required: name(String),
            response: The book object(if exist)/null(if not exist), code 201
        findBookByAuthor:(POST)
            url: "/api/user/books/searchbyauthor",
            required: id(String),
            response: The book object(if exist)/null(if not exist), code 201
        findBookById:(POST)
            url: "/api/user/books/searchbyid",
            required: id(String),
            response: The book object(if exist)/null(if not exist), code 201

package orders:
    property: email, status, address, zipcode, cardNumber, cardNumber, List(bookIds),
    API:
        makePurchase:(POST)
            url: "/api/user/orders/add",
            required: 
                email(String), 
                address(String), 
                zipcode(String), 
                cardNumber(String),
                cardName(String),
                bookIds(List(id(String)))
            response: The created order, code 201
        findBookByAuthor:(POST)
            url: "/api/user/orders/searchbyemail",
            required: email(String),
            response: The list of all orders of the user