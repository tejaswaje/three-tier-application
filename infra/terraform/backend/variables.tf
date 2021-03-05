variable "db_password" {
  type = string
}

variable "namespace" {
  type = string
  default = "default"
}

variable "db_name" {
  type = string
  description = "Name of actual database in which tables are created"
}

variable "postgres_db_name" {
  type = string
  description = "Name of database pod"
}

variable "backend_name" {
  type = string
  description = "Service name of backend service"
}