# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index                                                                                         'products'                      [GET] 
- Show  (product_id: number)                                                                    'products/:id'                  [GET] 
- Create [token required] (name: string, price: number)                                         'products'                      [POST] 

#### Users
- Index [token required]                                                                        'users'                         [GET]
- Show [token required] (user_id: number)                                                       'users/:id'                     [GET]
- Create (firstName: string, lastName: string, password: string)                                'users'                         [POST]
- Login  (firstName: string, password: string)                                                  'users/login'                   [POST]
- Current user order [token required] (user_id: number)                                         'users/:id/order'               [GET]

#### Orders
- Create Order for user [token required] (userId: number)                                       'orders'                        [POST]
- Add Product to order  [token required] (id: number, productId:number, quantity: number)       'orders/:id/products'           [POST]
- Completed Orders by user [token required] (user_id: number)                                   'orders/complete'               [PUT]

## Data Shapes
#### Product
- id
- name
- price

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## Table Shapes
#### Products
- Id SERIAL
- Name VARCHAR(100) 
- Price INT

#### Users
- Id SERIAL 
- FirstName VARCHAR(100) 
- LastName VARCHAR(100) 
- Password VARCHAR(200)

#### Orders
- Id SERIAL 
- User_Id INT [foreign key to users table]
- IsActive BOOLEAN

#### Orders_Products
- Id SERIAL 
- Order_Id INT [foreign key to orders table]
- Product_Id INT [foreign key to products table]
- Quantity INT
