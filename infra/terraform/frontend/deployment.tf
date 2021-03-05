resource "kubernetes_deployment" "frontend_deployment" {
  metadata {
    name = "three-tier-frontend"
    labels = {
      app  = "three-tier"
      tier = "frontend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app  = "three-tier"
        tier = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app  = "three-tier"
          tier = "frontend"
        }
      }

      spec {
        container {
          image             = "wajetejas/three-tier-frontend:1.0.0"
          name              = "three-tier-frontend"
          image_pull_policy = "Always"
          port {
            container_port = 5000
          }
        }
      }
    }
  }
}
