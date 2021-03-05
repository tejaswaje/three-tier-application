variable "database_name" {
  type = string
  default = "dogs"
  description = "Name of actual database in which tables are created"
}

variable "postgres_db_name" {
  type = string
  default = "postgres-db"
  description = "Name of database pod"
}

variable "region" {
  type = string
  default = "ap-southeast-2"
}

variable "backend_name" {
  type = string
  default = "three-tier-backend-svc"
  description = "Service name of backend service"
}