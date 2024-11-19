MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8 ;
USE mydb ;

-- -----------------------------------------------------
-- Table mydb.USER DATA
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.USERDATA (
  USER ID INT NOT NULL,
  INCOME VARCHAR(45) NULL,
  ENTER TYPE VARCHAR(45) NULL,
  YEAR PURCHASED VARCHAR(45) NULL,
  PRIMARY KEY (USER ID),
  UNIQUE INDEX iduser_UNIQUE (USER ID ASC) VISIBLE)
ENGINE = InnoDB;

FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456789';

-- -----------------------------------------------------
-- Table mydb.INVESTMENT
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.INVESTMENT (
  INVESTMENT ID INT NOT NULL,
  TYPE VARCHAR(45) NULL,
  YEAR PURCHASED INT NOT NULL,
  YEAR SELLING INT NOT NULL,
  PURCHASE VALUE BIGINT NULL,
  SALE VALUE BIGINT NULL,
  PRIMARY KEY (INVESTMENT ID, YEAR PURCHASED, YEAR SELLING),
  CONSTRAINT TYPE
    FOREIGN KEY ()
    REFERENCES mydb.TYPES ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.YEARS
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.YEARS (
  YEAR PURCHASED INT NULL,
  INDEXATION INT NULL,
  TAX  REGIME INT NULL,
  CONSTRAINT TAX REGIME
    FOREIGN KEY ()
    REFERENCES mydb.TAX REGIME ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT YEAR PURCHASED
    FOREIGN KEY ()
    REFERENCES mydb.INVESTMENT ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.TYPES
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.TYPES (
  LAND/PROPERTY INT NULL,
  GOLD VARCHAR(45) NULL,
  MUTUAL FUNDS VARCHAR(45) NULL,
  STOCKS VARCHAR(45) NULL,
  YEAR VARCHAR(45) NULL,
  `` VARCHAR(45) NULL,
  CONSTRAINT YEAR
    FOREIGN KEY ()
    REFERENCES mydb.YEARS ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.table1
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.table1 (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.table2
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.table2 (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.USER ID
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.USER ID (
  INVESTMENT ID INT NULL,
  CONSTRAINT INVESTMENT ID
    FOREIGN KEY ()
    REFERENCES mydb.INVESTMENT ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE mydb ;

-- -----------------------------------------------------
-- Placeholder table for view mydb.view1
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.view1 (id INT);

-- -----------------------------------------------------
-- View mydb.view1
-- -----------------------------------------------------
DROP TABLE IF EXISTS mydb.view1;
USE mydb;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;