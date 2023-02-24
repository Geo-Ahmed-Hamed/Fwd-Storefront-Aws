ALTER TABLE Orders_Products DROP CONSTRAINT FK_order_product;
ALTER TABLE Orders_Products DROP CONSTRAINT FK_order_order;

DROP TABLE Orders_Products;
DROP TABLE Orders;