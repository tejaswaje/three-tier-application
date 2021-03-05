resource "kubernetes_ingress" "frontend_ingress" {
  metadata {
    name = "frontend-ingress"
    labels = {
      app  = "three-tier"
      tier = "frontend"
    }
    annotations = {
      "kubernetes.io/ingress.class" = "nginx"
    }
  }

  spec {
    rule {
      http {
        path {
          path = "/*"
          backend {
            service_name = "three-tier-frontend-svc"
            service_port = 5000
          }
        }
      }
    }
  }
}