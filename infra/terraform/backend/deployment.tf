resource "kubernetes_deployment" "backend_deployment" {
  metadata {
    name = "three-tier-backend"
    labels = {
      app  = "three-tier"
      tier = "backend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app  = "three-tier"
        tier = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app  = "three-tier"
          tier = "backend"
        }
      }

      spec {
        container {
          image             = "wajetejas/three-tier-backend:1.0.0"
          name              = "three-tier-backend"
          image_pull_policy = "Always"
          port {
            container_port = 5000
          }
          env {
            name  = "POSTGRES_PORT"
            value = "5432"
          }
          env {
            name = "POSTGRES_HOST"
            value = format("%s.%s.svc.cluster.local", var.postgres_db_name,var.namespace)
          }
          env {
            name  = "POSTGRES_USER"
            value = "postgres"
          }
          env {
            name  = "POSTGRES_DB"
            value = var.db_name
          }
          env {
            name = "POSTGRES_PASSWORD"
            value = var.db_password
          }
        }
      }
    }
  }
}
