CREATE TABLE Orders ( Id SERIAL PRIMARY KEY, 
                      User_Id INT NOT NULL, 
                      IsActive BOOLEAN NOT NULL,
                     
                      CONSTRAINT FK_order_user FOREIGN KEY(User_Id)
                      REFERENCES Users(Id)
                    );

CREATE TABLE Orders_Products ( Id SERIAL PRIMARY KEY, 
                               Order_Id INT NOT NULL, 
                               Product_Id INT NOT NULL, 
                               Quantity INT NOT NULL,
                     
                               CONSTRAINT FK_order_order FOREIGN KEY(Order_Id)
                               REFERENCES Orders(Id),

                               CONSTRAINT FK_order_product FOREIGN KEY(Product_Id)
                               REFERENCES Products(Id)
                    );