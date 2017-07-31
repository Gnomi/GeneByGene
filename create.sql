USE master; 
GO 

--DROP DATABASE GeneDB
CREATE DATABASE GeneDB
ON      ( NAME = Sales_dat, FILENAME = 'C:\temp\dbFolder\JonDB.mdf') 
LOG ON  ( NAME = Sales_log, FILENAME = 'C:\temp\dbFolder\JonDB.ldf'); 
GO

	