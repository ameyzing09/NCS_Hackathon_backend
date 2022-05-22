create database `url-shortener`;
use `url-shortener`;
CREATE TABLE `url-shortener`.`url` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `long_url` LONGTEXT NOT NULL,
  `short_url` VARCHAR(45),
  PRIMARY KEY (`id`));
